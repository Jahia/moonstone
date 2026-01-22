import {useState} from 'react';
import preview from '../../../.storybook/preview';
import {Checkbox} from '~/components';

const meta = preview.meta({
    title: 'Components/Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'centered'
        // When enabled, the controlledCheckbox doesn't work anymore. maybe it's fixed with storybook 7.4 (https://github.com/storybookjs/storybook/pull/23804)
        // Actions: {argTypesRegex: '^on.*'}
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
    render: args => {
        const [checked, setChecked] = useState(false);

        const handleOnChange = () => {
            setChecked(!checked);
        };

        return (
            <Checkbox checked={checked} aria-label="controlled checkbox" onChange={() => handleOnChange()} {...args}/>
        );
    }
});
