import type {Meta, StoryObj} from '@storybook/react-vite';
import {action} from 'storybook/actions';
import {TimezoneSelector} from './TimezoneSelector';
import type {TimezoneSelectorProps} from './TimezoneSelector.types';

export default {
    title: 'Components/TimezoneSelector',
    component: TimezoneSelector,
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
