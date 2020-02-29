/// <reference types="lodash/common/common" />
/// <reference types="lodash" />
/// <reference types="lodash/common/array" />
/// <reference types="lodash/common/collection" />
/// <reference types="lodash/common/date" />
/// <reference types="lodash/common/function" />
/// <reference types="lodash/common/lang" />
/// <reference types="lodash/common/math" />
/// <reference types="lodash/common/number" />
/// <reference types="lodash/common/object" />
/// <reference types="lodash/common/seq" />
/// <reference types="lodash/common/string" />
/// <reference types="lodash/common/util" />
import * as React from 'react';
export declare type ComponentProps = {
    children: React.ReactNode;
    onClick: (event?: MouseEvent) => void;
};
declare class ClickOutside extends React.Component<ComponentProps> {
    handleClickOutside: ((event: any) => void) & import("lodash").Cancelable;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): React.ReactNode;
}
export default ClickOutside;
