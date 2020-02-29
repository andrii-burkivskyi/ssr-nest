
import React, { Component } from "react";
import { observer } from "mobx-react";

import Dashboard from "../../../../components/icons/Dashboard";
import Entity from "../../../../components/icons/Entity";
import { Routes } from "../../../../core/routes";

import { SidebarNavItem } from "../SidebarNavItem/SidebarNavItem.view";

import { BackendSidebarNavStore } from "./BackendSidebarNav.store";

@observer
export class BackendSidebarNavView extends Component<ViewOf<BackendSidebarNavStore>> {
    render() {
        const { model } = this.props;
        return (
            <>
                <SidebarNavItem to={Routes.BACKEND} params={model.params} svg={Dashboard} exact />
                <SidebarNavItem to={Routes.BACKEND_ENTITY} params={model.params} svg={Entity} exact />
            </>
        );
    }
}
