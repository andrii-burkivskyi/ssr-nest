import "reflect-metadata";
export declare enum RIKeys {
    NAME = "front_ri_keys:name",
    QUERY = "front_ri_keys:query",
    KEYS = "front_ri_keys:keys",
    IS_PRIMARY = "front_ri_keys:is_primary"
}
export interface ConnectedQuery {
    get: string;
    create: string;
    update: string;
    delete: string;
}
interface IGqlFieldProps {
    isPrimary: boolean;
}
export declare const GqlConnect: (name: string, props: ConnectedQuery) => ClassDecorator;
export declare const GqlPrimaryField: () => PropertyDecorator;
export declare const GqlField: (props?: IGqlFieldProps | undefined) => PropertyDecorator;
export {};
