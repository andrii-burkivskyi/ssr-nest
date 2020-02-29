import { Repository } from 'typeorm';
import { CreateProjectInput } from '../projects/inputs/create-project-input';
import { UpdateProjectInput } from '../projects/inputs/update-project-input';
import { DeleteProjectInput } from '../projects/inputs/delete-project-input';
import { ProjectFilterInput } from '../projects/inputs/project-filters-input';
import { ProjectEntity } from '../projects/projects.entity';
import { IPaginationInput } from '../../common/pagination/pagination.input';
export declare class ProjectsService {
    private readonly projectsRepository;
    constructor(projectsRepository: Repository<ProjectEntity>);
    findAll(input: IPaginationInput<ProjectFilterInput>): Promise<{
        items: ProjectEntity[];
        totalItems: number;
        take: number | undefined;
        page: number | undefined;
    }>;
    findById(id: number): Promise<ProjectEntity | undefined>;
    create(input: CreateProjectInput): Promise<ProjectEntity>;
    update(input: UpdateProjectInput): Promise<ProjectEntity | undefined>;
    delete(input: DeleteProjectInput): Promise<number>;
}
