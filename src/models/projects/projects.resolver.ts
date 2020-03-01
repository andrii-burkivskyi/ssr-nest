import {
  Resolver, Query, Mutation, Args,
} from '@nestjs/graphql';
import { Int } from 'type-graphql';
import { ProjectsService } from './projects.service';
import { ProjectDTO, ProjectPaginationDTO } from './projects.dto';
import { CreateProjectInput } from './inputs/create-project-input';
import { UpdateProjectInput } from './inputs/update-project-input';
import { DeleteProjectInput } from './inputs/delete-project-input';
import { ProjectPaginationInput, ProjectFilterInput } from './inputs/project-filters-input';
import { EntitiesService } from '../entities/entities.service';
import { IPaginationInput } from '../../common/pagination/pagination.input';

@Resolver(() => ProjectDTO)
export class ProjectsResolver {
  constructor(
    private readonly projectsService: ProjectsService,
    private readonly entitiesService: EntitiesService,
  ) { }

  @Query(() => ProjectDTO, { nullable: true })
  async project(@Args({ name: 'id', type: () => Int }) id: number) {
    return this.projectsService.findById(id);
  }

  @Query(() => ProjectPaginationDTO)
  async projects(
    @Args({ name: 'input', type: () => ProjectPaginationInput, defaultValue: {} })
      input: IPaginationInput<ProjectFilterInput>,
  ) {
    return this.projectsService.findAll(input);
  }

  @Mutation(() => ProjectDTO)
  async createProject(@Args({ name: 'input', type: () => CreateProjectInput }) input: CreateProjectInput) {
    return this.projectsService.create(input);
  }

  @Mutation(() => ProjectDTO)
  async updateProject(@Args({ name: 'input', type: () => UpdateProjectInput }) input: UpdateProjectInput) {
    return this.projectsService.update(input);
  }

  @Mutation(() => Int)
  async deleteProject(@Args({ name: 'input', type: () => DeleteProjectInput }) input: DeleteProjectInput) {
    const project = await this.projectsService.findById(input.id);
    if (project && project.entities.length > 0) {
      await this.entitiesService.deleteList(project.entities);
    }
    return this.projectsService.delete(input);
  }
}
