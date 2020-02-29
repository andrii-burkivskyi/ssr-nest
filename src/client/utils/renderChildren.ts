import * as React from 'react';

const renderSingleChildren = (children: any, props: any) =>
  children && React.cloneElement(
    children,
    props,
  );

const renderListOfChildren = (children: any, props: any) =>
  React.Children.map(
    children,
    (child) => renderSingleChildren(child, props),
  );

const renderChildren = (children: any, props: any) => (Array.isArray(children)
  ? renderListOfChildren(children, props)
  : renderSingleChildren(children, props));

export default renderChildren;
