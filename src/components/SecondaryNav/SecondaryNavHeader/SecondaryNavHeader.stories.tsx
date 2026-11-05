import { SecondaryNav, SecondaryNavHeader } from '../index';
import markdownNotes from './SecondaryNavHeader.md?raw';

import type { SecondaryNavHeaderProps } from './SecondaryNavHeader.types';
import type { Meta, StoryObj } from '@storybook/react-vite';

export default {
    title: 'Components/SecondaryNavHeader',
    component: SecondaryNavHeader,
    tags: ['dark-theme'],
    decorators: [
        StoryCmp => (
            <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
                <StoryCmp/>
            </div>
        ),
    ],
    parameters: {
        componentSubtitle: 'The title of a SecondaryNav.',
        docs: { description: { component: markdownNotes } },
    },
} as Meta<typeof SecondaryNavHeader>;

export const Playground: StoryObj<SecondaryNavHeaderProps> = {
    args: { children: 'Content' },
    render: args => (
        <SecondaryNav aria-label="Site content" header={<SecondaryNavHeader {...args}/>}>
            Navigation
        </SecondaryNav>
    ),
};
