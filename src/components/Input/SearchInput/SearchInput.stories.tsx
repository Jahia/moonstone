import preview from '../../../../.storybook/preview';
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

export const Search = meta.story({
    render: (args: SearchInputProps) => (
        <section className="storyWrapper">
            <SearchInput {...args}/>
        </section>
    )
});
