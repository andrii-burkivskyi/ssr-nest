import { IObservableValue } from "mobx";
interface InitialProps<T> {
    languages: Translation<T>["languages"];
    keys: Translation<T>["keys"];
}
export default class Translation<T = CommonMap> {
    static language: IObservableValue<keyof Translation["languages"]>;
    constructor(props: InitialProps<T>);
    i18n: KeyWithValue<T, IObservableValue<string>>;
    private keys;
    private languages;
    private setLanguage;
}
export {};
