import {useState} from 'react';
import preview from '~storybook/preview';
import {Checkbox} from '~/components';
import type {CheckboxProps} from './Checkbox.types';

const meta = preview.meta({
    title: 'Components/Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'centered'
    }
});

export const Uncontrolled = meta.story({
    args: {
        'aria-label': 'default example checkbox'
    }
});

export const Indeterminate = Uncontrolled.extend({
    args: {
        indeterminate: true,
        'aria-label': 'indeterminate example checkbox'
    }
});

export const Controlled = meta.story({
    render: (args: CheckboxProps) => {
        const [checked, setChecked] = useState(false);

        const handleOnChange = () => {
            setChecked(!checked);
        };

        return (
            <Checkbox checked={checked} aria-label="controlled checkbox" onChange={() => handleOnChange()} {...args}/>
        );
    }
});
