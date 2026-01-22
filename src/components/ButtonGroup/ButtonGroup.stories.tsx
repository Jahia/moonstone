import preview from '../../../.storybook/preview';
import markdownNotes from './ButtonGroup.md';
import {ButtonGroup} from './index';
import {Button} from '~/components/Button';
import {ChevronDown} from '~/icons';

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
    render: () => (
        <ButtonGroup>
            <Button label="one" onClick={() => null}/>
            <Button label="two" onClick={() => null}/>
            <Button label="three" onClick={() => null}/>
        </ButtonGroup>
    )
});

export const ButtonWithActions = meta.story({
    render: () => (
        <ButtonGroup color="accent" size="big">
            <Button label="Actions" onClick={() => null}/>
            <Button icon={<ChevronDown/>} aria-label="button with down arrow icon" onClick={() => null}/>
        </ButtonGroup>
    )
});

export const ButtonOutlinedWithActions = meta.story({
    render: () => (
        <ButtonGroup color="accent" size="big" variant="outlined">
            <Button label="Actions" onClick={() => null}/>
            <Button icon={<ChevronDown/>} aria-label="button with down arrow icon" onClick={() => null}/>
        </ButtonGroup>
    )
});

export const ButtonGroupWith1Button = meta.story({
    render: () => (
        <ButtonGroup color="accent" size="big">
            <Button label="Actions" onClick={() => null}/>
        </ButtonGroup>
    )
});
