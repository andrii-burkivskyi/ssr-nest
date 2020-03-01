import { InputType, Field, Int } from 'type-graphql';

export interface IPaginationInput<T> {
    filter?: T;
    page?: number;
    take?: number;
}

export const PaginationInput = <TItem extends object>(TItemFilter: TItem) => {
  @InputType({ isAbstract: true })
  abstract class PaginationInputClass {
    @Field(() => TItemFilter, { nullable: true, defaultValue: {} })
    filter!: TItem;

    @Field(() => Int, { nullable: true, defaultValue: 0 })
    page!: number;

    @Field(() => Int, { nullable: true, defaultValue: 20 })
    take!: number;
  }

  return PaginationInputClass;
};

export type PaginationInput<T> = IPaginationInput<T>;
