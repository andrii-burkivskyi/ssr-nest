import { Field, Int, InputType } from 'type-graphql';
import { UpdateProjectInput } from '../../projects/inputs/update-project-input';

@InputType()
export class UpdateEntityInput {
    @Field(() => Int)
    id!: number;

    @Field({ nullable: true })
    name?: string;

    @Field(() => UpdateProjectInput, { nullable: true })
    project?: UpdateProjectInput;
}
