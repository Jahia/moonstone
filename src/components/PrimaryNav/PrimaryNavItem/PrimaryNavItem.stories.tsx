import preview from '~/__storybook__/preview';
import {PrimaryNavItem} from './index';
import {Edit, Person, Power, Workflow} from '~/icons';
import markdownNotes from './PrimaryNavItem.md';
import {Badge, Button} from '~/components';
import {reset} from '~/globals/css-utils.js';

const meta = preview.meta({
    title: 'Components/PrimaryNavItem',
    component: PrimaryNavItem,

    parameters: {
        docs: {
            description: {component: markdownNotes},
            subtitle: 'PrimaryNavItem'
        }
    }
});

export const Default = meta.story({render: () => (
    <ul
    className={reset}
    style={{
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#131c21',
      width: '18.75rem',
      height: '100vh'
    }}
    >
        <PrimaryNavItem icon={<Edit/>} label="NavItem not selected (default)"/>
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
)});

