import {StoryObj, Meta} from '@storybook/react-vite';

import markdownNotes from './ButtonGroup.md';
import {ButtonGroup} from './index';
import type {ButtonGroupProps} from './ButtonGroup.types';
import {Button} from '~/components/Button';
import {ChevronDown} from '~/icons';

const meta: Meta<typeof ButtonGroup> = {
    title: 'Components/ButtonGroup',
    component: ButtonGroup,
    subcomponents: {Button},

    parameters: {
        layout: 'centered',
        docs: {
            description: {component: markdownNotes},
            subtitle: 'ButtonGroup'
        },
        actions: {argTypesRegex: '^on.*'}
    }
};
export default meta;

type Story = StoryObj<ButtonGroupProps>;

export const Default: Story = {
    render: args => (
        <ButtonGroup {...args}>
            <Button label="one" onClick={() => null}/>
            <Button label="two" onClick={() => null}/>
            <Button label="three" onClick={() => null}/>
        </ButtonGroup>
    ),

    args: {
        size: 'big'
    }
};

export const ButtonWithActions: Story = {
    render: () => (
        <ButtonGroup color="accent" size="big">
            <Button label="Actions" onClick={() => null}/>
            <Button icon={<ChevronDown/>} aria-label="button with down arrow icon" onClick={() => null}/>
        </ButtonGroup>
    )
};

export const ButtonOutlinedWithActions: Story = {
    render: () => (
        <ButtonGroup color="accent" size="big" variant="outlined">
            <Button label="Actions" onClick={() => null}/>
            <Button icon={<ChevronDown/>} aria-label="button with down arrow icon" onClick={() => null}/>
        </ButtonGroup>
    )
};

export const ButtonGroupWith1Button: Story = {
    render: () => (
        <ButtonGroup color="accent" size="big">
            <Button label="Actions" onClick={() => null}/>
        </ButtonGroup>
    )
};

