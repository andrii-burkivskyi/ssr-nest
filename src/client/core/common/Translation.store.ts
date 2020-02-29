import { observable, action, IObservableValue } from "mobx";
import { NULL_CHAR } from "../../utils/constants";

interface InitialProps<T> {
    languages: Translation<T>["languages"];
    keys: Translation<T>["keys"];
}

export default class Translation<T = CommonMap> {
    static language: IObservableValue<keyof Translation["languages"]> = observable.box("en");

    constructor(props: InitialProps<T>) {
        this.languages = props.languages;
        this.keys = props.keys;
        this.i18n = Object.keys(props.keys).reduce((i18n, key) => {
            i18n[key] = observable.box(NULL_CHAR);
            return i18n;
        }, {} as KeyWithValue<T, IObservableValue<string>>);
        this.setLanguage(Translation.language.get());
        Translation.language.observe((change) => { this.setLanguage(change.newValue) })
    }



    @observable i18n: KeyWithValue<T, IObservableValue<string>>;
    @observable private keys: KeyWithValue<T, string>;
    @observable private languages: {
        en: () => Promise<any>;
    };

    @action private setLanguage = async (language: "en" | "ru") => {
        const translations = await this.languages[language]();
        Object.entries<string>(this.keys).forEach(([key, value]) => {
            this.i18n[key].set(translations[value])
        });
    }
}
