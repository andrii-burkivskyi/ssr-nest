import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { EntityEntity } from '../entities/entities.entity';

@Entity()
export class ProjectEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    color!: string;

    @Column()
    url!: string;

    @OneToMany(type => EntityEntity, entity => entity.project)
    entities!: EntityEntity[];
}
