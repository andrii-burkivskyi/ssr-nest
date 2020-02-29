import { ObservableString } from "../../../utils/types";
import { FormTheme } from "../../../components/Form/Form.types";
interface InitProps {
    theme?: OptionStore["theme"];
    label: OptionStore["label"];
    value: OptionStore["value"];
    props?: OptionStore["props"];
    onClick?: OptionStore["onClick"];
    isSelected?: OptionStore["isSelected"];
    isChecked?: OptionStore["isChecked"];
    isMultiSelect?: OptionStore["isMultiSelect"];
}
export default class OptionStore {
    static theme: typeof FormTheme;
    constructor(props: InitProps);
    theme: FormTheme;
    label: ObservableString;
    value: number | string;
    props?: CommonMap;
    isSelected: boolean;
    isChecked: boolean;
    isMultiSelect: boolean;
    private onClick;
    select: () => void;
}
export {};
