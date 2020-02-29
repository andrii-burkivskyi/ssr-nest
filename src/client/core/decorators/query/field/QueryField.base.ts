import { DEFAULT_OBJECT } from "../../../../utils/constants";
import { clearUndefinedValues } from "../../../../utils/object";
import { QueryFieldExtractor } from "./queryField.extractor";

export class QueryFieldBase<F> {
    constructor() {
        this.keys = QueryFieldExtractor(this).keys;
        this.keys.forEach((key) => {
            this[key] = (value: any) => {
                this.newFilter = {
                    ...this.newFilter,
                    [key]: QueryFieldExtractor(this).conformer(key)(value)
                }
            }
        })
    }

    keys: string[] = [];
    private shouldUpdate: boolean = false;
    private filter: F = DEFAULT_OBJECT as F;
    private newFilter: F = DEFAULT_OBJECT as F;


    setFilter = (filter: F) => {
        this.filter = this.keys.reduce((acc, key) => ( {
            ...acc,
            [key]: QueryFieldExtractor(this).conformer(key)(filter[key])
        }), {}) as F;
        this.newFilter = DEFAULT_OBJECT as F;
    }

    clear = () => {
        this.newFilter = {} as F;
    }

    update = () => this.shouldUpdate = true;

    get = () => {
        let filter: F;
        if (this.shouldUpdate || this.newFilter === DEFAULT_OBJECT) {
            filter = clearUndefinedValues({
                ...this.filter,
                ...this.newFilter
            })
        }
        else {
            filter = clearUndefinedValues(this.newFilter);
        }

        this.shouldUpdate = false;

        return filter;
    }

}
