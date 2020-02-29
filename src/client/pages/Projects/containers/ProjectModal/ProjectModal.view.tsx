import React, { Component } from "react";
import { observer } from "mobx-react";

import Input from "../../../../components/Form/Input/Input";


import { t } from "../../../../utils/i18n/translations";
import Button from "../../../../components/Button/Button";

import { ProjectModalStore } from "./ProjectModal.store";
import styles from "./project-modal.scss";

@observer
export class ProjectModalView extends Component<ViewOf<ProjectModalStore>> {
    render() {
        const { model } = this.props;
        return (
            <div ref={model.modal.containerRef} className={styles.container}>
                <h3 className={styles.title}>
                    {
                        model.modal.initData.id
                        ? t(model.i18n.updateProject)
                        : t(model.i18n.createProject)
                    }
                </h3>
                <Input model={model.form.fields.name} />
                <Input model={model.form.fields.color} />
                <Input model={model.form.fields.url} />

                <Button model={model.submitFormButton} />
            </div>
        );
    }
}
