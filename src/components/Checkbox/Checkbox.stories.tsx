import {useState} from 'react';
import {StoryObj, Meta} from '@storybook/react-vite';
import {Checkbox} from '~/components';

const meta: Meta<typeof Checkbox> = {
    title: 'Components/Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'centered'
        // When enabled, the controlledCheckbox doesn't work anymore. maybe it's fixed with storybook 7.4 (https://github.com/storybookjs/storybook/pull/23804)
        // Actions: {argTypesRegex: '^on.*'}
    }
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Uncontrolled: Story = {
    args: {
        'aria-label': 'default example checkbox'
    }
};

export const Indeterminate: Story = {
    args: {
        indeterminate: true,
        'aria-label': 'indeterminate example checkbox'
    }
};

export const Controlled: Story = {
    render: args => {
        const [checked, setChecked] = useState(false);

        const handleOnChange = () => {
            setChecked(!checked);
        };

        return (
            <Checkbox checked={checked} aria-label="controlled checkbox" onChange={() => handleOnChange()} {...args}/>
        );
    }
};
