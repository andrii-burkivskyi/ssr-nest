import { InputType, Field } from 'type-graphql';
import { Order } from './filter.types';
import { ICommonFilterInput } from '.';

@InputType()
export class NumberFilterInput implements ICommonFilterInput {
  @Field(() => Number, { nullable: true })
  equal?: number;

  @Field(() => Number, { nullable: true })
  not_equal?: number;

  @Field(() => [Number], { nullable: true })
  in?: number[];

  @Field(() => [Number], { nullable: true })
  not_in?: number[];

  @Field(() => Number, { nullable: true })
  lt?: number;

  @Field(() => Number, { nullable: true })
  lte?: number;

  @Field(() => Number, { nullable: true })
  gt?: number;

  @Field(() => Number, { nullable: true })
  gte?: number;

  @Field(() => Order, { nullable: true })
  order?: Order;
}
