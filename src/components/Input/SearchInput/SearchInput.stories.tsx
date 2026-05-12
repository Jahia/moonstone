import {StoryObj, Meta} from '@storybook/react-vite';
import '~/__storybook__/storybook.scss';

import {SearchInput} from './index';
import type {SearchInputProps} from './SearchInput.types';

const meta: Meta<typeof SearchInput> = {
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
};
export default meta;

type Story = StoryObj<typeof meta>;

const Template = (args: SearchInputProps) => (
    <section className="storyWrapper">
        <SearchInput {...args}/>
    </section>
);

export const Search: Story = {
    render: Template
};
