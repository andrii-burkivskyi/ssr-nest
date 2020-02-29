
import { Field, InputType } from 'type-graphql';
import { UpdateProjectInput } from '../../projects/inputs/update-project-input';

@InputType()
export class CreateEntityInput {
    @Field()
    name!: string;

    @Field(() => UpdateProjectInput)
    project!: UpdateProjectInput;
}
