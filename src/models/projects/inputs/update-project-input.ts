import { Field, Int, InputType } from 'type-graphql';

@InputType()
export class UpdateProjectInput {
    @Field(() => Int)
    id!: number;

    @Field({ nullable: true})
    name?: string;

    @Field({ nullable: true })
    color?: string;

    @Field({ nullable: true })
    url?: string;
}
