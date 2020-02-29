export declare class RequestsService {
    requests: Array<Promise<any>>;
    registerRequest: (request: Promise<any>) => void;
    initRequestWait: Promise<any[]>;
}
