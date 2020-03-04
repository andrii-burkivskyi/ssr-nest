
import React, { Component } from 'react';
import { observer } from 'mobx-react';

import { Styles, createUseStyles } from 'react-jss';
import Scrollbar from '../../components/Scrollbar/Scrollbar';

import Modal from '../../components/Modal/Modal';
import { Jss } from '../../components/Jss/Jss';
// import Icon from "../../../../components/Icon/Icon";
// import addIcon from "../../../../icons/add.svg";


import { ProjectsListView } from './containers/ProjectsList/ProjectsList.view';
import { ProjectsStore } from './Projects.store';

const styles: Styles = {
  container: {
    display: 'flex',
    flex: '1 1 0',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    padding: '10px',
  },
};

@observer
export class ProjectsView extends Component<ViewOf<ProjectsStore>> {
  render() {
    const { model } = this.props;
    return (
      <Jss styles={styles}>
        {(classes) => (
          <Scrollbar>
            <div className={classes.container}>
              <ProjectsListView model={model.list} />

              {/* <button
                                    className={styles.add_project_button}
                                    onClick={model.addNewProject}
                                >
                                    <Icon className={styles.add_project_icon} svg={addIcon} />
                                </button> */}

              {/* <Modal model={model.modals.project} /> */}
            </div>
          </Scrollbar>
        )}
      </Jss>
    );
  }
}
