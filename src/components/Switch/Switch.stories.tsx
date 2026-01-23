import {useState} from 'react';
import preview from '../../../.storybook/preview';
import {Switch} from './index';
import type {SwitchProps} from './Switch.types';

const meta = preview.meta({
    title: 'Components/Switch',
    component: Switch,
    parameters: {
        layout: 'centered'
    },
    args: {
        'aria-label': 'switch component'
    }
});

export const Uncontrolled = meta.story({});

export const Controlled = meta.story({
    render: (args: SwitchProps) => {
        const [checked, setChecked] = useState(false);

        const handleOnChange = () => {
            setChecked(!checked);
        };

        return (
            <Switch checked={checked} onChange={() => handleOnChange()} {...args}/>
        );
    }
});
