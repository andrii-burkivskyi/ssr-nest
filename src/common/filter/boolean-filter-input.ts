
import { InputType, Field } from 'type-graphql';
import { Order } from './filter.types';
import { ICommonFilterInput } from '.';

@InputType()
export class BooleanFilterInput implements ICommonFilterInput {
  @Field(() => String, { nullable: true })
  equal?: string;

  @Field(() => String, { nullable: true })
  not_equal?: string;

  @Field(() => Order, { nullable: true })
  order?: Order;
}
