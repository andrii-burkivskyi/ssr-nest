import { observable } from 'mobx';

import { RequestItemBase } from '../../core/decorators/request/item/RequestItem.base';
import { RequestListBase } from '../../core/decorators/request/list/RequestList.base';
import { GqlConnect, GqlPrimaryField, GqlField } from '../../core/decorators/request/item/requestItem.decorator';
import { GqlListConnect } from '../../core/decorators/request/list/requestList.decorator';

import { ProjectDTO } from '../../../models/projects/projects.dto';

import gql from './gql';
import { ProjectQuery } from './Project.query';

@GqlConnect('Project', gql)
export class Project extends RequestItemBase<ProjectDTO, { id: number }> {
    @GqlPrimaryField()
    @observable id?: number;

    @GqlField()
    @observable name?: string;

    @GqlField()
    @observable color?: string;

    @GqlField()
    @observable url?: string;
}

@GqlListConnect('ProjectsList', gql, Project)
export class ProjectsList extends RequestListBase<Project, ProjectDTO, {id: number }, ProjectQuery> { }
