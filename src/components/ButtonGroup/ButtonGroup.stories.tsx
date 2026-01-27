import preview from '~storybook/preview';
import markdownNotes from './ButtonGroup.md';
import {ButtonGroup} from './index';
import {Button} from '~/components/Button';
import {ChevronDown} from '~/icons';
import type {ButtonGroupProps} from './ButtonGroup.types';

const meta = preview.meta({
    title: 'Components/ButtonGroup',
    component: ButtonGroup,
    subcomponents: {Button},
    parameters: {
        layout: 'centered',
        componentSubtitle: 'ButtonGroup',
        notes: {markdown: markdownNotes},
        actions: {argTypesRegex: '^on.*'}
    }
});

export const Default = meta.story({
    args: {
        children: null
    },
    render: (args: ButtonGroupProps) => (
        <ButtonGroup {...args}>
            <Button label="one" onClick={() => null}/>
            <Button label="two" onClick={() => null}/>
            <Button label="three" onClick={() => null}/>
        </ButtonGroup>
    )
});

export const ButtonWithActions = meta.story({
    args: {
        color: 'accent',
        size: 'big',
        children: null
    },
    render: (args: ButtonGroupProps) => (
        <ButtonGroup {...args}>
            <Button label="Actions" onClick={() => null}/>
            <Button icon={<ChevronDown/>} aria-label="button with down arrow icon" onClick={() => null}/>
        </ButtonGroup>
    )
});

export const ButtonOutlinedWithActions = meta.story({
    args: {
        color: 'accent',
        size: 'big',
        variant: 'outlined',
        children: null
    },
    render: (args: ButtonGroupProps) => (
        <ButtonGroup {...args}>
            <Button label="Actions" onClick={() => null}/>
            <Button icon={<ChevronDown/>} aria-label="button with down arrow icon" onClick={() => null}/>
        </ButtonGroup>
    )
});

export const ButtonGroupWith1Button = meta.story({
    args: {
        color: 'accent',
        size: 'big',
        children: null
    },
    render: (args: ButtonGroupProps) => (
        <ButtonGroup {...args}>
            <Button label="Actions" onClick={() => null}/>
        </ButtonGroup>
    )
});
