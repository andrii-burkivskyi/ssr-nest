import { InputType, Field } from 'type-graphql';
import { Order } from './filter.types';
import { ICommonFilterInput } from '.';

@InputType()
export class StringFilterInput implements ICommonFilterInput {
  @Field((type) => String, { nullable: true })
  equal?: string;

  @Field((type) => String, { nullable: true })
  not_equal?: string;

  @Field((type) => [String], { nullable: true })
  in?: string[];

  @Field((type) => [String], { nullable: true })
  not_in?: string[];

  @Field((type) => String, { nullable: true })
  contains?: string;

  @Field((type) => String, { nullable: true })
  not_contains?: string;

  @Field((type) => Order, { nullable: true })
  order?: Order;
}
