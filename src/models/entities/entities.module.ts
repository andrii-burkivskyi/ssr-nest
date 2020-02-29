import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntitiesResolver } from './entities.resolver';
import { EntitiesService } from './entities.service';
import { EntityEntity } from './entities.entity';
import { ProjectEntity } from '../projects/projects.entity';
import { ProjectsService } from '../projects/projects.service';

@Module({
  imports: [TypeOrmModule.forFeature([EntityEntity, ProjectEntity])],
  providers: [EntitiesResolver, EntitiesService, ProjectsService],
})
export class EntitiesModule {}
