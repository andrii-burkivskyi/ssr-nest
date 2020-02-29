import * as React from 'react';
import { ModuleBase } from './Module.base';
import { ModulesListBase } from './ModulesList.base';
export declare class ModuleView<T extends ModuleBase> extends React.Component<ModuleOf<T | ModulesListBase>> {
    get module(): Nullable<ModuleBase>;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element | null;
}
