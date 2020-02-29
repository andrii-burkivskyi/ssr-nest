/// <reference types="react" />
/// <reference types="@emotion/core" />
export declare const HeaderNav: {
    Store: () => Promise<typeof import("./HeaderNav.store").HeaderNavStore>;
    View: () => Promise<import("react").ComponentType<Pick<{
        classes: Record<string | number | symbol, string>;
    }, never> & {
        classes?: Partial<Record<string | number | symbol, string>> | undefined;
    }>>;
};
