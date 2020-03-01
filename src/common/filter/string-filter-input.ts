import { InputType, Field } from 'type-graphql';
import { Order } from './filter.types';
import { ICommonFilterInput } from '.';

@InputType()
export class StringFilterInput implements ICommonFilterInput {
  @Field(() => String, { nullable: true })
  equal?: string;

  @Field(() => String, { nullable: true })
  not_equal?: string;

  @Field(() => [String], { nullable: true })
  in?: string[];

  @Field(() => [String], { nullable: true })
  not_in?: string[];

  @Field(() => String, { nullable: true })
  contains?: string;

  @Field(() => String, { nullable: true })
  not_contains?: string;

  @Field(() => Order, { nullable: true })
  order?: Order;
}
