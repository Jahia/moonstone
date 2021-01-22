import React from 'react';
import classnames from 'classnames';
import {storiesOf} from '@storybook/react';
import {boolean, select, withKnobs} from '@storybook/addon-knobs';
import storyStyles from '~/__storybook__/storybook.module.scss';

import markdownNotes from './ButtonGroup.md';
import {Button} from '~/components/Button';
import {buttonColors, buttonSizes, buttonVariants} from '~/components/Button/Button.types';
import {ChevronDown} from '~/icons';
import {ButtonGroup} from './index';

const colorValues = () => select('Color', buttonColors, 'default');
const sizeValues = () => select('Size', buttonSizes, 'default');
const variantValues = () => select('Variant', buttonVariants, 'default');
const isReversed = () => boolean('Is reversed', false);

storiesOf('Components/ButtonGroup', module)
    .addParameters({
        component: Button,
        componentSubtitle: 'ButtonGroup',
        notes: {markdown: markdownNotes}
    })
    .addDecorator(withKnobs)
    .add('Default', () => (
        <section className={classnames(storyStyles.storyWrapper)}>
            <ButtonGroup
                variant={variantValues()}
                color={colorValues()}
                size={sizeValues()}
                isReversed={isReversed()}
            >
                <Button label="one" onClick={() => {}}/>
                <Button label="two" onClick={() => {}}/>
                <Button label="three" onClick={() => {}}/>
            </ButtonGroup>
        </section>
    ))
    .add('Button with actions', () => (
        <section className={classnames(storyStyles.storyWrapper)}>
            <ButtonGroup
                color="accent"
                size="big"
            >
                <Button label="Actions" onClick={() => {}}/>
                <Button icon={<ChevronDown/>} onClick={() => {}}/>
            </ButtonGroup>
        </section>
    ))
    .add('ButtonGroup with 1 button', () => (
        <section className={classnames(storyStyles.storyWrapper)}>
            <ButtonGroup
                color="accent"
                size="big"
            >
                <Button label="Actions" onClick={() => {}}/>
            </ButtonGroup>
        </section>
    ));
