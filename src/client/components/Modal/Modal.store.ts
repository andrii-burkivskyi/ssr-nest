import * as React from "react";
import { observable, action, set } from "mobx";
import uuid from "uuid";

import { lastItemOf } from "../../utils/arrays";
import KeybindingStore from "../../core/common/Keybinding.store";
import { DEFAULT_ASYNC_FUNCTION, DEFAULT_FUNCTION, DEFAULT_OBJECT } from "../../utils/constants";
import { getParentDataAttributesValue } from "../../utils/dom";

interface InitProps<ModalInitData> {
    isOpen?: ModalStore["isOpen"];
    onClose?: ModalStore["onClose"];
    component?: ModalStore["component"];
    model?: ModalStore["model"];
    initData?: ModalStore["initData"];
}

export default class ModalStore<ModalInitData = CommonMap> {
    static openedModals: ModalStore<any>[] = [];

    static closeLastModal = (event: KeyboardEvent) => {
        const lastModal = lastItemOf(ModalStore.openedModals);
        lastModal && lastModal.close();
    }

    static closeModalsByClick = (event?: MouseEvent) => {
        const clickedElement = (event?.target ?? null) as HTMLElement;
        const reversedOpenedModals = Array.from(ModalStore.openedModals);
        const modalIds = getParentDataAttributesValue(clickedElement, "data-modal-id");
        reversedOpenedModals.some((modal) => {
            const hasContainerElement = modal.containerRef.current?.contains(clickedElement);
            const hasDataTag = modalIds.includes(modal.id);
            if (hasContainerElement || hasDataTag) {
                return true;
            }
            else {
                modal.close();
                return false;
            }
        })

    }

    static hotkeyCloseList = new KeybindingStore({
        key: "esc",
        name: "modal.close",
        scope: KeybindingStore.scope.LIST_OPEN,
        action: ModalStore.closeLastModal
    });

    static hotkeyCloseModal = new KeybindingStore({
        key: "esc",
        name: "modal.close",
        scope: KeybindingStore.scope.ALL,
        action: ModalStore.closeLastModal
    });

    constructor(props?: InitProps<ModalInitData>) {
        if (props) {
            const { isOpen, ...restProps } = props
            if (isOpen) { this.open() }
            set(this, restProps);
        }
    }


    @observable id: string = uuid();
    @observable isOpen: boolean = false;
    @observable isLoading: boolean = false;

    @observable containerRef: React.RefObject<any> = React.createRef();
    @observable onClose = DEFAULT_FUNCTION;
    @observable initData: ModalInitData = DEFAULT_OBJECT as ModalInitData;
    @observable component: () => Promise<any> = DEFAULT_ASYNC_FUNCTION;
    @observable loadedComponent: any = null; 
    @observable model: () => Promise<any> = DEFAULT_ASYNC_FUNCTION;
    @observable loadedModel: any = null; 

    @action open = (initData?: ModalInitData) => {
        this.initData = initData ?? DEFAULT_OBJECT as ModalInitData;
        this.isOpen = true;
        ModalStore.openedModals.push(this)
    }

    @action close = (initData?: ModalInitData) => {
        this.initData = initData ?? this.initData;
        this.isOpen = false;
        this.onClose();
        ModalStore.openedModals = ModalStore.openedModals.filter((modal) => modal.isOpen)
    }

    @action toggle = (initData?: ModalInitData) => {
        this.isOpen ? this.close(initData) : this.open(initData);
    }

    @action load = async () => {
        if (this.isOpen && !this.isLoading) {
            this.isLoading = true;
            if (!this.loadedComponent) {
                this.loadedComponent = await this.component();
            }

            if (!this.loadedModel) {
                const Model  = await this.model();
                this.loadedModel = new Model(this, this.initData);
            }
            this.isLoading = false;
        }
    }
}