import { InputType, Field } from 'type-graphql';
import { IdFilterInput, StringFilterInput } from '../../../common/filter';
import { PaginationInput } from '../../../common//pagination/pagination.input';

@InputType()
export class ProjectFilterInput {
  @Field(type => IdFilterInput, { nullable: true })
  id?: IdFilterInput;

  @Field(type => StringFilterInput, { nullable: true })
  name?: StringFilterInput;

  @Field(type => StringFilterInput, { nullable: true })
  color?: StringFilterInput;

  @Field(type => StringFilterInput, { nullable: true })
  url?: StringFilterInput;
}

@InputType()
export class ProjectPaginationInput extends PaginationInput(ProjectFilterInput) {}
