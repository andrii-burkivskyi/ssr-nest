import React, { Component } from 'react';
import { observer } from 'mobx-react';
import withStyles, { Styles } from 'react-jss';

import Link from '../../../../components/Link/Link';

import Frontend from '../../../../components/icons/Frontend';
import Backend from '../../../../components/icons/Backend';

import { t } from '../../../../utils/i18n/translations';
import { Routes } from '../../../../core/routes';

import { HeaderNavStore } from './HeaderNav.store';

const styles: Styles = {
  container: {
    display: 'flex',
    padding: '0 10px',
  },
  menu_item: {
    display: 'flex',
    alignItems: 'center',
  },
  menu_item_icon: {
    margin: '0 10px',
    width: '36px',
    height: '36px',
    '& .background': {
      fill: '#E3E4DB',
    },
    '& .icon': {
      fill: '#202c39',
    },
  },
  menu_item_text: {
    fontFamily: '\'Open Sans\', sans-serif',
    color: '#E3E4DB',
    '.active &': {
      boxShadow: '0 2px 0 0 #E3E4DB',
    },
    '$menu_item:hover &': {
      boxShadow: '0 2px 0 0 #E3E4DB',
    },
  },
};

@observer
export class HeaderNavViewBase extends Component<ViewOf<HeaderNavStore>> {
  render() {
    const { model, classes } = this.props;
    return (
      <div className={classes.container}>
        <Link className={classes.menu_item} to={Routes.FRONTEND} params={model.params}>
          <Frontend className={classes.menu_item_icon} />
          <span className={classes.menu_item_text}>
            {t(model.i18n.frontend)}
          </span>
        </Link>
        <Link className={classes.menu_item} to={Routes.BACKEND} params={model.params}>
          <Backend className={classes.menu_item_icon} />
          <span className={classes.menu_item_text}>
            {t(model.i18n.backend)}
          </span>
        </Link>
      </div>
    );
  }
}

export const HeaderNavView = withStyles(styles)(HeaderNavViewBase as any);
