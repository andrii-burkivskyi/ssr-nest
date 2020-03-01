
import { ObjectType, Field, Int } from 'type-graphql';

export interface IPaginationDTO<D> {
    items: D[];
    totalItems: number;
    take: number;
    page: number;
}

export const PaginationDTO = <D extends object>(DTO: D) => {
    @ObjectType({ isAbstract: true })
  abstract class PaginationDTOClass {
        @Field(() => [DTO])
        items!: D[];

        @Field(() => Int)
        totalItems!: number;

        @Field(() => Int)
        take!: number;

        @Field(() => Int)
        page!: number;
    }

    return PaginationDTOClass;
};

export type PaginationDTO<T> = IPaginationDTO<T>;
