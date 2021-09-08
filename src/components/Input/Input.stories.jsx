import React, {useState} from 'react';
import {storiesOf} from '@storybook/react';
import {boolean, select, withKnobs} from '@storybook/addon-knobs';
import clsx from 'clsx';
import storyStyles from '~/__storybook__/storybook.module.scss';
import PropTypes from 'prop-types';

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
    .add('Default', () => {
        const Parent = ({children}) => {
            const [state, setState] = useState('this is the default!');
            return <>{children(state, setState)}</>;
        };

        Parent.propTypes = {
            children: PropTypes.node
        };

        return (
            <section className={clsx(storyStyles.storyWrapper)}>
                <Parent>
                    {(state, setState) => (
                        <Input
                            placeholder="a placeholder!"
                            value={state}
                            onChange={e => setState(e.target.value)}
                            onBlur={() => {}}
                            onFocus={() => {}}
                        />
                    )}
                </Parent>
            </section>
        );
    })
    .add('Search', () => {
        const Parent = ({children}) => {
            const [state, setState] = useState('search variant!');
            return <>{children(state, setState)}</>;
        };

        Parent.propTypes = {
            children: PropTypes.node
        };
        return (
            <section className={clsx(storyStyles.storyWrapper)}>
                <Parent>
                    {(state, setState) => (
                        <Input
                            focusOnField
                            value={state}
                            placeholder="this is a placeholder!"
                            variant="search"
                            onClear={() => setState('')}
                            onChange={e => setState(e.target.value)}
                        />
                    )}
                </Parent>
            </section>
        );
    })
    .add('Icons', () => {
        const Parent = ({children}) => {
            const [state, setState] = useState('this input has icons!');
            return <>{children(state, setState)}</>;
        };

        Parent.propTypes = {
            children: PropTypes.node
        };

        return (
            <section className={clsx(storyStyles.storyWrapper)}>
                <Parent>
                    {(state, setState) => (
                        <Input
                            value={state}
                            placeholder="this is a placeholder!"
                            icon={<IconWrapper iconName={select('Icon', iconsName, 'Love')}/>}
                            onClear={() => setState('')}
                            onChange={e => setState(e.target.value)}
                        />
                    )}
                </Parent>
            </section>
        );
    })
    .add('Playground', () => {
        const Parent = ({children}) => {
            const [state, setState] = useState('this is the default!');
            return <>{children(state, setState)}</>;
        };

        Parent.propTypes = {
            children: PropTypes.node
        };

        return (
            <section className={clsx(storyStyles.storyWrapper)}>
                <Parent>
                    {(state, setState) => (
                        <Input
                            variant={variant()}
                            size={inputSize()}
                            icon={<IconWrapper iconName={selectIcon()}/>}
                            isDisabled={isDisabled()}
                            isReadOnly={isReadonly()}
                            focusOnField={isFocused()}
                            placeholder="a placeholder!"
                            value={state}
                            onClear={() => setState('')}
                            onChange={e => setState(e.target.value)}
                            onBlur={() => {}}
                            onFocus={() => {}}
                        />
                )}
                </Parent>
            </section>
        );
    });
