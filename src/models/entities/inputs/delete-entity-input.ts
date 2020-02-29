import { Field, InputType, Int } from 'type-graphql';

@InputType()
export class DeleteEntityInput {
    @Field(() => Int)
    id!: number;
}
