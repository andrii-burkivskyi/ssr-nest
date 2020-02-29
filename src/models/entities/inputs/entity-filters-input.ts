import { InputType, Field } from 'type-graphql';
import { IdFilterInput, StringFilterInput } from '../../../common/filter';
import { PaginationInput } from '../../../common/pagination/pagination.input';
import { ProjectFilterInput } from '../../projects/inputs/project-filters-input';

@InputType()
export class EntityFilterInput {
  @Field(() => IdFilterInput, { nullable: true })
  id?: IdFilterInput;

  @Field(() => StringFilterInput, { nullable: true })
  name?: StringFilterInput;

  @Field(() => ProjectFilterInput, { nullable: true })
  project?: ProjectFilterInput;
}

@InputType()
export class EntityPaginationInput extends PaginationInput(EntityFilterInput) {}
