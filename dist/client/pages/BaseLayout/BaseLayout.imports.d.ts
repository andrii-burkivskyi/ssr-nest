export declare const BaseLayout: {
    Store: () => Promise<typeof import("./BaseLayout.store").BaseLayoutStore>;
    View: () => Promise<typeof import("./BaseLayout.view").BaseLayoutView>;
    HeaderNavModule: () => Promise<typeof import("./containers/HeaderNav").HeaderNavModule>;
    FrontendSidebarNavModule: () => Promise<typeof import("./containers/FrontendSidebarNav").FrontendSidebarNavModule>;
    BackendSidebarNavModule: () => Promise<typeof import("./containers/BackendSidebarNav").BackendSidebarNavModule>;
    ProjectsModule: () => Promise<typeof import("../Projects").ProjectsModule>;
};
