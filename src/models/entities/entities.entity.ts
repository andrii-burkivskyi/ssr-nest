
import {
  Entity, Column, PrimaryGeneratedColumn, ManyToOne,
} from 'typeorm';
import { ProjectEntity } from '../projects/projects.entity';

@Entity()
export class EntityEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @ManyToOne(() => ProjectEntity, (project) => project.entities)
    project!: ProjectEntity;
}
