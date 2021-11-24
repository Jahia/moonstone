import React, {useState} from 'react';
import {storiesOf} from '@storybook/react';
import {boolean, select, withKnobs} from '@storybook/addon-knobs';
import clsx from 'clsx';
import storyStyles from '~/__storybook__/storybook.module.scss';

import markdownNotes from './Input.md';
import {Input} from './index';
import {InputVariants, InputSizes} from './Input.types';
import IconWrapper from '~/__storybook__/IconWrapper';
import {iconsName} from '~/__storybook__/utils';

const variant = () => select('Variant', InputVariants, InputVariants.Text);
const inputSize = () => select('Size', InputSizes, InputSizes.Default);
const isDisabled = () => boolean('Is disabled', false);
const isReadonly = () => boolean('Is readonly', false);
const isFocused = () => boolean('Focus on field', false);
const selectIcon = () => select('Icon', iconsName, 'Love');

storiesOf('Components/Input', module)
    .addParameters({
        component: Input,
        notes: {markdown: markdownNotes}
    })
    .addDecorator(withKnobs)
    .add('Uncontrolled', () => {
        const [value, setValue] = useState('this is the default!');

        return (
            <section className={clsx(storyStyles.storyWrapper)}>
                <Input
                    placeholder="a placeholder!"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    onBlur={() => {}}
                    onFocus={() => {}}
                />
            </section>
        );
    })
    .add('Controlled', () => {
        return (
            <section className={clsx(storyStyles.storyWrapper)}>
                <Input
                    placeholder="a placeholder!"
                    defaultValue="default value"
                    onChange={() => {}}
                    onBlur={() => {}}
                    onFocus={() => {}}
                />
            </section>
        );
    })
    .add('Search', () => {
        const [value, setValue] = useState('this is the default!');

        return (
            <section className={clsx(storyStyles.storyWrapper)}>
                <Input
                    focusOnField
                    value={value}
                    placeholder="this is a placeholder!"
                    variant="search"
                    onClear={() => setValue('')}
                    onChange={e => setValue(e.target.value)}
                />
            </section>
        );
    })
    .add('Icons', () => {
        const [value, setValue] = useState('this is the default!');

        return (
            <section className={clsx(storyStyles.storyWrapper)}>
                <Input
                    value={value}
                    placeholder="this is a placeholder!"
                    icon={<IconWrapper iconName={select('Icon', iconsName, 'Love')}/>}
                    onClear={() => setValue('')}
                    onChange={e => setValue(e.target.value)}
                />
            </section>
        );
    })
    .add('Playground', () => {
        const [value, setValue] = useState('this is the default!');

        return (
            <section className={clsx(storyStyles.storyWrapper)}>
                <Input
                    variant={variant()}
                    size={inputSize()}
                    icon={<IconWrapper iconName={selectIcon()}/>}
                    isDisabled={isDisabled()}
                    isReadOnly={isReadonly()}
                    focusOnField={isFocused()}
                    placeholder="a placeholder!"
                    value={value}
                    onClear={() => setValue('')}
                    onChange={e => setValue(e.target.value)}
                    onBlur={() => {}}
                    onFocus={() => {}}
                />
            </section>
        );
    });
