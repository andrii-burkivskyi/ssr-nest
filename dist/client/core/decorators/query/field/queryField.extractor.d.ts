import "reflect-metadata";
export declare const QueryFieldExtractor: (target: Object) => {
    keys: string[];
    conformer: (propertyKey: string) => (value: any) => any;
};
