import * as React from 'react';
import ReactDOM from 'react-dom';
import { canUseDOM } from '../../utils/dom';
import { IS_NODE } from '../../utils/constants';


class Portal extends React.Component {
    portalNode?: Nullable<HTMLDivElement>;

    componentWillUnmount() {
      if (this.portalNode && !IS_NODE()) {
        document.body.removeChild(this.portalNode);
      }
      this.portalNode = null;
    }

    render() {
      if (!canUseDOM || IS_NODE()) { return null; }

      if (!this.portalNode) {
        this.portalNode = document.createElement('div');
        this.portalNode.style.maxHeight = '0px';
        this.portalNode.style.lineHeight = '0px';
        this.portalNode.style.overflow = 'hidden';
        document.body.appendChild(this.portalNode);
      }

      return ReactDOM.createPortal(
        this.props.children,
        this.portalNode,
      );
    }
}

export default Portal;
