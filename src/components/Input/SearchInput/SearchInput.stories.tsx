import preview from '~/__storybook__/preview';
import {StoryFn} from '@storybook/react-vite';
import '~/__storybook__/storybook.scss';

import {SearchInput} from './index';
import type {SearchInputProps} from './SearchInput.types';

const meta = preview.meta({
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
});

const Template: StoryFn<SearchInputProps> = args => (
    <section className="storyWrapper">
        <SearchInput {...args}/>
    </section>
);

export const Search = meta.story({
    render: Template
});
