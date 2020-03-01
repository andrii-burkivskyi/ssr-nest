import { InputType, Field } from 'type-graphql';
import { Order } from './filter.types';
import { ICommonFilterInput } from '.';

@InputType()
export class NumberFilterInput implements ICommonFilterInput {
  @Field((type) => Number, { nullable: true })
  equal?: number;

  @Field((type) => Number, { nullable: true })
  not_equal?: number;

  @Field((type) => [Number], { nullable: true })
  in?: number[];

  @Field((type) => [Number], { nullable: true })
  not_in?: number[];

  @Field((type) => Number, { nullable: true })
  lt?: number;

  @Field((type) => Number, { nullable: true })
  lte?: number;

  @Field((type) => Number, { nullable: true })
  gt?: number;

  @Field((type) => Number, { nullable: true })
  gte?: number;

  @Field((type) => Order, { nullable: true })
  order?: Order;
}
