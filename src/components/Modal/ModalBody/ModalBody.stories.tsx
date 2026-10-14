import { useState } from 'react';

import markdownNotes from './ModalBody.md?raw';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from '~/components';

import type { StoryObj } from '@storybook/react-vite';

export default {
    title: 'Components/ModalBody',
    component: ModalBody,
    tags: ['beta'],
    parameters: {
        layout: 'centered',
        componentSubtitle: 'The content of a Modal.',
        docs: { description: { component: markdownNotes } },
    },
};

export const Playground: StoryObj<typeof ModalBody> = {
    args: { children: 'This project and its content will be deleted.' },
    render: (args) => {
        const [open, setOpen] = useState(false);
        return (
            <>
                <Button label="Open modal" onClick={() => setOpen(true)}/>
                <Modal isOpen={open} aria-labelledby="delete-project-title" onOpenChange={setOpen}>
                    <>
                        <ModalHeader id="delete-project-title" title="Delete project"/>
                        <ModalBody {...args}/>
                        <ModalFooter>
                            <Button label="Cancel" onClick={() => setOpen(false)}/>
                        </ModalFooter>
                    </>
                </Modal>
            </>
        );
    },
};
