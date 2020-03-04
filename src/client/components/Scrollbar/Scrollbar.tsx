import React, { Component } from 'react';
import Scrollbars from 'react-custom-scrollbars';
import withStyles, { Styles } from 'react-jss';

interface ComponentProps {
}

const styles: Styles = {
  container: {
    height: '100%',
    flex: '1 1 0',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
};

class Scrollbar extends Component<ViewOf<ComponentProps>> {
  render() {
    const { children, classes } = this.props;
    return (
      <div className={classes.container}>
        <Scrollbars universal>
          {children}
        </Scrollbars>
      </div>
    );
  }
}

export default withStyles(styles)(Scrollbar as any);
