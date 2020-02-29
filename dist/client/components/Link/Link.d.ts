import * as React from 'react';
import { LocationService } from '../../core/services/Location.service';
interface ComponentProps {
    to: string;
    exact?: boolean;
    className?: string;
    params?: CommonMap;
    style?: React.CSSProperties;
    onClick?: () => void;
    ['data-tip']?: string;
    ['data-for']?: string;
}
declare class Link extends React.Component<ComponentProps> {
    location: LocationService;
    get className(): string;
    onClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
    render(): JSX.Element;
}
export default Link;
