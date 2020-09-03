import React, {useState} from 'react';
import {storiesOf} from '@storybook/react';
import {boolean, select, withKnobs} from '@storybook/addon-knobs';
// Import {select, text, withKnobs} from '@storybook/addon-knobs';
import classnames from 'clsx';
import storyStyles from '~/__storybook__/storybook.module.scss';
import PropTypes from 'prop-types';

import markdownNotes from './Input.md';
import {Input, InputVariant, InputHeight} from './index';
import IconWrapper from '~/__storybook__/IconWrapper';
import {iconsName} from '~/__storybook__/utils';

const variant = () => select('Variant', InputVariant, 'text');
const inputHeightType = () => select('Height Type', InputHeight, 'default');
const isDisabled = () => boolean('Is disabled', false);
const isReadonly = () => boolean('Is readonly', false);

storiesOf('Components|Input', module)
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
            <section className={classnames(storyStyles.storyWrapper)}>
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
            <section className={classnames(storyStyles.storyWrapper)}>
                <Parent>
                    {(state, setState) => (
                        <Input
                            value={state}
                            height="tall"
                            placeholder="this is a placeholder!"
                            variant="search"
                            onClear={e => setState(e.target.value)}
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
            <section className={classnames(storyStyles.storyWrapper)}>
                <Parent>
                    {(state, setState) => (
                        <Input
                            value={state}
                            height="tall"
                            placeholder="this is a placeholder!"
                            icon={<IconWrapper iconName={select('Icon', iconsName, 'Love')}/>}
                            onClear={e => setState(e.target.value)}
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
            <section className={classnames(storyStyles.storyWrapper)}>
                <Parent>
                    {(state, setState) => (
                        <Input
                        variant={variant()}
                        heightType={inputHeightType()}
                        isDisabled={isDisabled()}
                        isReadOnly={isReadonly()}
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
    });
