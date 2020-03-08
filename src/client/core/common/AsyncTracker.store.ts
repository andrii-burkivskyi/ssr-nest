import { IS_NODE } from "../../utils/constants";

export class AsyncTracker {
    constructor(props?: { storage: string}) {
        if (!IS_NODE() && props?.storage) {
            this.data = window[props.storage];
        }
    }
    counter = 0;

    private resolver: (() => void) | null = null;

    shouldTrack = true;
    data = {};
    isComplete: Promise<void> | null = null;

    start = () => {
        if (!this.shouldTrack) { return; }

        this.isComplete = this.isComplete ?? new Promise<void>((resolver) => this.resolver = resolver);

        this.counter++;
    }

    done = (data?: CommonMap) => {
        if (!this.shouldTrack) { return; }

        this.counter--;

        if (data) {
            this.data = { ...this.data, ...data };
        }

        if (this.counter <= 0) {
            this.resolver && this.resolver();
        }
    }

    init = () => {
        this.shouldTrack = true;
        this.isComplete = null;
        this.resolver = null;
        this.data = {};
        this.counter = 0;
    }

    clear = () => {
        this.shouldTrack = false;
        this.resolver = null;
        this.isComplete = null;
        this.data = {};
        this.counter = 0;
    }
}