import { useState } from 'react';

import { Drawer } from './Drawer';
import { Button, Typography } from '~/components';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
    title: 'Components/Drawer',
    component: Drawer,
    tags: ['beta'],
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof Drawer>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
    render: (args) => {
        const [open, setOpen] = useState(false);
        return (
            <div style={{ display: 'flex', minHeight: '320px', overflow: 'hidden' }}>
                <div style={{ flex: 1, padding: 'var(--moon-spacing-medium)' }}>
                    <Button label="Toggle drawer" onClick={() => setOpen(!open)}/>
                </div>
                <Drawer {...args} isOpen={open} style={{ width: '320px' }}>
                    <Typography component="h2" variant="heading" weight="bold">
                        Drawer title
                    </Typography>
                    <Typography>
                        This is the drawer content. You can put anything here.
                    </Typography>
                    <div style={{ marginTop: 'var(--moon-spacing-medium)' }}>
                        <Button label="Close" onClick={() => setOpen(false)}/>
                    </div>
                </Drawer>
            </div>
        );
    },
};
