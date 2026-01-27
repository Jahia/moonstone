import preview from '~storybook/preview';
import '~/__storybook__/storybook.scss';
import {Separator} from './index';
import type {SeparatorProps} from './Separator.types';
import {Typography} from '~/components';
import markdownNotes from './Separator.md';

const meta = preview.meta({
    title: 'Components/Separator',
    component: Separator,
    parameters: {
        layout: 'centered',
        notes: {markdown: markdownNotes}
    }
});

export const Horizontal = meta.story({
    args: {
        variant: 'horizontal',
        size: 'full',
        spacing: 'medium'
    },
    render: (args: SeparatorProps) => (
        <>
            <Typography variant="heading">Content before a separator</Typography>
            <Separator {...args}/>
            <Typography variant="heading">Content after a separator</Typography>
        </>
    )
});

export const Vertical = meta.story({
    args: {
        variant: 'vertical',
        size: 'full',
        spacing: 'medium'
    },
    render: (args: SeparatorProps) => (
        <div className="flexRow alignCenter">
            <Typography variant="heading">Before</Typography>

            <Separator {...args}/>
            <Typography variant="heading">After</Typography>
        </div>
    )
});

export const Invisible = meta.story({
    args: {
        variant: 'vertical',
        size: 'full',
        spacing: 'big',
        invisible: 'lastChild'
    },
    render: (args: SeparatorProps) => (
        <section className="storyColumn">
            <div className="storyItem">
                <Typography variant="heading">Before</Typography>
                <Separator variant="vertical" {...args}/>
                <Typography variant="heading">After</Typography>
            </div>
            <div className="storyItem">
                <Typography variant="heading">Before</Typography>
                <Separator variant="vertical" {...args}/>
            </div>
            <div className="storyItem">
                <Separator variant="vertical" {...args}/>
                <Typography variant="heading">After</Typography>
            </div>
            <div className="storyItem">
                <Separator variant="vertical" {...args}/>
            </div>
        </section>
    )
});
