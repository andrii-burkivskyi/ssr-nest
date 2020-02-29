
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { merge } from '../../utils/mergeStrategy';
import { getPaginationResponse, JoinType } from '../../utils/buildFindOptions';

import { CreateProjectInput } from '../projects/inputs/create-project-input';
import { UpdateProjectInput } from '../projects/inputs/update-project-input';
import { DeleteProjectInput } from '../projects/inputs/delete-project-input';
import { ProjectFilterInput } from '../projects/inputs/project-filters-input';

import { ProjectEntity } from '../projects/projects.entity';
import { IPaginationInput } from '../../common/pagination/pagination.input';

@Injectable()
export class ProjectsService {
    constructor(
        @InjectRepository(ProjectEntity) private readonly projectsRepository: Repository<ProjectEntity>,
    ) {}

    async findAll(input: IPaginationInput<ProjectFilterInput>) {
        const joins = [{type: JoinType.LEFT, alias: 'entities' }];
        return getPaginationResponse(this.projectsRepository, input, joins);
    }

    async findById(id: number): Promise<ProjectEntity | undefined> {
        return await this.projectsRepository.findOne({ id }, { relations: ['entities'] });
    }

    async create(input: CreateProjectInput): Promise<ProjectEntity> {
        const project = this.projectsRepository.create(input);
        return await this.projectsRepository.save(project);
    }

    async update(input: UpdateProjectInput): Promise<ProjectEntity | undefined>  {
        const currentProject = await this.projectsRepository.findOne({ id: input.id });
        if (currentProject) {
            const project = this.projectsRepository.create(merge(currentProject, input));
            await this.projectsRepository.save(project);
            return await this.findById(input.id);
        }

        throw new HttpException(`Can't find project with id [${input.id}]`, HttpStatus.NOT_FOUND);
    }

    async delete(input: DeleteProjectInput): Promise<number> {
        await this.projectsRepository.delete(input.id);
        return input.id;
    }
}
