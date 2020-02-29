import { Project } from "../../../../data/Projects/Project.service";
import ModalStore from "../../../../components/Modal/Modal.store";
import FormStore from "../../../../components/Form/Form.store";
import InputStore from "../../../../components/Form/Input/Input.store";
import ButtonStore from "../../../../components/Button/Button.store";
export declare class ProjectModalStore {
    constructor(modal: ModalStore<Project>);
    modal: ModalStore<Project>;
    form: FormStore<{
        name: InputStore;
        url: InputStore;
        color: InputStore;
    }>;
    submitFormButton: ButtonStore;
    initForm: () => void;
    get i18n(): KeyWithValue<{
        createProject: unknown;
        updateProject: unknown;
        name: unknown;
        color: unknown;
        url: unknown;
        submit: unknown;
    }, import("mobx").IObservableValue<string>>;
}
