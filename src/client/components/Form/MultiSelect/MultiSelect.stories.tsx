
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { observable, IObservableArray } from "mobx";
import { Provider } from 'mobx-react';

import { EnumObject } from "../../../utils/enum";

import StorybookCanvas from "../../../components/StorybookCanvas/StorybookCanvas";

import MultiSelect from './MultiSelect';
import MultiSelectStore, { InitProps } from './MultiSelect.store';


const items: { name: string, model: InitProps<{ label: string, value: number }>}[] = [
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


const subStories: IObservableArray<{color: string, name: string, model: MultiSelectStore<{label: string, value: number}>}> = observable([]);

EnumObject.getValues(MultiSelectStore.theme).forEach((theme) => {
    const colors = {
        [MultiSelectStore.theme.DEFAULT]: "#202c39"
    };

    items.forEach((item) => {
        subStories.push({
            color: colors[theme],
            name: item.name,
            model: new MultiSelectStore({
                ...item.model,
                theme
            })
        })
    })
});

const stories = storiesOf('MultiSelect', module)

stories.addDecorator((story) => <Provider state={subStories}>{story()}</Provider>)

subStories.forEach((story) => {
    stories.add(`[MultiSelect][${story.model.theme}] ${story.name}`, () => (
        <StorybookCanvas color={story.color}>
            <MultiSelect model={story.model} />
        </StorybookCanvas>
    ))
})
