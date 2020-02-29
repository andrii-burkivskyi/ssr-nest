"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_1 = require("@storybook/react");
const mobx_1 = require("mobx");
const mobx_react_1 = require("mobx-react");
const enum_1 = require("../../../utils/enum");
const StorybookCanvas_1 = require("../../../components/StorybookCanvas/StorybookCanvas");
const MultiSelect_1 = require("./MultiSelect");
const MultiSelect_store_1 = require("./MultiSelect.store");
const items = [
    {
        name: "Standard multi select",
        model: {
            label: "Standard multi select",
            placeholder: "Placeholder of standard input",
            getOptionLabel: (option) => option.label,
            getOptionValue: (option) => option.value,
            options: Array(1000).fill(null).map((__, index) => ({ label: `Label ${index}`, value: index }))
        },
    }
];
const subStories = mobx_1.observable([]);
enum_1.EnumObject.getValues(MultiSelect_store_1.default.theme).forEach((theme) => {
    const colors = {
        [MultiSelect_store_1.default.theme.DEFAULT]: "#202c39"
    };
    items.forEach((item) => {
        subStories.push({
            color: colors[theme],
            name: item.name,
            model: new MultiSelect_store_1.default(Object.assign(Object.assign({}, item.model), { theme }))
        });
    });
});
const stories = react_1.storiesOf('MultiSelect', module);
stories.addDecorator((story) => React.createElement(mobx_react_1.Provider, { state: subStories }, story()));
subStories.forEach((story) => {
    stories.add(`[MultiSelect][${story.model.theme}] ${story.name}`, () => (React.createElement(StorybookCanvas_1.default, { color: story.color },
        React.createElement(MultiSelect_1.default, { model: story.model }))));
});
//# sourceMappingURL=MultiSelect.stories.js.map