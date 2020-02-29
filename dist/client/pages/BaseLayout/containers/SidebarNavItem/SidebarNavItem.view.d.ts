import React, { Component } from "react";
interface ComponentProps {
    classes: any;
    to: string;
    params?: CommonMap;
    svg: (props: SVGProps) => JSX.Element;
    exact?: boolean;
}
export declare class SidebarNavItemBase extends Component<ComponentProps> {
    render(): JSX.Element;
}
export declare const SidebarNavItem: React.ComponentType<Pick<ComponentProps, "exact" | "to" | "svg" | "params"> & {
    classes?: Partial<any> | undefined;
}>;
export {};
