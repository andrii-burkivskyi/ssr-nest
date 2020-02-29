import { EntitiesService } from './entities.service';
import { CreateEntityInput } from './inputs/create-entity-input';
import { UpdateEntityInput } from './inputs/update-entity-input';
import { DeleteEntityInput } from './inputs/delete-entity-input';
import { EntityFilterInput } from './inputs/entity-filters-input';
import { IPaginationInput } from '../../common/pagination/pagination.input';
import { ProjectsService } from '../projects/projects.service';
export declare class EntitiesResolver {
    private readonly entitiesService;
    private readonly projectsService;
    constructor(entitiesService: EntitiesService, projectsService: ProjectsService);
    entity(id: number): Promise<import("./entities.entity").EntityEntity | undefined>;
    entities(input: IPaginationInput<EntityFilterInput>): Promise<{
        items: import("./entities.entity").EntityEntity[];
        totalItems: number;
        take: number | undefined;
        page: number | undefined;
    }>;
    createEntity(input: CreateEntityInput): Promise<import("./entities.entity").EntityEntity | undefined>;
    updateEntity(input: UpdateEntityInput): Promise<import("./entities.entity").EntityEntity | undefined>;
    deleteEntity(input: DeleteEntityInput): Promise<number>;
    deleteEntities(input: DeleteEntityInput[]): Promise<number[]>;
}
