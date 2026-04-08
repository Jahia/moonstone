import type {Meta, StoryObj} from '@storybook/react-vite';
import {action} from 'storybook/actions';
import {TimezoneInput} from './TimezoneInput';
import type {TimezoneInputProps} from './TimezoneInput.types';

export default {
    title: 'Components/Input/TimezoneInput',
    component: TimezoneInput,
    tags: ['beta'],
    decorators: [
        StoryCmp => (
            <div style={{width: '260px'}}>
                <StoryCmp/>
            </div>
        )
    ],
    parameters: {
        layout: 'centered'
    },
    args: {
        defaultValue: 'Europe/Paris'
    }
} satisfies Meta<typeof TimezoneInput>;

type Story = StoryObj<typeof TimezoneInput>;
const logTimezoneChange: TimezoneInputProps['onChange'] = (_event, value) => {
    action('onChange')(value);
};

export const Default: Story = {
    render: args => <TimezoneInput {...args}/>,
    args: {
        defaultValue: 'Europe/Paris',
        onChange: logTimezoneChange
    },
    name: 'Default'
};
