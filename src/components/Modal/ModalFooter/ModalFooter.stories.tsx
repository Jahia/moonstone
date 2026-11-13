import { useState } from 'react';
import { userEvent, within } from 'storybook/test';

import markdownNotes from './ModalFooter.md?raw';
import { Button, Modal, ModalFooter, ModalHeader } from '~/components';

import type { StoryObj } from '@storybook/react-vite';

export default {
    title: 'Components/ModalFooter',
    component: ModalFooter,
    tags: ['beta'],
    parameters: {
        layout: 'centered',
        componentSubtitle: 'The actions of a Modal.',
        docs: { description: { component: markdownNotes } },
    },
};

export const Playground: StoryObj<typeof ModalFooter> = {
    args: { children: <Button label="Cancel"/> },
    render: (args) => {
        const [open, setOpen] = useState(false);
        return (
            <>
                <Button label="Open modal" onClick={() => setOpen(true)}/>
                <Modal isOpen={open} aria-labelledby="delete-project-title" onOpenChange={setOpen}>
                    <>
                        <ModalHeader id="delete-project-title" title="Delete project"/>
                        <ModalFooter {...args}/>
                    </>
                </Modal>
            </>
        );
    },
    // Opens the modal so that the visual test captures it, not only the button
    play: async ({ canvasElement }) => {
        await userEvent.click(within(canvasElement).getByRole('button', { name: 'Open modal' }));
        await within(document.body).findByRole('dialog');
    },
};
