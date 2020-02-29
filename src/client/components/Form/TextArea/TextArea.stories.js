"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var mobx_1 = require("mobx");
var mobx_react_1 = require("mobx-react");
var react_1 = require("@storybook/react");
require("assets/global.scss");
var enum_1 = require("../../../utils/enum");
var StorybookCanvas_1 = require("../../StorybookCanvas/StorybookCanvas");
var TextArea_1 = require("./TextArea");
var TextArea_store_1 = require("./TextArea.store");
var textAreas = [
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
var subStories = mobx_1.observable([]);
enum_1.EnumObject.getValues(TextArea_store_1.default.theme).forEach(function (theme) {
    var _a;
    var colors = (_a = {},
        _a[TextArea_store_1.default.theme.DEFAULT] = "#202c39",
        _a);
    textAreas.forEach(function (textArea) {
        subStories.push({
            color: colors[theme] || "#fff",
            name: textArea.name,
            model: new TextArea_store_1.default(tslib_1.__assign(tslib_1.__assign({}, textArea.model), { theme: theme }))
        });
    });
});
var stories = react_1.storiesOf('TextArea', module);
stories.addDecorator(function (story) { return React.createElement(mobx_react_1.Provider, { state: subStories }, story()); });
subStories.forEach(function (story) {
    stories.add("[TextArea][" + story.model.theme + "] " + story.name, function () { return (React.createElement(StorybookCanvas_1.default, { color: story.color },
        React.createElement(TextArea_1.default, { model: story.model }))); });
});
//# sourceMappingURL=TextArea.stories.js.map