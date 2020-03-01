import { observe } from 'mobx';
import * as qs from 'query-string';
import { flatten } from 'flat';
import isEqual from 'lodash.isequal';

import { DEFAULT_STRING, DEFAULT_OBJECT } from '../../../../utils/constants';
import { ensureNumber } from '../../../../utils/converters';
import { isEmpty, clearUndefinedValues } from '../../../../utils/object';

import { ModuleBase } from '../../../../core/decorators/module/Module.base';
import { LocationService } from '../../../../core/services/Location.service';

import { QueryExtractor } from './query.extractor';
import { QueryFieldBase } from '../field/QueryField.base';

interface InitProps<T> {
    alias?: QueryBase<T>['alias'];
    prefix?: QueryBase<T>['prefix'];
    parent?: QueryBase<T>['parent'];
    beforeGetPagination?: QueryBase<T>['beforeGetPagination'];
}

export class QueryBase<T> {
    constructor(props?: InitProps<T>) {
        this.keys = QueryExtractor(this).keys;
        this.prefix = props?.prefix ?? DEFAULT_STRING;
        this.parent = props?.parent ?? DEFAULT_STRING;
        this.alias = props?.alias ?? DEFAULT_OBJECT;
        this.beforeGetPagination = props?.beforeGetPagination ?? this.beforeGetPagination;
        this.keys.forEach((key) => {
            const isNested = QueryExtractor(this).isNested(key);
            if (isNested) {
                this[key] = new (QueryExtractor(this).Constructor(key))({ ...props, parent: key });
            } else {
                this[key] = new (QueryExtractor(this).Constructor(key))();
            }
        });
        if (!this.parent) {
            this.onInitOrUpdate();
            observe(this.location, 'search', this.onInitOrUpdate);
        }
    }

    private keys: string[];
    private prefix: string;
    private parent: string = DEFAULT_STRING;
    private privatePage?: number;
    private privateTake?: number;
    private alias: { [K in keyof T]?: string };
    private subscribers = [] as Array<(filter: CommonMap) => void>;
    private location: LocationService = ModuleBase.services.get(LocationService);
    private otherQuery: qs.ParsedQuery<string> = DEFAULT_OBJECT;
    private beforeGetPagination: <F>(filter: F) => F = (filter) => filter;
    private prevPagination: CommonMap = DEFAULT_OBJECT;
    page = (page: any) => { this.privatePage = ensureNumber(page); };
    take = (take: any) => { this.privateTake = ensureNumber(take); };

    subscribe = (action: (filter: CommonMap) => void) => {
        this.prevPagination = this.getPagination();
        action(this.getPagination());
        this.subscribers.push(action);
    }

    push = () => {
        const pagination = { [this.pageKey]: this.privatePage, [this.takeKey]: this.privateTake };

        let filter = Object.entries(this.getPaginationFilter()).reduce((acc, [filterKey, filterValue]) => {
            const queryKey = this.alias[filterKey] ?? `${this.prefix}${this.prefix && '_'}${filterKey}`;
            const isNested = QueryExtractor(this).isNested(filterKey);
            if (isNested) {
                let nestedFilterValue = flatten({ [queryKey]: filterValue }, { delimiter: '.', maxDepth: 2, safe: true}) as Object;
                nestedFilterValue = Object.entries(nestedFilterValue).reduce((nestedAcc, [key, value]) => {
                    if (isEmpty(value as Object)) { return nestedAcc; }
                    return { ...nestedAcc, [key]: value };
                }, {});

                return { ...acc, ...nestedFilterValue };
            }

            if (isEmpty(filterValue as Object)) { return acc; }
            return { ...acc, [queryKey]: filterValue };
        }, {});
        filter = flatten(filter, { delimiter: '__', safe: true }) as CommonMap;

        const search = qs.stringify({...this.otherQuery, ...filter, ...pagination }, { arrayFormat: 'comma'});
        this.location.pushQuery(search);
    }

    clear = () => {
        const search = qs.stringify({...this.otherQuery }, { arrayFormat: 'comma'});
        this.location.pushQuery(search);
    }

    private onInitOrUpdate = () => {
        this.updateFilterFromLocation();
        if (isEqual(this.prevPagination, this.getPagination())) {return; }
        this.subscribers.forEach((action) => {
            action(this.getPagination());
        });
        this.prevPagination = this.getPagination();
    }

    private updateFilterFromLocation = (browserQueryProps?: qs.ParsedQuery<string>) => {
        const browserQuery = browserQueryProps ?? qs.parse(this.location.search, { arrayFormat: 'comma' });

        this.keys.forEach((key) => {
            const isNested = QueryExtractor(this).isNested(key);
            if (isNested) {
                const queryField: QueryBase<Object> = this[key];
                queryField.updateFilterFromLocation(browserQuery);
            } else {
                const queryProperty: QueryFieldBase<Object> = this[key];

                const propertyFilter = queryProperty.keys.reduce((acc, propertyKey) => {
                    const browserQueryKey = `${this.prefix}${this.prefix && '_'}${this.parent}${this.parent && '.'}${key}__${propertyKey}`;
                    const aliasQueryKey = `${this.alias[key]}__${propertyKey}`;
                    const browserQueryValue = browserQuery[browserQueryKey];
                    const aliasQueryValue = browserQuery[aliasQueryKey];
                    if (Object.prototype.hasOwnProperty.call(browserQuery, browserQueryKey)) { delete browserQuery[browserQueryKey]; }
                    if (Object.prototype.hasOwnProperty.call(browserQuery, aliasQueryKey)) { delete browserQuery[aliasQueryKey]; }

                    return {
                        ...acc,
                        [propertyKey]: aliasQueryValue ?? browserQueryValue,
                    };
                }, {});

                queryProperty.setFilter(propertyFilter);
            }
        }, {});
        this.page(browserQuery[this.pageKey]);
        this.take(browserQuery[this.takeKey]);
        this.otherQuery = browserQuery;
    }

    private getPaginationFilter = () => {
        return this.keys.reduce((acc, key) => {
            const isNested = QueryExtractor(this).isNested(key);
            if (isNested) {
                const queryField: QueryBase<Object> = this[key];
                return {...acc, [key]: queryField.getPaginationFilter() };
            } else {
                const queryProperty: QueryFieldBase<Object> = this[key];
                return !isEmpty(queryProperty.get())
                    ? { ...acc, [key]: queryProperty.get() }
                    : acc;
            }
        }, {}) as CommonMap;
    }

    getPagination = () => {
        return this.beforeGetPagination(clearUndefinedValues({
            filter: this.getPaginationFilter(),
            page: this.privatePage,
            take: this.privateTake,
        }));
    }

    private get pageKey(): string {
        return `${this.prefix}${this.prefix && '_'}_page`;
    }

    private get takeKey(): string {
        return `${this.prefix}${this.prefix && '_'}_take`;
    }
}
