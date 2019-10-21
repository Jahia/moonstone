import React from 'react';
import {storiesOf} from '@storybook/react';
import {select, withKnobs} from '@storybook/addon-knobs';

import markdownNotes from './Icons.md';
import {Karaoke, Drink, Musique, Zip} from './index';

storiesOf('Icons', module)
    .addDecorator(withKnobs)
    .addParameters({
        component: Karaoke,
        componentSubtitle: 'Displays icon',
        notes: {markdown: markdownNotes}
    })
    .add('default', () => {
        const size = select('size', ['small', 'default', 'big'], 'default');
        return (
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <div style={{margin: '1rem auto'}}>
                    <Karaoke size={size}/>
                </div>
                <div style={{margin: '1rem auto'}}>
                    <Drink size={size}/>
                </div>
                <div style={{margin: '1rem auto'}}>
                    <Musique size={size}/>
                </div>
                <div style={{margin: '1rem auto'}}>
                    <Zip size={size}/>
                </div>
            </div>
        );
    });
