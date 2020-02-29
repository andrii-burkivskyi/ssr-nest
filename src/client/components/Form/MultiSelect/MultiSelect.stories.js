"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var react_1 = require("@storybook/react");
var mobx_1 = require("mobx");
var mobx_react_1 = require("mobx-react");
var enum_1 = require("../../../utils/enum");
var StorybookCanvas_1 = require("../../../components/StorybookCanvas/StorybookCanvas");
var MultiSelect_1 = require("./MultiSelect");
var MultiSelect_store_1 = require("./MultiSelect.store");
var items = [
    {
        name: "Standard multi select",
        model: {
            label: "Standard multi select",
            placeholder: "Placeholder of standard input",
            getOptionLabel: function (option) { return option.label; },
            getOptionValue: function (option) { return option.value; },
            options: Array(1000).fill(null).map(function (__, index) { return ({ label: "Label " + index, value: index }); })
        },
    }
];
var subStories = mobx_1.observable([]);
enum_1.EnumObject.getValues(MultiSelect_store_1.default.theme).forEach(function (theme) {
    var _a;
    var colors = (_a = {},
        _a[MultiSelect_store_1.default.theme.DEFAULT] = "#202c39",
        _a);
    items.forEach(function (item) {
        subStories.push({
            color: colors[theme],
            name: item.name,
            model: new MultiSelect_store_1.default(tslib_1.__assign(tslib_1.__assign({}, item.model), { theme: theme }))
        });
    });
});
var stories = react_1.storiesOf('MultiSelect', module);
stories.addDecorator(function (story) { return React.createElement(mobx_react_1.Provider, { state: subStories }, story()); });
subStories.forEach(function (story) {
    stories.add("[MultiSelect][" + story.model.theme + "] " + story.name, function () { return (React.createElement(StorybookCanvas_1.default, { color: story.color },
        React.createElement(MultiSelect_1.default, { model: story.model }))); });
});
//# sourceMappingURL=MultiSelect.stories.js.map