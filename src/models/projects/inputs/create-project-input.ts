import { Field, InputType } from 'type-graphql';

@InputType()
export class CreateProjectInput {
    @Field()
    name!: string;

    @Field()
    color!: string;

    @Field()
    url!: string;
}
