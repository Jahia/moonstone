import type {Meta, StoryObj} from '@storybook/react-vite';
import {action} from 'storybook/actions';
import {TimezoneSelector} from './TimezoneSelector';
import type {TimezoneSelectorProps} from './TimezoneSelector.types';

export default {
    title: 'Components/TimezoneSelector',
    component: TimezoneSelector,
    tags: ['beta'],
    parameters: {
        layout: 'centered'
    }
} satisfies Meta<typeof TimezoneSelector>;

type Story = StoryObj<typeof TimezoneSelector>;
const logTimezoneChange: TimezoneSelectorProps['onChange'] = (_event, value) => {
    action('onChange')(value);
};

export const Default: Story = {
    render: args => <TimezoneSelector {...args}/>,
    args: {
        defaultValue: 'Europe/Paris',
        onChange: logTimezoneChange
    },
    name: 'Default'
};
