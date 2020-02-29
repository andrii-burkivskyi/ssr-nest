
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectsResolver } from './projects.resolver';
import { ProjectsService } from './projects.service';
import { ProjectEntity } from './projects.entity';
import { EntityEntity } from '../entities/entities.entity';
import { EntitiesService } from '../entities/entities.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProjectEntity, EntityEntity])],
  providers: [ProjectsResolver, ProjectsService, EntitiesService],
})
export class ProjectsModule {}
