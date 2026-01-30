import preview from '~storybook/preview';
import {SvgWrapper} from './index';
import type {SvgWrapperProps} from './SvgWrapper.types';
import markdownNotes from './SvgWrapper.md';
import '~/__storybook__/storybook.scss';

const svg = (
    <svg viewBox="0 0 24 24" fill="none">
        <path
            d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4l2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z"
            fill="currentColor"
        />
    </svg>
);

const meta = preview.meta({
    title: 'Utilities/SvgWrapper',
    component: SvgWrapper,
    parameters: {
        layout: 'centered',
        notes: {markdown: markdownNotes}
    }
});

export const Playground = meta.story({
    args: {
        svg: svg,
        size: 'default'
    },
    render: (args: SvgWrapperProps) => <SvgWrapper {...args}/>
});
