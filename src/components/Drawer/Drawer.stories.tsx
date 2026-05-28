import {useState} from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {Drawer} from './Drawer';
import {Button, Typography} from '~/components';

const meta = {
    title: 'Components/Drawer',
    component: Drawer,
    tags: ['beta'],
    parameters: {
        layout: 'fullscreen'
    }
} satisfies Meta<typeof Drawer>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
    render: args => {
        const [open, setOpen] = useState(false);
        return (
            <div style={{display: 'flex', minHeight: '320px'}}>
                <div style={{flex: 1, padding: 'var(--moon-spacing-medium)'}}>
                    <Button label="Open drawer" onClick={() => setOpen(true)}/>
                </div>
                <Drawer {...args} isOpen={open} style={{width: '320px'}}>
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
