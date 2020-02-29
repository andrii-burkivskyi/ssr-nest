import * as React from "react";
import { Styles } from "react-jss";
interface ComponentProps {
    styles: Styles;
    children: (classes: Record<string, string>) => React.ReactElement;
}
export declare const Jss: React.FunctionComponent<ComponentProps>;
export {};
