import { computed, observe, action } from 'mobx';

import { Project } from '../../../../data/Projects/Project.service';

import ModalStore from '../../../../components/Modal/Modal.store';
import FormStore from '../../../../components/Form/Form.store';
import InputStore from '../../../../components/Form/Input/Input.store';
import ButtonStore from '../../../../components/Button/Button.store';

import { ProjectsI18n } from '../../Projects.i18n';

export class ProjectModalStore {
  constructor(modal: ModalStore<Project>) {
    this.modal = modal;
    this.initForm();
    observe(this.modal, 'isOpen', this.initForm);
  }

    modal: ModalStore<Project>;

    form = new FormStore({
      fields: {
        name: new InputStore({
          type: InputStore.type.TEXT,
          label: this.i18n.name,
        }),
        url: new InputStore({
          type: InputStore.type.TEXT,
          label: this.i18n.url,
        }),
        color: new InputStore({
          type: InputStore.type.TEXT,
          label: this.i18n.color,
        }),
      },
      onSubmit: async () => {
        this.modal.initData.id
          ? this.modal.initData.update(this.form.data)
          : this.modal.initData.create(this.form.data);
        this.modal.close();
      },
    })

    submitFormButton = new ButtonStore({
      text: this.i18n.submit,
      onClick: this.form.submit,
    })

    @action initForm = () => {
      if (this.modal.isOpen) {
        this.form.initValues({
          name: this.modal.initData.name,
          url: this.modal.initData.url,
          color: this.modal.initData.color,
        });
      }
    }

    @computed get i18n() {
      return ProjectsI18n.i18n;
    }
}
