import { PrimaryNavItem } from './index';
import markdownNotes from './PrimaryNavItem.md';
import { Badge, Button } from '~/components';
import { Edit, Person, Power, Workflow } from '~/icons';

import type { Meta, StoryObj } from '@storybook/react-vite';

export default {
    title: 'Components/PrimaryNavItem',
    component: PrimaryNavItem,

    parameters: {
        a11y: { test: 'todo' }, // axe gate: known violations, WCAG AA epic #1421
        componentSubtitle: 'PrimaryNavItem',
        notes: { markdown: markdownNotes },
    },
} as Meta<typeof PrimaryNavItem>;

type Story = StoryObj<typeof PrimaryNavItem>;

export const Default: Story = {
    render: () => (
        <ul
            style={{
                display: 'flex',
                padding: 0,
                margin: 0,
                flexDirection: 'column',
                backgroundColor: '#131c21',
                width: '18.75rem',
                height: '100vh',
            }}
        >
            <PrimaryNavItem icon={<Edit/>} label="NavItem not selected (default)"/>
            <PrimaryNavItem isSelected icon={<Edit/>} label="NavItem Selected"/>
            <PrimaryNavItem
                isSelected={false}
                badge={<Badge label="9"/>}
                icon={<Workflow/>}
                label="Another NavItem"
            />
            <PrimaryNavItem
                isSelected={false}
                icon={<Person/>}
                label="My profile"
                subtitle="username as a subtitle"
            />
            <PrimaryNavItem
                isSelected={false}
                button={(
                    <Button
                        isReversed
                        icon={<Power/>}
                        label="Sign Out"
                        variant="ghost"
                        onClick={() => null}
                    />
                )}
                icon={<Person/>}
                label="My profile"
                subtitle="username as a subtitle"
            />
        </ul>
    ),
};
