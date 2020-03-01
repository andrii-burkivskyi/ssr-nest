import { ProjectsList } from '../../data/Projects/Project.service';
import { ProjectQuery } from '../../data/Projects/Project.query';
import { Service } from '../../core/decorators/service/service.decorator';

@Service('ProjectsRequests')
export class ProjectsRequests {
    projects = new ProjectsList({
        query: new ProjectQuery(),
    });
}
