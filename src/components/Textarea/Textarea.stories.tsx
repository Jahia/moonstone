import type {ChangeEvent} from 'react';
import preview from '~/__storybook__/preview';

import {Textarea} from './index';
import {useArgs} from 'storybook/preview-api';

const meta = preview.meta({
    title: 'Components/Textarea',
    tags: ['new'],
    component: Textarea,
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
        placeholder: 'Placeholder text'
    },
    argTypes: {
        onChange: {action: 'onChange'},
        onBlur: {action: 'onBlur'},
        onFocus: {action: 'onFocus'}
    }
});

export const Uncontrolled = meta.story();

export const Controlled = meta.story({
    render(args) {
        const [, setArgs] = useArgs();

        const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
            args.onChange?.(e);
            setArgs({value: e.target.value});
        };

        return <Textarea value="Default value" {...args} onChange={onChange}/>;
    }
});
