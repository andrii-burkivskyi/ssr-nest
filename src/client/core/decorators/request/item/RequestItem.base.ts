
import "reflect-metadata";
import { set, action, computed } from "mobx";

import Request from "../request";
import { RequestItemExtractor } from "./requestItem.extractor";

interface ListRegistration {
    onUpdate?: (item: any) => Promise<void>;
    onDelete?: (item: any) => Promise<void>;
}

export class RequestItemBase<DTO = any, ID = any> {
    constructor(data?: Partial<DTO> & ID & ListRegistration) {
        const gql = RequestItemExtractor(this).query;
        this.keys = RequestItemExtractor(this).keys;
        this._itemServiceName = RequestItemExtractor(this).name;

        this.getRequest = new Request<DTO, ID>({ query: gql.get })
        this.createRequest = new Request<DTO, InputOf<Subtraction<DTO, ID>>>({ query: gql.create })
        this.updateRequest = new Request<DTO, InputOf<Partial<DTO> & ID>>({ query: gql.update })
        this.deleteRequest = new Request<DTO, InputOf<ID>>({ query: gql.delete })

        this.set(data ?? null);
    }

    private _itemServiceName: string;
    private getRequest: Request<DTO, ID>;
    private createRequest: Request<DTO, InputOf<Subtraction<DTO, ID>>>;
    private updateRequest: Request<DTO, InputOf<Partial<DTO> & ID>>;
    private deleteRequest: Request<DTO, InputOf<ID>>;

    private onDelete?: ListRegistration["onDelete"];
    private onUpdate?: ListRegistration["onUpdate"];

    keys: string[];

    @action set = (data: Nullable<Partial<DTO>>) => {
        data && set(this, {...this.emptyProps, ...data });
        return this;
    }

    @action clear = () => {
        set(this, this.emptyProps);
        return this;
    }

    @action get = async (props: ID) => {
        try {
            const data = await this.getRequest.send(props);
            this.set(data);
        }
        catch (error) {
            await this.onDelete?.(this);
            this.clear();
            console.error(error);
        }
    }

    @action create = async (props: Subtraction<DTO, ID>) => {
        try {
            const data = await this.createRequest.send({ input: props });
            this.set(data);
            this.onUpdate?.(this);
        }
        catch (error) {
            this.clear();
            console.error(error);
        }
    }

    @action update = async (props: Partial<Subtraction<DTO, ID>>) => {
        try {
            const mergedProps = { ...this.props, ...props } as Partial<DTO> & ID;
            const data = await this.updateRequest.send({ input: mergedProps });
            this.set(data);
            this.onUpdate?.(this)
        }
        catch (error) {
            if ( Array.isArray(error)) {
                const errorWithStatus = error.find((e)=> e?.extensions?.exception?.status)
                const errorStatus = errorWithStatus?.extensions?.exception?.status;
                if (errorStatus === 404) {
                    this.onDelete?.(this)
                    this.clear();
                }
            }
            console.error(error);
        }
    }

    @action delete = async () => {
        try {
            await this.deleteRequest.send({ input: this.primaryProps });
            await this.onDelete?.(this)
            this.clear();
        }
        catch (error) {
            console.error(error);
        }
    }

    @action updateListRegistration = (props: ListRegistration) => {
        this.onDelete = props.onDelete;
        this.onUpdate = props.onUpdate;
    }

    @computed get emptyProps() {
        return this.keys.reduce((acc, key) => ({
            ...acc,
            [key]: undefined
        }), {})
    }

    @computed get props() {
        return this.keys.reduce((acc, key) => ({
            ...acc,
            [key]: this[key]
        }), {})
    }

    @computed get primaryProps(): ID {
        return this.keys.reduce((acc, key) => {

            const isPrimary = RequestItemExtractor(this).isPrimary(key);
            if (isPrimary) {
                return { ...acc, [key]: this[key] }
            }
            return acc;
        }, {}) as ID;
    }
}