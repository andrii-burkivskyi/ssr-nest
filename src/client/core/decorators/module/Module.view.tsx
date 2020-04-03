import * as React from 'react';
import { observer, Provider } from 'mobx-react';
import { computed, action } from 'mobx';
import { ModuleBase } from './Module.base';
import { ModulesListBase } from './ModulesList.base';

@observer
export class ModuleView<T extends ModuleBase> extends React.Component<ModuleOf<T | ModulesListBase>> {
  @computed get module(): Nullable<ModuleBase> {
    return this.props.module instanceof ModulesListBase
      ? this.props.module.item
      : this.props.module;
  }

  @action
  componentDidMount() {
      this.props?.module instanceof ModulesListBase
        ? this.props?.module.onMount()
        : this.props?.module.guard.onMount();
  }

  @action
  componentWillUnmount() {
      this.props?.module instanceof ModulesListBase
        ? this.props?.module.onUnmount()
        : this.props?.module.guard.onUnmount();
  }

  render() {
    if (!this.module) {
          this.props?.module instanceof ModulesListBase
            ? this.props?.module.initModules.length === 0 && console.error('Cannot render ModuleView without module list store item')
            : console.error('Cannot render ModuleView without module');
          return null;
    }

    const { View, model } = this.module;

    if (!View || !model) { return null; }
    if (!this.module.parent) {
      return (
        <Provider state={this.props.module}>
          <View model={model} />
        </Provider>
      );
    }

    return (<View model={model} />);
  }
}
