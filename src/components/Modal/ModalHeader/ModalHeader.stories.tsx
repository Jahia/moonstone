import { useState } from 'react';

import markdownNotes from './ModalHeader.md?raw';
import { Button, Modal, ModalFooter, ModalHeader } from '~/components';

import type { StoryObj } from '@storybook/react-vite';

export default {
    title: 'Components/ModalHeader',
    component: ModalHeader,
    tags: ['beta'],
    parameters: {
        layout: 'centered',
        componentSubtitle: 'The title of a Modal.',
        docs: { description: { component: markdownNotes } },
    },
};

export const Playground: StoryObj<typeof ModalHeader> = {
    args: { id: 'delete-project-title', title: 'Delete project' },
    render: (args) => {
        const [open, setOpen] = useState(false);
        return (
            <>
                <Button label="Open modal" onClick={() => setOpen(true)}/>
                <Modal isOpen={open} aria-labelledby="delete-project-title" onOpenChange={setOpen}>
                    <>
                        <ModalHeader {...args}/>
                        <ModalFooter>
                            <Button label="Cancel" onClick={() => setOpen(false)}/>
                        </ModalFooter>
                    </>
                </Modal>
            </>
        );
    },
};
