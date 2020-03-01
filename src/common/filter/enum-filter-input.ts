import { InputType, Field } from 'type-graphql';
import { Order } from './filter.types';
import { ICommonFilterInput } from '.';

export const EnumFilterInput = <TItem extends object>(TItemEnum: TItem, name: string) => {
  @InputType(`${name}EnumFilterInput`)
  class EnumFilterInputClass implements ICommonFilterInput {
    @Field(() => TItemEnum, { nullable: true })
    equal?: TItem;

    @Field(() => TItemEnum, { nullable: true })
    not_equal?: TItem;

    @Field(() => [TItemEnum], { nullable: true })
    in?: TItem[];

    @Field(() => [TItemEnum], { nullable: true })
    not_in?: TItem[];

    @Field(() => Order, { nullable: true })
    order?: Order;
  }

  return EnumFilterInputClass;
};
