import React, { Component } from 'react';
import { observer } from 'mobx-react';
import withStyles from 'react-jss';

import Link from '../../../../components/Link/Link';

interface ComponentProps {
    classes: any;
    to: string;
    params?: CommonMap;
    svg: (props: SVGProps) => JSX.Element;
    exact?: boolean;
}

const styles = {
  link: {
    margin: '2px 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '64px',
    '&.active': {
      boxShadow: 'inset 2px 0 0 0 #E3E4DB',
    },
    '&:hover': {
      boxShadow: 'inset 2px 0 0 0 #E3E4DB',
    },
  },
  icon: {
    display: 'inline-block',
    width: '24px',
    height: '24px',
    fill: '#E3E4DB',
  },

};

@observer
export class SidebarNavItemBase extends Component<ComponentProps> {
  render() {
    const Icon = this.props.svg;
    return (
      <Link className={this.props.classes.link} to={this.props.to} params={this.props.params} exact={this.props.exact}>
        <Icon className={this.props.classes.icon} />
      </Link>
    );
  }
}

export const SidebarNavItem = withStyles(styles)(SidebarNavItemBase);
