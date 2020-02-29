import { Repository, SelectQueryBuilder } from 'typeorm';
import { PaginationInput, IPaginationInput } from '../common/pagination/pagination.input';
export declare enum JoinType {
    LEFT = "left",
    INNER = "inner"
}
interface IJoinProps<Entity = any> {
    type: JoinType;
    alias: string;
}
export declare const getSelectQueryBuilder: <E, P extends any>(repository: Repository<E>, input: PaginationInput<P>, joins?: IJoinProps<any>[]) => SelectQueryBuilder<E>;
export declare const getPaginationResponse: <E, P>(repository: Repository<E>, input: IPaginationInput<P>, joins?: IJoinProps<any>[]) => Promise<{
    items: E[];
    totalItems: number;
    take: number | undefined;
    page: number | undefined;
}>;
export {};
