import preview from '~storybook/preview';
import {PrimaryNavItemsGroup} from './index';
import type {PrimaryNavItemsGroupProps} from './PrimaryNavItemsGroup.types';
import {PrimaryNavItem} from '~/components/PrimaryNav/PrimaryNavItem';
import {Edit} from '~/icons';
import markdownNotes from './PrimaryNavItemsGroup.md';

const meta = preview.meta({
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
    ],
    argTypes: {
        children: {table: {disable: true}}
    }
});

export const Default = meta.story({
    args: {
        children: []
    },
    render: (args: PrimaryNavItemsGroupProps) => (
        <PrimaryNavItemsGroup {...args}>
            <PrimaryNavItem icon={<Edit/>} label="NavItem not selected (default)"/>
            <PrimaryNavItem icon={<Edit/>} label="NavItem"/>
        </PrimaryNavItemsGroup>
    )
});

export const CollapsedGroup = meta.story({
    args: {
        children: []
    },
    render: (args: PrimaryNavItemsGroupProps) => (
        <PrimaryNavItemsGroup {...args} isDisplayedWhenCollapsed={false}>
            <PrimaryNavItem icon={<Edit/>} label="Hidden when collapsed"/>
            <PrimaryNavItem icon={<Edit/>} label="Hidden when collapsed too"/>
        </PrimaryNavItemsGroup>
    )
});
