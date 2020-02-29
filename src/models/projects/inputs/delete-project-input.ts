import { Field, InputType, Int } from 'type-graphql';

@InputType()
export class DeleteProjectInput {
    @Field(() => Int)
    id!: number;
}
