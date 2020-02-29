import { Repository } from 'typeorm';
import { CreateEntityInput } from './inputs/create-entity-input';
import { UpdateEntityInput } from './inputs/update-entity-input';
import { DeleteEntityInput } from './inputs/delete-entity-input';
import { EntityFilterInput } from './inputs/entity-filters-input';
import { EntityEntity } from './entities.entity';
import { IPaginationInput } from '../../common/pagination/pagination.input';
export declare class EntitiesService {
    private readonly entitiesRepository;
    constructor(entitiesRepository: Repository<EntityEntity>);
    findAll(input: IPaginationInput<EntityFilterInput>): Promise<{
        items: EntityEntity[];
        totalItems: number;
        take: number | undefined;
        page: number | undefined;
    }>;
    findById(id: number): Promise<EntityEntity | undefined>;
    create(input: CreateEntityInput): Promise<EntityEntity | undefined>;
    update(input: UpdateEntityInput): Promise<EntityEntity | undefined>;
    delete(input: DeleteEntityInput): Promise<number>;
    deleteList(input: DeleteEntityInput[]): Promise<number[]>;
}
