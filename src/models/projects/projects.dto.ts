import { Field, Int, ObjectType } from 'type-graphql';
import { PaginationDTO } from '../../common/pagination/pagination.dto';
import { EntityDTO } from '../entities/entities.dto';

@ObjectType()
export class ProjectDTO {
    @Field(() => Int)
    id!: number;

    @Field()
    name!: string;

    @Field()
    color!: string;

    @Field()
    url!: string;

    @Field((type) => [EntityDTO], { defaultValue: [] })
    entities?: EntityDTO[];
}

@ObjectType()
export class ProjectPaginationDTO extends PaginationDTO(ProjectDTO) {}
