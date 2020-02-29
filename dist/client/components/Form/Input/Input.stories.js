"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const mobx_1 = require("mobx");
const mobx_react_1 = require("mobx-react");
const react_1 = require("@storybook/react");
require("assets/global.scss");
const enum_1 = require("../../../utils/enum");
const validation_1 = require("../../../utils/validation");
const mask_1 = require("../../../utils/mask");
const StorybookCanvas_1 = require("../../../components/StorybookCanvas/StorybookCanvas");
const Input_1 = require("./Input");
const Input_store_1 = require("./Input.store");
const inputs = [
    {
        name: "Standard input",
        model: {
            type: Input_store_1.default.type.TEXT,
            label: "Standard input",
            placeholder: "Placeholder of standard input",
        },
    },
    {
        name: "No label and placeholder input",
        model: {
            type: Input_store_1.default.type.TEXT,
        },
    },
    {
        name: "Validated input (e-mail)",
        model: {
            type: Input_store_1.default.type.EMAIL,
            label: "Validated input (e-mail)",
            validations: [[validation_1.isEmail, "Email should be valid"]]
        },
    },
    {
        name: "Masked input (phone)",
        model: {
            type: Input_store_1.default.type.TEXT,
            label: "Masked input (phone)",
            mask: mask_1.phoneMask,
            validations: [[validation_1.isPhone, "Phone should be valid"]]
        },
    },
    {
        name: "Number input",
        model: {
            type: Input_store_1.default.type.NUMBER,
            label: "Number input",
        },
    },
    {
        name: "Read only input",
        model: {
            type: Input_store_1.default.type.TEXT,
            label: "Read only input",
            defaultValue: "Value of readonly input",
            isReadOnly: true,
        },
    },
    {
        name: "Disabled input",
        model: {
            type: Input_store_1.default.type.TEXT,
            label: "Disabled input",
            defaultValue: "Value of disabled input",
            isDisabled: true,
        }
    },
    {
        name: "Hidden input",
        model: {
            type: Input_store_1.default.type.TEXT,
            label: "Hidden input",
            shouldDisplayed: false
        }
    }
];
const subStories = mobx_1.observable([]);
enum_1.EnumObject.getValues(Input_store_1.default.theme).forEach((theme) => {
    const colors = {
        [Input_store_1.default.theme.DEFAULT]: "#202c39"
    };
    inputs.forEach((input) => {
        subStories.push({
            color: colors[theme] || "#fff",
            name: input.name,
            model: new Input_store_1.default(Object.assign(Object.assign({}, input.model), { theme }))
        });
    });
});
const stories = react_1.storiesOf('Input', module);
stories.addDecorator((story) => React.createElement(mobx_react_1.Provider, { state: subStories }, story()));
subStories.forEach((story) => {
    stories.add(`[Input][${story.model.theme}] ${story.name}`, () => (React.createElement(StorybookCanvas_1.default, { color: story.color },
        React.createElement(Input_1.default, { model: story.model }))));
});
//# sourceMappingURL=Input.stories.js.map