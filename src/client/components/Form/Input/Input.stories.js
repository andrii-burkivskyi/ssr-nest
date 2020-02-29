"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var mobx_1 = require("mobx");
var mobx_react_1 = require("mobx-react");
var react_1 = require("@storybook/react");
require("assets/global.scss");
var enum_1 = require("../../../utils/enum");
var validation_1 = require("../../../utils/validation");
var mask_1 = require("../../../utils/mask");
var StorybookCanvas_1 = require("../../../components/StorybookCanvas/StorybookCanvas");
var Input_1 = require("./Input");
var Input_store_1 = require("./Input.store");
var inputs = [
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
var subStories = mobx_1.observable([]);
enum_1.EnumObject.getValues(Input_store_1.default.theme).forEach(function (theme) {
    var _a;
    var colors = (_a = {},
        _a[Input_store_1.default.theme.DEFAULT] = "#202c39",
        _a);
    inputs.forEach(function (input) {
        subStories.push({
            color: colors[theme] || "#fff",
            name: input.name,
            model: new Input_store_1.default(tslib_1.__assign(tslib_1.__assign({}, input.model), { theme: theme }))
        });
    });
});
var stories = react_1.storiesOf('Input', module);
stories.addDecorator(function (story) { return React.createElement(mobx_react_1.Provider, { state: subStories }, story()); });
subStories.forEach(function (story) {
    stories.add("[Input][" + story.model.theme + "] " + story.name, function () { return (React.createElement(StorybookCanvas_1.default, { color: story.color },
        React.createElement(Input_1.default, { model: story.model }))); });
});
//# sourceMappingURL=Input.stories.js.map