import {
  Resolver, Query, Mutation, Args,
} from '@nestjs/graphql';
import { Int } from 'type-graphql';
import { EntitiesService } from './entities.service';
import { EntityDTO, EntityPaginationDTO } from './entities.dto';
import { CreateEntityInput } from './inputs/create-entity-input';
import { UpdateEntityInput } from './inputs/update-entity-input';
import { DeleteEntityInput } from './inputs/delete-entity-input';
import { EntityPaginationInput, EntityFilterInput } from './inputs/entity-filters-input';
import { IPaginationInput } from '../../common/pagination/pagination.input';
import { ProjectsService } from '../projects/projects.service';

@Resolver(() => EntityDTO)
export class EntitiesResolver {
  constructor(
        private readonly entitiesService: EntitiesService,
        private readonly projectsService: ProjectsService,
  ) { }

    @Query(() => EntityDTO, { nullable: true })
  async entity(@Args({ name: 'id', type: () => Int }) id: number) {
    return await this.entitiesService.findById(id);
  }

    @Query(() => EntityPaginationDTO)
    async entities(
        @Args({ name: 'input', type: () => EntityPaginationInput, defaultValue: {} })
          input: IPaginationInput<EntityFilterInput>,
    ) {
      return await this.entitiesService.findAll(input);
    }

    @Mutation(() => EntityDTO)
    async createEntity(@Args({ name: 'input', type: () => CreateEntityInput }) input: CreateEntityInput) {
      if (Object.keys(input.project).length > 1) {
        await this.projectsService.update(input.project);
      }
      return await this.entitiesService.create(input);
    }

    @Mutation(() => EntityDTO)
    async updateEntity(@Args({ name: 'input', type: () => UpdateEntityInput }) input: UpdateEntityInput) {
      if (input.project && Object.keys(input.project).length > 1) {
        await this.projectsService.update(input.project);
      }
      return await this.entitiesService.update(input);
    }

    @Mutation(() => Int)
    async deleteEntity(@Args({ name: 'input', type: () => DeleteEntityInput }) input: DeleteEntityInput) {
      return await this.entitiesService.delete(input);
    }

    @Mutation(() => [Int])
    async deleteEntities(@Args({ name: 'input', type: () => [DeleteEntityInput], defaultValue: [] }) input: DeleteEntityInput[]) {
      return await this.entitiesService.deleteList(input);
    }
}
