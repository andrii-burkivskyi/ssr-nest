import "reflect-metadata";
interface ListRegistration {
    onUpdate?: (item: any) => Promise<void>;
    onDelete?: (item: any) => Promise<void>;
}
export declare class RequestItemBase<DTO = any, ID = any> {
    constructor(data?: Partial<DTO> & ID & ListRegistration);
    private _itemServiceName;
    private getRequest;
    private createRequest;
    private updateRequest;
    private deleteRequest;
    private onDelete?;
    private onUpdate?;
    keys: string[];
    set: (data: Nullable<Partial<DTO>>) => this;
    clear: () => this;
    get: (props: ID) => Promise<void>;
    create: (props: Pick<DTO, Exclude<keyof DTO, keyof ID>>) => Promise<void>;
    update: (props: Partial<Pick<DTO, Exclude<keyof DTO, keyof ID>>>) => Promise<void>;
    delete: () => Promise<void>;
    updateListRegistration: (props: ListRegistration) => void;
    get emptyProps(): {};
    get props(): {};
    get primaryProps(): ID;
}
export {};
