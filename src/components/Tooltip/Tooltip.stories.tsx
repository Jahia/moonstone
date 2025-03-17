import React from 'react';
import {StoryFn, Meta} from '@storybook/react';

import {Tooltip} from './index';
import {Badge, Button, Chip, PrimaryNav, PrimaryNavItem, PrimaryNavItemsGroup} from '~/components';
import {Apps, Feather, Home, Person, Profile, Setting} from '~/icons';

export default {
    title: 'Components/Tooltip',
    component: Tooltip,
    tags: ['new'],
    parameters: {
        layout: 'centered',
        knobs: {disable: true},
        storysource: {disable: true},
        actions: {argTypesRegex: '^on.*'}
    }
} as Meta<typeof Tooltip>;

const Template: StoryFn<typeof Tooltip> = args => (
    <Tooltip label="Tooltip" {...args}/>
);

export const IconButtonTooltip = {
    render: Template,
    args: {
        label: 'Home',
        children: <Button icon={<Home/>} variant="outlined"/>
    }
};

export const ButtonTooltip = {
    render: Template,
    args: {
        label: 'Home',
        children: <Button label="Home button" icon={<Home/>} variant="outlined"/>
    }
};

export const DisabledButtonTooltip = {
    render: Template,
    args: {
        children: <Button isDisabled label="Disabled button" icon={<Home/>} variant="outlined"/>
    }
};

export const LongTooltip = {
    render: Template,
    args: {
        label: 'Very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long tooltip',
        children: <Button icon={<Home/>} variant="outlined"/>
    }
};

export const ChipTooltip = {
    render: Template,
    args: {
        children: <Chip icon={<Home/>} label="Chip"/>
    }
};

export const TextTooltip = {
    render: Template,
    args: {
        label: 'That is a long text',
        children: <p style={{width: '400px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum velit orci, a condimentum erat eleifend vel. Nam eu urna in libero gravida consequat nec non elit. Nulla maximus vestibulum mauris, quis volutpat metus rutrum ac. In eu libero a justo vulputate viverra at quis lacus. Duis volutpat sapien ac rhoncus elementum. Quisque id mollis tellus. Nunc sit amet magna hendrerit, convallis risus vitae, condimentum ante.</p>
    }
};

export const BadgeTooltip = {
    render: Template,
    args: {
        children: <Badge label="Badge"/>
    }
};

export const PrimaryNavTooltip = () => {
    return (
        <div style={{transform: 'scale(1)', height: '100vh'}}>
            <PrimaryNav
          headerLogo={<img src="https://via.placeholder.com/100x40?text=Logo"/>}
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
};
