import { observable, action, computed } from 'mobx';
import { IS_NODE } from '../../../utils/constants';
import { ModuleBase } from "../module/Module.base";
import { SSRService } from "../../services/SSR.service";

export class GuardBase {
    ssrService: SSRService = ModuleBase.services.get(SSRService);
    @observable isModuleViewRendered = !this.ssrService.isInitLoadEnd;

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
