import { InputType, Field, Int } from 'type-graphql';

export interface IPaginationInput<T> {
    filter?: T;
    page?: number;
    take?: number;
}

export const PaginationInput = <TItem extends object>(TItemFilter: TItem) => {
  @InputType({ isAbstract: true })
  abstract class PaginationInputClass {
    @Field(type => TItemFilter, { nullable: true, defaultValue: {} })
    filter!: TItem;

    @Field(type => Int, { nullable: true, defaultValue: 0 })
    page!: number;

    @Field(type => Int, { nullable: true, defaultValue: 20 })
    take!: number;
  }

  return PaginationInputClass;
};

export type PaginationInput<T> = IPaginationInput<T>;
