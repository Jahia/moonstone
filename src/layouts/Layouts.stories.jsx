
import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, number, text, boolean} from '@storybook/addon-knobs';

import {LayoutApp} from './app';
import {LayoutModule} from './module';
import {PrimaryNav} from '~/components/PrimaryNav';
import {SecondaryNav} from '~/components/SecondaryNav';

const resizeWidth = () => number('Set width to resize', 245, {min: 120, max: 496, step: 20}, 'Level 2');

storiesOf('Layouts|Demos', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <div style={{transform: 'scale(1)'}}>
            <LayoutApp
                navigation={
                    <PrimaryNav isExpanded={boolean('Expand', false, 'Level 1')}>
                        level 1
                    </PrimaryNav>
                }
                content={
                    <LayoutModule
                        navigation={
                            <SecondaryNav resizeWidth={resizeWidth()}>
                                level 2
                            </SecondaryNav>
                        }
                        content={
                            <div style={{padding: '20px'}}>
                                {text('Content', 'My module content', 'Content')}
                            </div>
                        }
                    />
                }
            />
        </div>
    ))

    .add('Without level 2', () => (
        <div style={{transform: 'scale(1)'}}>
            <LayoutApp
                navigation={
                    <PrimaryNav isExpanded={boolean('Expand', false, 'Level 1')}>
                        level 1
                    </PrimaryNav>
                }
                content={
                    <LayoutModule
                        content={
                            <div style={{padding: '20px'}}>
                                {text('Content', 'My module content', 'Content')}
                            </div>
                        }
                    />
                }
            />
        </div>
    ));
