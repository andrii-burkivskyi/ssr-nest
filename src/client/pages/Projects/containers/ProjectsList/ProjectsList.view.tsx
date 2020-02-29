import * as  React from "react";
import { observer } from "mobx-react";

// import editIcon from "../../../../../../icons/edit.svg";
// import deleteIcon from "../../../../../../icons/delete.svg";

import { Routes } from "../../../../core/routes";

import Link from "../../../../components/Link/Link";

import { ProjectsListStore } from "./ProjectsList.store";
import { Jss } from "../../../../components/Jss/Jss";
import { styles } from "./ProjectsList.jss";

@observer
export class ProjectsListView extends React.Component<ViewOf<ProjectsListStore>> {
    render() {
        const { model } = this.props;
        return (
            <Jss styles={styles}>
                {(classes) => (
                    <>
                        {
                            model.requests.projects.data.map((project) => (
                                <div
                                    key={project.id}
                                    className={classes.container}
                                    style={{ boxShadow: `0 -4px 0 0 ${project.color}` }}
                                >
                                    <div className={classes.header}>
                                        <button
                                            data-modal-id={model.modals.project.id}
                                            className={classes.control_button}
                                            onClick={() => model.modals.project.toggle(project)}
                                        >
                                            {/* <Icon className={classes.control_icon} svg={editIcon} /> */}
                                        </button>

                                        <button className={classes.control_button} onClick={project.delete}>
                                            {/* <Icon className={classes.control_icon} svg={deleteIcon} /> */}
                                        </button>
                                    </div>
                                    <Link
                                        className={classes.content}
                                        to={Routes.PROJECT}
                                        params={{ projectId: project.id }}
                                    >
                                        <h3 className={classes.name}>{project.name}</h3>
                                        <span className={classes.url}>{project.url}</span>
                                    </Link>
                                </div>

                            ))
                        }
                    </>
                )}
            </Jss>
        );
    }
}
