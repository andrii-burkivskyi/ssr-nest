import * as React from "react";
import domAlign from "dom-align";
import throttle from "lodash.throttle";

export type ComponentProps = {
    children: React.ReactNode,
    config: Object, // docs: https://github.com/yiminghe/dom-align#config-object-details
    target: React.RefObject<HTMLElement>,
    resize?: boolean,
};

class DomAlign extends React.PureComponent<ComponentProps> {
    static defaultProps = {
        target: undefined,
        resize: false,
    };

    timeoutId?: NodeJS.Timeout;
    source: React.RefObject<HTMLElement>;
    align: () => void;

    constructor(props: ComponentProps) {
        super(props);

        this.source = React.createRef();
        this.align = throttle((event?: any) => {
            const { target, config } = this.props;
            const { source } = this;
            const isScrollingOnSource = event
                ? Boolean(source.current && event && source.current.contains(event.target))
                : false;

            if (target && target.current && source && source.current && !isScrollingOnSource) {
                // Note: Wait for two react instance ready.
                domAlign(source.current, target.current, config);
            }
        }, 16);
    }

    componentDidMount() {
        this.timeoutId = setTimeout(() => this.align(), 0);
        if (this.props.resize) {
            window.addEventListener('resize', this.align);
            window.addEventListener('scroll', this.align);
            window.addEventListener('wheel', this.align);
        }
    }

    componentDidUpdate() {
        // TODO: make it async. there is a problem of overlay in dialog case.
        this.timeoutId = setTimeout(() => this.align(), 0);
    }

    componentWillUnmount() {
        if (this.props.resize) {
            window.removeEventListener('resize', this.align);
            window.removeEventListener('scroll', this.align);
            window.removeEventListener('wheel', this.align);
        }
        if (this.timeoutId) clearTimeout(this.timeoutId);
    }



    render() {
        return React.cloneElement(
            React.Children.only(this.props.children as any),
            { ref: this.source }
        );
    }
}

export default DomAlign;