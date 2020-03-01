import * as React from 'react';
import { observer } from 'mobx-react';
import withStyles, { Styles } from 'react-jss';
import { Routes } from '../../core/routes';

import { ModuleView } from '../../core/decorators/module/Module.view';

import Link from '../../components/Link/Link';
import Logo from '../../components/icons/Logo';
import { Jss } from '../../components/Jss/Jss';

import { BaseLayoutStore } from './BaseLayout.store';
import { reset } from './styles/reset';
import { HeaderNavModule } from './containers/HeaderNav';
import { SidebarNavModulesList, PagesModulesList } from '.';

const styles: Styles = {
  ...reset,
  container: {
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#283845',
  },
  header: {
    display: 'flex',
    height: '64px',
    backgroundColor: '#202c39',
  },
  logo_container: {

    display: 'block',
    height: '64px',
    width: '64px',
    backgroundColor: '#E3E4DB',

  },
  logo_icon: {
    margin: '5px',
    '& .background': {
      fill: '#202c39',
    },
    '& .icon': {
      fill: '#E3E4DB',
    },

  },
  body: {
    display: 'flex',
    flex: '1 1 0',
  },
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 0',
    maxWidth: '64px',
    minWidth: '64px',
    backgroundColor: '#202c39',
  },
  content: {
    display: 'flex',
    flex: '1 1 0',
  },
};

@observer
export class BaseLayoutView extends React.Component<ViewOf<BaseLayoutStore>> {
  render() {
    const { model } = this.props;
    return (
      <Jss styles={styles}>
        {(classes) => (
          <div className={classes.container}>
            <header className={classes.header}>
              <Link className={classes.logo_container} to={Routes.HOME}>
                <Logo className={classes.logo_icon} />
              </Link>
              <ModuleView module={model.module.children.get(HeaderNavModule)} />
            </header>
            <div className={classes.body}>
              <aside className={classes.sidebar}>
                <ModuleView module={model.module.children.get(SidebarNavModulesList)} />
              </aside>
              <div className={classes.content}>
                <ModuleView module={model.module.children.get(PagesModulesList)} />
              </div>
            </div>
          </div>

        )}
      </Jss>
    );
  }
}
