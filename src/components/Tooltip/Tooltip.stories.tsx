import preview from '../../../.storybook/preview';
import {Tooltip} from './index';
import type {TooltipProps} from './Tooltip.types';
import {Badge, Button, Chip, PrimaryNav, PrimaryNavItem, PrimaryNavItemsGroup} from '~/components';
import {Apps, Feather, Home, Person, Profile, Setting} from '~/icons';

const meta = preview.meta({
    title: 'Components/Tooltip',
    component: Tooltip,
    tags: ['new'],
    parameters: {
        layout: 'centered',
        knobs: {disable: true},
        storysource: {disable: true},
        actions: {argTypesRegex: '^on.*'}
    },
    argTypes: {
        children: {table: {disable: true}}
    }
});

export const IconButtonTooltip = meta.story({
    args: {
        label: 'Home',
        children: <Button icon={<Home/>} variant="outlined"/>
    },
    render: (args: TooltipProps) => <Tooltip {...args}/>
});

export const ButtonTooltip = meta.story({
    args: {
        label: 'Home',
        children: <Button label="Home button" icon={<Home/>} variant="outlined"/>
    },
    render: (args: TooltipProps) => <Tooltip {...args}/>
});

export const DisabledButtonTooltip = meta.story({
    args: {
        label: 'Tooltip',
        children: <Button isDisabled label="Disabled button" icon={<Home/>} variant="outlined"/>
    },
    render: (args: TooltipProps) => <Tooltip {...args}/>
});

export const LongTooltip = meta.story({
    args: {
        label: 'Very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long tooltip',
        children: <Button icon={<Home/>} variant="outlined"/>
    },
    render: (args: TooltipProps) => <Tooltip {...args}/>
});

export const ChipTooltip = meta.story({
    args: {
        label: 'Tooltip',
        children: <Chip icon={<Home/>} label="Chip"/>
    },
    render: (args: TooltipProps) => <Tooltip {...args}/>
});

export const TextTooltip = meta.story({
    args: {
        label: 'That is a long text',
        children: <p style={{width: '400px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum velit orci, a condimentum erat eleifend vel. Nam eu urna in libero gravida consequat nec non elit. Nulla maximus vestibulum mauris, quis volutpat metus rutrum ac. In eu libero a justo vulputate viverra at quis lacus. Duis volutpat sapien ac rhoncus elementum. Quisque id mollis tellus. Nunc sit amet magna hendrerit, convallis risus vitae, condimentum ante.</p>
    },
    render: (args: TooltipProps) => <Tooltip {...args}/>
});

export const BadgeTooltip = meta.story({
    args: {
        label: 'Tooltip',
        children: <Badge label="Badge"/>
    },
    render: (args: TooltipProps) => <Tooltip {...args}/>
});

export const PrimaryNavTooltip = meta.story({
    args: {
        label: 'Tooltip',
        children: <div/>
    },
    render: (args: TooltipProps) => {
        return (
            <div style={{transform: 'scale(1)', height: '100vh'}}>
                <PrimaryNav
                    headerLogo={<img src="https://via.placeholder.com/100x40?text=Logo"/>}
                    headerCaption="development"
                    top={
                        <>
                            <PrimaryNavItemsGroup>
                                <Tooltip label={args.label}>
                                    <PrimaryNavItem
                                        isSelected
                                        label="NavItem selected"
                                        icon={<Apps/>}
                                    />
                                </Tooltip>
                            </PrimaryNavItemsGroup>
                            <PrimaryNavItemsGroup>
                                <Tooltip label={args.label}>
                                    <PrimaryNavItem
                                        label="Very very long long name with many characters"
                                        icon={<Feather/>}
                                    />
                                </Tooltip>
                                <Tooltip label={args.label}>
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
                                <Tooltip label={args.label}>
                                    <PrimaryNavItem label="Another bottom item" icon={<Profile/>}/>
                                </Tooltip>
                            </PrimaryNavItemsGroup>
                            <PrimaryNavItemsGroup>
                                <Tooltip label={args.label}>
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
