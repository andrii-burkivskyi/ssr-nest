declare type Watch = (condition: () => boolean, action: () => void, repeatCount?: number | null) => void;
declare const watch: Watch;
export default watch;
