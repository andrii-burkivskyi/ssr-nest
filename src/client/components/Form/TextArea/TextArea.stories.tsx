import * as React from 'react';
import { observable, IObservableArray } from "mobx";
import { Provider } from 'mobx-react';
import { storiesOf } from '@storybook/react';

import 'assets/global.scss';
import { EnumObject } from "../../../utils/enum";

import StorybookCanvas from "../../StorybookCanvas/StorybookCanvas";

import TextArea from './TextArea';
import TextAreaStore, { InitProps } from './TextArea.store';

const textAreas: { name: string, model: InitProps}[] = [
    {
        name: "Standard input",
        model: {
            label: "Standard input",
            placeholder: "Placeholder of standard input",
        },
    },

    {
        name: "No label and placeholder input",
        model: { },
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

const subStories: IObservableArray<{color: string, name: string, model: TextAreaStore}> = observable([]);

EnumObject.getValues(TextAreaStore.theme).forEach((theme) => {
    const colors = {
        [TextAreaStore.theme.DEFAULT]: "#202c39"
    };

    textAreas.forEach((textArea) => {

        subStories.push({
            color: colors[theme] || "#fff",
            name: textArea.name,
            model: new TextAreaStore({...textArea.model, theme})
        })
    })
})

const stories = storiesOf('TextArea', module)

stories.addDecorator((story) => <Provider state={subStories}>{story()}</Provider>)

subStories.forEach((story) => {
    stories.add(`[TextArea][${story.model.theme}] ${story.name}`, () => (
        <StorybookCanvas color={story.color}>
            <TextArea model={story.model} />
        </StorybookCanvas>
    ))
})
