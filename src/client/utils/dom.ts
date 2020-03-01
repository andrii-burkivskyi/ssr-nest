import { IS_NODE } from './constants';

export const blurAll = () => {
  if (!IS_NODE()) {
    Array.from(document.getElementsByTagName('button')).forEach((item) => item.blur());
    Array.from(document.getElementsByTagName('a')).forEach((item) => item.blur());
    Array.from(document.getElementsByTagName('input')).forEach((item) => item.blur());
    Array.from(document.getElementsByTagName('textarea')).forEach((item) => item.blur());
  }
};

export const scrollTo = (x = 0) => {
  window.scrollTo(x, 0);
};

export const canUseDOM = Boolean(
  typeof window !== 'undefined' &&
    document &&
    document.createElement,
);

export const isParentElementHitTheCondition = (element: Nullable<HTMLElement>, condition: (element: HTMLElement) => boolean) => {
  if (!element) { return false; }
  if (condition(element)) { return true; }

  return isParentElementHitTheCondition(element.parentElement, condition);
};

export const getParentDataAttributesValue = (element: Nullable<HTMLElement>, attributeName: string) => {
  if (!element) { return []; }

  const dataAttributeValue = element.getAttribute(attributeName);
  const parentDataAttributeValue = getParentDataAttributesValue(element.parentElement, attributeName);
  if (dataAttributeValue) {
    parentDataAttributeValue.unshift(dataAttributeValue);
  }

  return parentDataAttributeValue;
};
