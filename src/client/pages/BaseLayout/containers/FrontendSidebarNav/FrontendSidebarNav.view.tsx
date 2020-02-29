
import React, { Component } from "react";
import { observer } from "mobx-react";

import Dashboard from "../../../../components/icons/Dashboard";
import { Routes } from "../../../../core/routes";

import { FrontendSidebarNavStore } from "./FrontendSidebarNav.store";
import { SidebarNavItem } from "../SidebarNavItem/SidebarNavItem.view";


@observer
export class FrontendSidebarNavView extends Component<ViewOf<FrontendSidebarNavStore>> {
    render() {
        const { model } = this.props;
        return (
            <>
                <SidebarNavItem to={Routes.FRONTEND} params={model.params} svg={Dashboard} exact />
            </>
        );
    }
}
