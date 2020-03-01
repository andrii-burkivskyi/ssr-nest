import { InputType, Field, Int } from 'type-graphql';
import { Order } from './filter.types';
import { ICommonFilterInput } from '.';

@InputType()
export class IdFilterInput implements ICommonFilterInput {
  @Field(() => Int, { nullable: true })
  equal?: number;

  @Field(() => Int, { nullable: true })
  not_equal?: number;

  @Field(() => [Int], { nullable: true })
  in?: number[];

  @Field(() => [Int], { nullable: true })
  not_in?: number[];

  @Field(() => Order, { nullable: true })
  order?: Order;
}
