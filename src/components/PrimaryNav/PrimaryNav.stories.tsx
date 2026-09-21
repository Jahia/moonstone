import { PrimaryNav } from './index';
import markdownNotes from './PrimaryNav.md';
import placeholder from '~/__storybook__/assets/img-placeholder.jpg';
import {
    Badge,
    Button,
    PrimaryNavItem,
    PrimaryNavItemsGroup,
} from '~/components';
import {
    Apps,
    Feather,
    Person,
    Power,
    Profile,
    Setting,
    Star,
    Workflow,
} from '~/icons';

import type { Meta, StoryObj } from '@storybook/react-vite';

export default {
    title: 'Components/PrimaryNav',
    component: PrimaryNav,

    parameters: {
        notes: { markdown: markdownNotes },
    },
} as Meta<typeof PrimaryNav>;

type Story = StoryObj<typeof PrimaryNavItem>;

export const Default: Story = {
    render: () => (
        <div style={{ transform: 'scale(1)', height: '100vh' }}>
            <PrimaryNav
                bottom={(
                    <>
                        <PrimaryNavItemsGroup>
                            <PrimaryNavItem icon={<Profile/>} label="Another bottom item"/>
                        </PrimaryNavItemsGroup>
                        <PrimaryNavItemsGroup>
                            <PrimaryNavItem icon={<Setting/>} label="Bottom item"/>
                        </PrimaryNavItemsGroup>
                    </>
                )}
                headerCaption="development"
                headerLogo={<img alt="Placeholder logo" height="30" src={placeholder}/>}
                modeIcon={<Star/>}
                top={(
                    <>
                        <PrimaryNavItemsGroup>
                            <PrimaryNavItem icon={<Feather/>} label="NavItem not selected"/>
                            <PrimaryNavItem
                                isSelected
                                icon={<Apps/>}
                                label="NavItem selected"
                            />
                        </PrimaryNavItemsGroup>
                        <PrimaryNavItemsGroup>
                            <PrimaryNavItem
                                icon={<Feather/>}
                                label="Very very long long name with many characters"
                            />
                            <PrimaryNavItem
                                icon={<Person/>}
                                label="My profile"
                                subtitle="username as a subtitle"
                            />
                            <PrimaryNavItem
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
                                label="Very very long long long long label"
                                subtitle="username as a subtitle username as a subtitle username as a subtitle username as a subtitle"
                            />
                            <PrimaryNavItem
                                badge={<Badge label="3"/>}
                                icon={<Workflow/>}
                                label="With badge"
                            />
                            <PrimaryNavItem
                                badge={<Badge label="333"/>}
                                icon={<Person/>}
                                label="With badge"
                            />
                        </PrimaryNavItemsGroup>
                        <PrimaryNavItemsGroup isDisplayedWhenCollapsed={false}>
                            <PrimaryNavItem label="Jahia Link" url="https://jahia.com"/>
                        </PrimaryNavItemsGroup>
                    </>
                )}
            />
        </div>
    ),
};
