/// <reference types="keymaster" />
declare enum KeybindingScope {
    ALL = "all",
    LIST_FOCUS = "list.focus",
    LIST_OPEN = "list.open"
}
interface InitProps {
    name: KeybindingStore["name"];
    key: KeybindingStore["key"];
    action?: KeybindingStore["action"];
    scope?: KeybindingStore["scope"];
}
export default class KeybindingStore {
    static scope: typeof KeybindingScope;
    constructor(props?: InitProps);
    private defaultProps;
    name: string;
    key: string;
    scope: KeybindingScope;
    action: (event: KeyboardEvent) => void;
    update: (props: Partial<InitProps>) => void;
    reset: () => void;
    setAction: (action: KeyHandler) => void;
    static setScope(scope: KeybindingScope): void;
    static resetScope(): void;
}
export {};
