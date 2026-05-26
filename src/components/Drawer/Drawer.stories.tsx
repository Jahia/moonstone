import {useState} from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {Drawer} from './Drawer';
import type {DrawerProps} from './Drawer.types';
import {Button, Typography} from '~/components';

const meta = {
    title: 'Components/Drawer',
    component: Drawer,
    tags: ['beta'],
    args: {
        isOpen: false,
        children: null as DrawerProps['children']
    },
    parameters: {
        layout: 'centered'
    }
} satisfies Meta<typeof Drawer>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
    render: args => {
        const [open, setOpen] = useState(false);
        return (
            <div>
                <Button label="Open drawer" onClick={() => setOpen(true)}/>
                <Drawer {...args} isOpen={open} onOpenChange={setOpen}>
                    <div style={{padding: 'var(--moon-spacing-medium)'}}>
                        <Typography variant="heading" weight="bold" component="h2">
                            Drawer title
                        </Typography>
                        <Typography>
                            This is the drawer content. You can put anything here.
                        </Typography>
                        <div style={{marginTop: 'var(--moon-spacing-medium)'}}>
                            <Button label="Close" onClick={() => setOpen(false)}/>
                        </div>
                    </div>
                </Drawer>
            </div>
        );
    }
};
