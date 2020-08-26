import React, {useState} from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
// Import {select, text, withKnobs} from '@storybook/addon-knobs';
import classnames from 'clsx';
import storyStyles from '~/__storybook__/storybook.module.scss';
import PropTypes from 'prop-types';

import markdownNotes from './Input.md';
import {Input} from './index';

storiesOf('Components|Input' +
    '', module)
    .addParameters({
        component: Input,
        notes: {markdown: markdownNotes}
    })
    .addDecorator(withKnobs)
    .add('Testing', () => {
        const Parent = ({children}) => {
            const [state, setState] = useState();
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
                            placeholder="this is a placeholder!"
                            value={state}
                            onChange={e => {
                                setState(e.target.value);
                            }}
                            onBlur={() => {
                                // Console.log('the input was blurred!');
                            }}
                            onFocus={() => {
                                // Console.log('the input was focused!');
                            }}
                        />
                    )}
                </Parent>
            </section>
        );
    })
    .add('Read Only', () => {
        const Parent = ({children}) => {
            const [state, setState] = useState('this input is read only!');
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
                            readOnly
                            value={state}
                            onChange={e => {
                                setState(e.target.value);
                            }}
                        />
                    )}
                </Parent>
            </section>
        );
    });
