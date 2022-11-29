import React from 'react';
import {storiesOf} from '@storybook/react';
import {boolean, select, withKnobs} from '@storybook/addon-knobs';
import '~/__storybook__/storybook.scss';

import {MultipleLeftRightSelector} from './index';
import markdownNotes from './MultipleLeftRightSelector.md';

storiesOf('Components/MultipleLeftRightSelector', module)
    .addParameters({
        component: MultipleLeftRightSelector,
        componentSubtitle: 'Select values using two lists',
        notes: {markdown: markdownNotes}
    })
    .addDecorator(withKnobs)
    .addDecorator(storyFn => <section className="storyWrapper">{storyFn()}</section>)
    .add('Simple list', () => {
        return (
            <MultipleLeftRightSelector readOnly={false}
                                       options={[{value: '1', label: 'One'}, {value: '2', label: 'Two'}]}
                                       arrayValue={['1']}
                                       onChange={v => console.log(v)}
            />
        );
    })
    .add('Playground', () => (
        <div>Playground</div>
    ));
