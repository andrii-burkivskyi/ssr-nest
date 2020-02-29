import { Module } from "../../../../core/decorators/module/module.decorator";
import { ModuleBase } from "../../../../core/decorators/module/Module.base";

import { HeaderNav } from "./HeaderNav.imports";
import { HeaderNavGuard } from "./HeaderNav.guard";

@Module({
    guard: HeaderNavGuard,
    view: HeaderNav.View,
    model: HeaderNav.Store,
})
export class HeaderNavModule extends ModuleBase {};
