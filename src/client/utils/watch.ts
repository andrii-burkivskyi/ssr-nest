type Watch = (condition: () => boolean, action: () => void, repeatCount?: number | null) => void;

const watch: Watch = (condition, action, repeatCount = 5) => new Promise((resolve) => {
    const waiter = (index: number = 0) => {
        if (condition()) {
            action();
            resolve();
        } else {
            if (repeatCount === null || index < repeatCount) {
                setTimeout(waiter, 50, index + 1);
            }
        }
    };
    waiter();
});

export default watch;