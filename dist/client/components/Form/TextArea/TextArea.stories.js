"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const mobx_1 = require("mobx");
const mobx_react_1 = require("mobx-react");
const react_1 = require("@storybook/react");
require("assets/global.scss");
const enum_1 = require("../../../utils/enum");
const StorybookCanvas_1 = require("../../StorybookCanvas/StorybookCanvas");
const TextArea_1 = require("./TextArea");
const TextArea_store_1 = require("./TextArea.store");
const textAreas = [
    {
        name: "Standard input",
        model: {
            label: "Standard input",
            placeholder: "Placeholder of standard input",
        },
    },
    {
        name: "No label and placeholder input",
        model: {},
    },
    {
        name: "Read only input",
        model: {
            label: "Read only input",
            defaultValue: "Value of readonly input",
            isReadOnly: true,
        },
    },
    {
        name: "Disabled input",
        model: {
            label: "Disabled input",
            defaultValue: "Value of disabled input",
            isDisabled: true,
        }
    },
    {
        name: "Hidden input",
        model: {
            label: "Hidden input",
            shouldDisplayed: false
        }
    }
];
const subStories = mobx_1.observable([]);
enum_1.EnumObject.getValues(TextArea_store_1.default.theme).forEach((theme) => {
    const colors = {
        [TextArea_store_1.default.theme.DEFAULT]: "#202c39"
    };
    textAreas.forEach((textArea) => {
        subStories.push({
            color: colors[theme] || "#fff",
            name: textArea.name,
            model: new TextArea_store_1.default(Object.assign(Object.assign({}, textArea.model), { theme }))
        });
    });
});
const stories = react_1.storiesOf('TextArea', module);
stories.addDecorator((story) => React.createElement(mobx_react_1.Provider, { state: subStories }, story()));
subStories.forEach((story) => {
    stories.add(`[TextArea][${story.model.theme}] ${story.name}`, () => (React.createElement(StorybookCanvas_1.default, { color: story.color },
        React.createElement(TextArea_1.default, { model: story.model }))));
});
//# sourceMappingURL=TextArea.stories.js.map