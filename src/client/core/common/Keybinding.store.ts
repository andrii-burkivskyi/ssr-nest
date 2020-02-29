
import { observable, set, action, computed } from "mobx";
// import key from "keymaster";
import { DEFAULT_STRING, DEFAULT_FUNCTION, IS_NODE } from "../../utils/constants";

// key.filter = (event: FilterEvent) => {
//     const { tagName = DEFAULT_STRING } = (event.target || event.srcElement || {});
//     const skippedScopes = [ KeybindingScope.LIST_OPEN ];
//     const currentScope = <KeybindingScope>key.getScope();
//     if (skippedScopes.includes(currentScope)) { return true }

//     return !(tagName === 'INPUT' || tagName === 'SELECT' || tagName === 'TEXTAREA');
// }

enum KeybindingScope {
    ALL = "all",
    LIST_FOCUS = "list.focus",
    LIST_OPEN = "list.open",
}

interface InitProps {
    name: KeybindingStore["name"];
    key: KeybindingStore["key"];
    action?: KeybindingStore["action"];
    scope?: KeybindingStore["scope"];
}

export default class KeybindingStore {
    static scope = KeybindingScope;

    constructor(props?: InitProps) {
        if (props && !IS_NODE()) {
            set(this, props);
            this.defaultProps = { ...this.defaultProps, ...props };
            this.setAction(this.action)
        }
    }

    @observable private defaultProps: Required<InitProps> = {
        name: DEFAULT_STRING,
        key: DEFAULT_STRING,
        scope: KeybindingScope.ALL,
        action: DEFAULT_FUNCTION
    };
    @observable name: string = DEFAULT_STRING;
    @observable key: string = DEFAULT_STRING;
    @observable scope: KeybindingScope = KeybindingScope.ALL;
    @observable action: (event: KeyboardEvent) => void = DEFAULT_FUNCTION;

    @action update = (props: Partial<InitProps>) => {
        // set(this, props);
        // this.setAction(this.action);
    }

    @action reset = () => {
        // if (this.defaultProps) {
        //     set(this, this.defaultProps);
        //     this.setAction(this.action);
        // }
    }

    @action setAction = (action: KeyHandler) => {
        // if (!IS_NODE()) {
        //     key.unbind(this.key, this.scope);
        //     key(this.key, this.scope, action);
        // }
    }

    @action static setScope(scope: KeybindingScope) {
        // if (!IS_NODE()) {
        //     key.setScope(scope);
        // }
    }

    @action static resetScope() {
        // if (!IS_NODE()) {
        //     key.setScope(KeybindingScope.ALL);
        // }
    }

    // @computed static get globalScope(): KeybindingScope {
    //     return <KeybindingScope>key.getScope();
    // }
}
