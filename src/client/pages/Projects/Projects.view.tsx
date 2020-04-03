
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
import Input from "../../components/Form/Input/Input";
import { TextField } from "../../components/NewForm/TextField/TextField";
import { NoSsr } from "@material-ui/core";

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    flex: '1 1 0',
    height: '100%',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
    padding: '10px',
    background: "white"
  },
  field: {
    margin: '20px',
  }
});

export const ProjectsView: React.SFC<ViewOf<ProjectsStore>> = observer((props) => {
  const { model } = props;
  const { form } = model.projectsForms;
  const classes = useStyles();
  return (
      <Scrollbar>
        <div className={classes.container}>
          <NoSsr>
            <TextField className={classes.field} model={form.fields.name} />
            <TextField className={classes.field} model={form.fields.url} />
          </NoSsr>
          {/* <Input model={model.projectsForms.form.fields.url} /> */}
          {/* <Input model={model.projectsForms.form.fields.color} /> */}
          {/* <ProjectsListView model={model.list} /> */}


          {/* <button
                                className={styles.add_project_button}
                                onClick={model.addNewProject}
                            >
                                <Icon className={styles.add_project_icon} svg={addIcon} />
                            </button> */}

          {/* <Modal model={model.modals.project} /> */}
        </div>
      </Scrollbar>

  )
})
