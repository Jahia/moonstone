import type {Meta, StoryObj} from '@storybook/react';
import {PrimaryNavItemsGroup} from './index';
import {PrimaryNavItem} from '~/components/PrimaryNav/PrimaryNavItem';
import {Edit} from '~/icons';
import markdownNotes from './PrimaryNavItemsGroup.md';

const meta: Meta<typeof PrimaryNavItemsGroup> = {
    title: 'Components/PrimaryNavItemsGroup',
    component: PrimaryNavItemsGroup,
    parameters: {
        notes: {markdown: markdownNotes},
        layout: 'fullscreen'
    },
    decorators: [
        Story => (
            <div
                style={{
                    backgroundColor: '#131c21',
                    width: '18.75rem',
                    height: '100vh'
                }}
            >
                <Story/>
            </div>
        )
    ]
};

export default meta;

type Story = StoryObj<typeof PrimaryNavItemsGroup>;

export const Default: Story = {
    render: () => (
        <PrimaryNavItemsGroup>
            <PrimaryNavItem icon={<Edit/>} label="NavItem not selected (default)"/>
            <PrimaryNavItem icon={<Edit/>} label="NavItem"/>
        </PrimaryNavItemsGroup>
    )
};

export const CollapsedGroup: Story = {
    render: () => (
        <PrimaryNavItemsGroup isDisplayedWhenCollapsed={false}>
            <PrimaryNavItem icon={<Edit/>} label="Hidden when collapsed"/>
            <PrimaryNavItem icon={<Edit/>} label="Hidden when collapsed too"/>
        </PrimaryNavItemsGroup>
    )
};
