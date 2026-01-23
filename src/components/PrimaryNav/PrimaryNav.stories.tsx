import preview from '../../../.storybook/preview';
import markdownNotes from './PrimaryNav.md';
import {PrimaryNav} from './index';
import type {PrimaryNavProps} from './PrimaryNav.types';
import {
    PrimaryNavItemsGroup,
    PrimaryNavItem,
    Button,
    Badge
} from '~/components';
import {
    Apps,
    Feather,
    Setting,
    Profile,
    Person,
    Power,
    Star,
    Workflow
} from '~/icons';

const meta = preview.meta({
    title: 'Components/PrimaryNav',
    component: PrimaryNav,
    parameters: {
        notes: {markdown: markdownNotes}
    },
    argTypes: {
        children: {table: {disable: true}}
    }
});

export const Default = meta.story({
    args: {},
    render: (args: PrimaryNavProps) => (
        <div style={{transform: 'scale(1)', height: '100vh'}}>
            <PrimaryNav
                {...args}
                headerLogo={<img src="https://via.placeholder.com/100x40?text=Logo"/>}
                headerCaption="development"
                modeIcon={<Star/>}
                top={
                    <>
                        <PrimaryNavItemsGroup>
                            <PrimaryNavItem label="NavItem not selected" icon={<Feather/>}/>
                            <PrimaryNavItem
                                isSelected
                                label="NavItem selected"
                                icon={<Apps/>}
                            />
                        </PrimaryNavItemsGroup>
                        <PrimaryNavItemsGroup>
                            <PrimaryNavItem
                                label="Very very long long name with many characters"
                                icon={<Feather/>}
                            />
                            <PrimaryNavItem
                                icon={<Person/>}
                                label="My profile"
                                subtitle="username as a subtitle"
                            />
                            <PrimaryNavItem
                                icon={<Person/>}
                                label="Very very long long long long label"
                                subtitle="username as a subtitle username as a subtitle username as a subtitle username as a subtitle"
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
                            <PrimaryNavItem
                                icon={<Workflow/>}
                                label="With badge"
                                badge={<Badge label="3"/>}
                            />
                            <PrimaryNavItem
                                icon={<Person/>}
                                label="With badge"
                                badge={<Badge label="333"/>}
                            />
                        </PrimaryNavItemsGroup>
                        <PrimaryNavItemsGroup isDisplayedWhenCollapsed={false}>
                            <PrimaryNavItem url="https://jahia.com" label="Jahia Link"/>
                        </PrimaryNavItemsGroup>
                    </>
                }
                bottom={
                    <>
                        <PrimaryNavItemsGroup>
                            <PrimaryNavItem label="Another bottom item" icon={<Profile/>}/>
                        </PrimaryNavItemsGroup>
                        <PrimaryNavItemsGroup>
                            <PrimaryNavItem label="Bottom item" icon={<Setting/>}/>
                        </PrimaryNavItemsGroup>
                    </>
                }
            />
        </div>
    )
});
