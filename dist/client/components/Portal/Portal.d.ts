import * as React from "react";
declare class Portal extends React.Component {
    portalNode?: Nullable<HTMLDivElement>;
    componentWillUnmount(): void;
    render(): React.ReactPortal | null;
}
export default Portal;
