import { computed } from "mobx";
import { Service } from '../../core/decorators/service/service.decorator';

// import FormStore from "../../components/Form/Form.store";
// import InputStore from "../../components/Form/Input/Input.store";
import { ProjectsI18n } from "./Projects.i18n";
import { TextFieldStore } from "../../components/NewForm/TextField/TextField.store";
import FormStore from "../../components/NewForm/Form.store";
import { FormItemList } from "../../components/NewForm/core/FormItem.list";

@Service('ProjectsForms')
export class ProjectsForms {
    constructor() {
        this.form.initValues({
            name: 'Andrii',
            url: "http://google.com"
        })
    }
    form = new FormStore({
        fields: {
            name: new TextFieldStore({
                label: this.i18n.name,
            }),

            url: new TextFieldStore({
                label: this.i18n.url,
            }),

            data: new FormItemList(() => ({
                name: new TextFieldStore({
                    label: this.i18n.name
                }),
                url: new TextFieldStore({
                    label: this.i18n.url
                })
            }))
        },
        onSubmit: () => {
            console.log(this.form.data);
        }
    })
    

    @computed get i18n() {
        return ProjectsI18n.i18n;
    }
}
