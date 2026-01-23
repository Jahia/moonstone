import preview from '../../../../.storybook/preview';
import {PrimaryNavItem} from './index';
import type {PrimaryNavItemProps} from './PrimaryNavItem.types';
import {Edit, Person, Power, Workflow} from '~/icons';
import markdownNotes from './PrimaryNavItem.md';
import {Badge, Button} from '~/components';

const meta = preview.meta({
    title: 'Components/PrimaryNavItem',
    component: PrimaryNavItem,
    parameters: {
        componentSubtitle: 'PrimaryNavItem',
        notes: {markdown: markdownNotes}
    },
    argTypes: {
        children: {table: {disable: true}}
    }
});

export const Default = meta.story({
    args: {},
    render: (args: PrimaryNavItemProps) => (
        <ul
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#131c21',
        width: '18.75rem',
        height: '100vh'
      }}
        >
            <PrimaryNavItem {...args} icon={<Edit/>} label="NavItem not selected (default)"/>
            <PrimaryNavItem isSelected icon={<Edit/>} label="NavItem Selected"/>
            <PrimaryNavItem
        isSelected={false}
        icon={<Workflow/>}
        label="Another NavItem"
        badge={<Badge label="9"/>}
      />
            <PrimaryNavItem
        isSelected={false}
        icon={<Person/>}
        label="My profile"
        subtitle="username as a subtitle"
      />
            <PrimaryNavItem
        isSelected={false}
        icon={<Person/>}
        label="My profile"
        subtitle="username as a subtitle"
        button={
            <Button
            isReversed
            icon={<Power/>}
            label="Sign Out"
            variant="ghost"
            onClick={() => null}
          />
        }
      />
        </ul>
    )
});
