import { InputType, Field } from 'type-graphql';
import { IdFilterInput, StringFilterInput } from '../../../common/filter';
import { PaginationInput } from '../../../common/pagination/pagination.input';

@InputType()
export class ProjectFilterInput {
  @Field(() => IdFilterInput, { nullable: true })
  id?: IdFilterInput;

  @Field(() => StringFilterInput, { nullable: true })
  name?: StringFilterInput;

  @Field(() => StringFilterInput, { nullable: true })
  color?: StringFilterInput;

  @Field(() => StringFilterInput, { nullable: true })
  url?: StringFilterInput;
}

@InputType()
export class ProjectPaginationInput extends PaginationInput(ProjectFilterInput) {}
