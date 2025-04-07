import {StoryFn, Meta} from '@storybook/react';
import '~/__storybook__/storybook.scss';

import {SearchInput} from './index';
import type {SearchInputProps} from './SearchInput.types';

export default {
    title: 'Components/Input',
    component: SearchInput,
    decorators: [
        StoryCmp => (
            <div style={{width: '50vw'}}>
                <StoryCmp/>
            </div>
        )
    ],
    parameters: {
        layout: 'centered'
    },
    args: {
        placeholder: 'Search and press Enter'
    },
    argTypes: {
        onChange: {action: 'onChange'},
        onClick: {action: 'onClick'},
        onBlur: {action: 'onBlur'},
        onFocus: {action: 'onFocus'}
    }
} as Meta<typeof SearchInput>;

const Template: StoryFn<SearchInputProps> = args => (
    <section className="storyWrapper">
        <SearchInput {...args}/>
    </section>
);

export const Search = {
    render: Template
};
