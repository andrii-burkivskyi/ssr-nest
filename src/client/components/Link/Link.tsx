import * as React from 'react';
import { computed, action } from 'mobx';
import { observer } from 'mobx-react';

import { LocationService } from '../../core/services/Location.service';
import { ModuleBase } from '../../core/decorators/module/Module.base';
import { buildUrl } from '../../utils/url';

interface ComponentProps {
    to: string;
    exact?: boolean;
    className?: string;
    params?: CommonMap;
    style?: React.CSSProperties;
    onClick?: () => void;
    ['data-tip']?: string;
    ['data-for']?: string;
};

@observer
class Link extends React.Component<ComponentProps> {
    location: LocationService = ModuleBase.services.get(LocationService);

    @computed get className() {
        const { to, exact = false } = this.props;
        const isActive = this.location.isValidRoute({ route: to, options: { end: exact }});
        return `${this.props.className}${isActive ? ' active' : ''}`;
    }

    @action onClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        const { to, params } = this.props;
        this.location.pushWithParams(to, params)
    }

    render() {
        return (
            <a
                className={this.className}
                style={this.props.style}
                href={buildUrl(this.props.to, this.props.params)}
                onClick={this.onClick}
                data-tip={this.props['data-tip']}
                data-for={this.props['data-for']}
            >
                {this.props.children}
            </a>
        );
    }
}

export default Link;
