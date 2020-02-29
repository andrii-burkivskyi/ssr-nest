
import { InputType, Field } from 'type-graphql';
import { Order } from './filter.types';
import { ICommonFilterInput } from '.';

@InputType()
export class BooleanFilterInput implements ICommonFilterInput {
  @Field(type => String, { nullable: true })
  equal?: string;

  @Field(type => String, { nullable: true })
  not_equal?: string;

  @Field(type => Order, { nullable: true })
  order?: Order;
}
