interface ModOptions {
    [key: string]: string | boolean | undefined;
}
declare const bem: (elementClassName: string, options: ModOptions, addedClassName?: string) => string;
export default bem;
