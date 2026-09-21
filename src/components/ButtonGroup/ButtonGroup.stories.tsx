import markdownNotes from './ButtonGroup.md';
import { ButtonGroup } from './index';
import { Button } from '~/components/Button';
import { ChevronDown } from '~/icons';

import type { ButtonGroupProps } from './ButtonGroup.types';
import type { Meta, StoryObj } from '@storybook/react-vite';

export default {
    title: 'Components/ButtonGroup',
    component: ButtonGroup,
    subcomponents: { Button },

    parameters: {
        layout: 'centered',
        componentSubtitle: 'ButtonGroup',
        notes: { markdown: markdownNotes },
        actions: { argTypesRegex: '^on.*' },
    },
} as Meta<typeof ButtonGroup>;

export const Default: StoryObj<ButtonGroupProps> = {
    render: args => (
        <ButtonGroup {...args}>
            <Button label="one" onClick={() => null}/>
            <Button label="two" onClick={() => null}/>
            <Button label="three" onClick={() => null}/>
        </ButtonGroup>
    ),

    args: {
        size: 'big',
    },
};

export const ButtonWithActions = () => (
    <ButtonGroup color="accent" size="big">
        <Button label="Actions" onClick={() => null}/>
        <Button aria-label="button with down arrow icon" icon={<ChevronDown/>} onClick={() => null}/>
    </ButtonGroup>
);

export const ButtonOutlinedWithActions = () => (
    <ButtonGroup color="accent" size="big" variant="outlined">
        <Button label="Actions" onClick={() => null}/>
        <Button aria-label="button with down arrow icon" icon={<ChevronDown/>} onClick={() => null}/>
    </ButtonGroup>
);

export const ButtonGroupWith1Button = () => (
    <ButtonGroup color="accent" size="big">
        <Button label="Actions" onClick={() => null}/>
    </ButtonGroup>
);
