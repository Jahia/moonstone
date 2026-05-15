import preview from '~/__storybook__/preview';

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
        docs: {
            description: {component: markdownNotes},
            subtitle: 'ButtonGroup'
        },
        actions: {argTypesRegex: '^on.*'}
    }
});

export const Default = meta.story({
    render: args => (
        <ButtonGroup {...args}>
            {args.children}
        </ButtonGroup>
    ),

    args: {
        size: 'big',
        children: [
            <Button key="one" label="one" onClick={() => null}/>,
            <Button key="two" label="two" onClick={() => null}/>,
            <Button key="three" label="three" onClick={() => null}/>
        ]
    }
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

