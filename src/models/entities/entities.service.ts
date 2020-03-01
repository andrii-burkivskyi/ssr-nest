
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { merge } from '../../utils/mergeStrategy';
import { getPaginationResponse, JoinType } from '../../utils/buildFindOptions';

import { CreateEntityInput } from './inputs/create-entity-input';
import { UpdateEntityInput } from './inputs/update-entity-input';
import { DeleteEntityInput } from './inputs/delete-entity-input';
import { EntityFilterInput } from './inputs/entity-filters-input';

import { EntityEntity } from './entities.entity';
import { IPaginationInput } from '../../common/pagination/pagination.input';

@Injectable()
export class EntitiesService {
  constructor(
        @InjectRepository(EntityEntity) private readonly entitiesRepository: Repository<EntityEntity>,
  ) {}

  async findAll(input: IPaginationInput<EntityFilterInput>) {
    const joins = [{ type: JoinType.LEFT, alias: 'project' }];
    return getPaginationResponse(this.entitiesRepository, input, joins);
  }

  async findById(id: number): Promise<EntityEntity | undefined> {
    return this.entitiesRepository.findOne({ id }, { relations: ['project'] });
  }

  async create(input: CreateEntityInput): Promise<EntityEntity | undefined> {
    const entity = this.entitiesRepository.create(input);
    const response = await this.entitiesRepository.save(entity);
    return this.findById(response.id);
  }

  async update(input: UpdateEntityInput): Promise<EntityEntity | undefined> {
    const currentEntity = await this.entitiesRepository.findOne({ id: input.id });
    if (currentEntity) {
      const { project, ...entityProps } = input;
      const entity = this.entitiesRepository.create(merge(currentEntity, entityProps));
      await this.entitiesRepository.save(entity, { reload: false });
      return this.findById(input.id);
    }
    throw new HttpException(`Can't find entity with id [${input.id}]`, HttpStatus.NOT_FOUND);
  }

  async delete(input: DeleteEntityInput): Promise<number> {
    await this.entitiesRepository.delete(input.id);
    return input.id;
  }

  async deleteList(input: DeleteEntityInput[]): Promise<number[]> {
    const ids = input.map((entity) => entity.id);
    await this.entitiesRepository.delete(ids);
    return ids;
  }
}
