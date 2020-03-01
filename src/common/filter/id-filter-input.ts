import { InputType, Field, Int } from 'type-graphql';
import { Order } from './filter.types';
import { ICommonFilterInput } from '.';

@InputType()
export class IdFilterInput implements ICommonFilterInput {
  @Field((type) => Int, { nullable: true })
  equal?: number;

  @Field((type) => Int, { nullable: true })
  not_equal?: number;

  @Field((type) => [Int], { nullable: true })
  in?: number[];

  @Field((type) => [Int], { nullable: true })
  not_in?: number[];

  @Field((type) => Order, { nullable: true })
  order?: Order;
}
