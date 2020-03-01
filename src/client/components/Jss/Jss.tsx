import * as React from 'react';
import { createUseStyles, Styles } from 'react-jss';

interface ComponentProps {
    styles: Styles;
    children: (classes: Record<string, string>) => React.ReactElement;
}

export const Jss: React.FunctionComponent<ComponentProps> = ({styles, children}) => {
    const classes = createUseStyles(styles)();
    if (typeof children === 'function') {
        return children(classes);
    }

    return null;
};
