
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { observable, IObservableArray } from 'mobx';
import { Provider } from 'mobx-react';

import 'assets/global.scss';
import { EnumObject } from '../../../utils/enum';

import StorybookCanvas from '../../../components/StorybookCanvas/StorybookCanvas';

import Select from './Select';
import SelectStore, { InitProps } from './Select.store';

const items: { name: string; model: InitProps<{ label: string; value: number }>}[] = [
  {
    name: 'Standard input',
    model: {
      label: 'Standard input',
      placeholder: 'Placeholder of standard input',
      getOptionLabel: (option) => option.label,
      getOptionValue: (option) => option.value,
      options: Array(1000).fill(null).map((__, index) => ({ label: `Label ${index}`, value: index })),
    },
  },
];


const subStories: IObservableArray<{color: string; name: string; model: SelectStore}> = observable([]);

EnumObject.getValues(SelectStore.theme).forEach((theme) => {
  const colors = {
    [SelectStore.theme.DEFAULT]: '#202c39',
  };

  items.forEach((item) => {
    subStories.push({
      color: colors[theme],
      name: item.name,
      model: new SelectStore({ ...item.model, theme }),
    });
  });
});

const stories = storiesOf('Select', module);

stories.addDecorator((story) => <Provider state={subStories}>{story()}</Provider>);

subStories.forEach((story) => {
  stories.add(`[Select][${story.model.theme}] ${story.name}`, () => (
    <StorybookCanvas color={story.color}>
      <Select model={story.model} />
    </StorybookCanvas>
  ));
});
