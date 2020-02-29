import { observable, action, computed } from 'mobx';
import { IS_NODE } from '../../../utils/constants';

export class GuardBase {
    @observable isModuleViewRendered = IS_NODE();

    @action onMount = () => {
        this.isModuleViewRendered = true;
    }

    @action onUnmount = () => {
        this.isModuleViewRendered = false;
    }

    @computed get isActive(): boolean {
        return this.isModuleViewRendered;
    }
}
