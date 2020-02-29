import { Component } from "react";
interface ComponentProps {
    width?: number | string;
    height?: number | string;
    color?: string;
    padding?: string;
}
declare class StorybookCanvas extends Component<ComponentProps> {
    render(): JSX.Element;
}
export default StorybookCanvas;
