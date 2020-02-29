import * as React from "react";
import KeybindingStore from "../../core/common/Keybinding.store";
interface InitProps<ModalInitData> {
    isOpen?: ModalStore["isOpen"];
    onClose?: ModalStore["onClose"];
    component?: ModalStore["component"];
    model?: ModalStore["model"];
    initData?: ModalStore["initData"];
}
export default class ModalStore<ModalInitData = CommonMap> {
    static openedModals: ModalStore<any>[];
    static closeLastModal: (event: KeyboardEvent) => void;
    static closeModalsByClick: (event?: MouseEvent | undefined) => void;
    static hotkeyCloseList: KeybindingStore;
    static hotkeyCloseModal: KeybindingStore;
    constructor(props?: InitProps<ModalInitData>);
    id: string;
    isOpen: boolean;
    isLoading: boolean;
    containerRef: React.RefObject<any>;
    onClose: () => void;
    initData: ModalInitData;
    component: () => Promise<any>;
    loadedComponent: any;
    model: () => Promise<any>;
    loadedModel: any;
    open: (initData?: ModalInitData | undefined) => void;
    close: (initData?: ModalInitData | undefined) => void;
    toggle: (initData?: ModalInitData | undefined) => void;
    load: () => Promise<void>;
}
export {};
