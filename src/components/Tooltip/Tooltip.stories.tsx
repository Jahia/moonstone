import preview from '~/__storybook__/preview';

import {Tooltip} from './index';
import {Badge, Button, Chip, PrimaryNav, PrimaryNavItem, PrimaryNavItemsGroup} from '~/components';
import {Apps, Feather, Home, Person, Profile, Setting} from '~/icons';
import placeholder from '~/__storybook__/assets/img-placeholder.jpg';

const meta = preview.meta({
    title: 'Components/Tooltip',
    component: Tooltip,
    tags: ['new'],
    parameters: {
        layout: 'centered',
        knobs: {disable: true},
        storysource: {disable: true},
        actions: {argTypesRegex: '^on.*'}
    }
});

const Template = (args: Parameters<typeof Tooltip>[0]) => (
    <Tooltip label="Tooltip" {...args}/>
);

export const IconButtonTooltip = meta.story({
    render: Template,
    args: {
        label: 'Home',
        children: <Button icon={<Home/>} variant="outlined"/>
    }
});

export const ButtonTooltip = meta.story({
    render: Template,
    args: {
        label: 'Home',
        children: <Button label="Home button" icon={<Home/>} variant="outlined"/>
    }
});

export const DisabledButtonTooltip = meta.story({
    render: Template,
    args: {
        label: 'Disabled button',
        children: <Button isDisabled label="Disabled button" icon={<Home/>} variant="outlined"/>
    }
});

export const LongTooltip = meta.story({
    render: Template,
    args: {
        label: 'Very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long tooltip',
        children: <Button icon={<Home/>} variant="outlined"/>
    }
});

export const ChipTooltip = meta.story({
    render: Template,
    args: {
        label: 'Chip',
        children: <Chip icon={<Home/>} label="Chip"/>
    }
});

export const TextTooltip = meta.story({
    render: Template,
    args: {
        label: 'That is a long text',
        children: <p style={{width: '400px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum velit orci, a condimentum erat eleifend vel. Nam eu urna in libero gravida consequat nec non elit. Nulla maximus vestibulum mauris, quis volutpat metus rutrum ac. In eu libero a justo vulputate viverra at quis lacus. Duis volutpat sapien ac rhoncus elementum. Quisque id mollis tellus. Nunc sit amet magna hendrerit, convallis risus vitae, condimentum ante.</p>
    }
});

export const BadgeTooltip = meta.story({
    render: Template,
    args: {
        label: 'Badge',
        children: <Badge label="Badge"/>
    }
});

export const PrimaryNavTooltip = meta.story({
    render: () => {
        return (
            <div style={{transform: 'scale(1)', height: '100vh'}}>
                <PrimaryNav
                headerLogo={<img src={placeholder} height={30} alt="placeholder"/>}
                headerCaption="development"
                top={
                    <>
                        <PrimaryNavItemsGroup>
                            <Tooltip label="Tooltip">
                                <PrimaryNavItem
                                    isSelected
                                    label="NavItem selected"
                                    icon={<Apps/>}
                                />
                            </Tooltip>
                        </PrimaryNavItemsGroup>
                        <PrimaryNavItemsGroup>
                            <Tooltip label="Tooltip">
                                <PrimaryNavItem
                                    label="Very very long long name with many characters"
                                    icon={<Feather/>}
                                />
                            </Tooltip>
                            <Tooltip label="Tooltip">
                                <PrimaryNavItem
                                    icon={<Person/>}
                                    label="My profile"
                                    subtitle="username as a subtitle"
                                />
                            </Tooltip>
                        </PrimaryNavItemsGroup>
                    </>
                }
                bottom={
                    <>
                        <PrimaryNavItemsGroup>
                            <Tooltip label="Tooltip">
                                <PrimaryNavItem label="Another bottom item" icon={<Profile/>}/>
                            </Tooltip>
                        </PrimaryNavItemsGroup>
                        <PrimaryNavItemsGroup>
                            <Tooltip label="Tooltip">
                                <PrimaryNavItem label="Bottom item" icon={<Setting/>}/>
                            </Tooltip>
                        </PrimaryNavItemsGroup>
                    </>
                }
            />
            </div>
        );
    }
});
