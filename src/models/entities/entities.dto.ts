import { Field, Int, ObjectType } from 'type-graphql';
import { PaginationDTO } from '../../common/pagination/pagination.dto';
import { ProjectDTO } from '../projects/projects.dto';

@ObjectType()
export class EntityDTO {
    @Field(() => Int)
    id!: number;

    @Field()
    name!: string;

    @Field(type => ProjectDTO, { defaultValue: {}})
    project!: ProjectDTO;
}

@ObjectType()
export class EntityPaginationDTO extends PaginationDTO(EntityDTO) {}
