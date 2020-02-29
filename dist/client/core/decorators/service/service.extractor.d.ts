import "reflect-metadata";
export declare const ServiceExtractor: <TFunction extends Function>(target: TFunction) => {
    name: string;
    isGlobal: boolean;
};
