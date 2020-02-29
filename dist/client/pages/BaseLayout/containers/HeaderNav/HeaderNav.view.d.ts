import React, { Component } from "react";
import { HeaderNavStore } from "./HeaderNav.store";
export declare class HeaderNavViewBase extends Component<ViewOf<HeaderNavStore>> {
    render(): JSX.Element;
}
export declare const HeaderNavView: React.ComponentType<Pick<{
    classes: Record<string | number | symbol, string>;
}, never> & {
    classes?: Partial<Record<string | number | symbol, string>> | undefined;
}>;
