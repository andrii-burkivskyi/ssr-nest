import { computed } from 'mobx';

import { Service } from '../../../../core/decorators/service/service.decorator';

import { ProjectsI18n } from '../../Projects.i18n';
import { ProjectsRequests } from '../../Projects.requests';
import { ProjectsModals } from '../../Projects.modals';

@Service('ProjectsListStore')
export class ProjectsListStore {
  constructor(
        public requests: ProjectsRequests,
        public modals: ProjectsModals,
  ) {}

    @computed get i18n() {
    return ProjectsI18n.i18n;
  }
}
