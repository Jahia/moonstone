import {StoryObj, Meta} from '@storybook/react';

import {Modal, Button, Typography, Field, FieldSelector, Input, Chip, Dropdown} from '~/components';
import type {ModalProps} from './Modal.types';
import {Add, Language, MoreVert} from '~/icons';
import {Fieldset} from '../Fieldset';
import {ModalBody, ModalFooter, ModalHeader} from '~/components';
import {useState} from 'react';

const meta: Meta<typeof Modal> = {
    title: 'Components/Modal',
    component: Modal,
    tags: ['new'],

    parameters: {
        layout: 'centered',
        actions: {argTypesRegex: '^on.*'}
    }
};
export default meta;

type Story = StoryObj<typeof Modal>;
const Template = (args: ModalProps) => {
    const [open, setOpen] = useState(false);
    return (
        <div style={{maxWidth: '100vw'}}>
            <Button label="Open modal" onClick={() => setOpen(true)}/>
            <Modal isOpen={open} onOpenChange={setOpen} {...args}/>
        </div>
    );
};

export const Minimal: Story = {
    args: {
        children:
    <>
        <ModalHeader title="Modal Title"/>
        <ModalBody>
            <Typography>This is a minimal modal</Typography>
        </ModalBody>
    </>
    },
    render: Template
};

export const Advanced: Story = {
    args: {
        size: 'large',
        children:
    <>
        <ModalHeader title="Modal Title">Additional information</ModalHeader>
        <ModalBody>
            <Fieldset id="modal-fieldset" label="Modal fieldset">
                <Field id="field-text" label="Text field" chips={<><Chip color="accent" label="Required"/><Chip icon={<Language/>} label="Shared by all languages"/></>} buttons={<><Button icon={<Add/>} label="Add"/><Button icon={<MoreVert/>} variant="ghost"/></>} helper="information">
                    <FieldSelector buttons={<Button icon={<MoreVert/>}/>} selector={<Input size="big" placeholder="Input value"/>}/>
                </Field>
                <Field id="field-dropdown" label="Dropdown field" chips={<><Chip color="accent" label="Required"/><Chip icon={<Language/>} label="Shared by all languages"/></>} buttons={<Button icon={<MoreVert/>} variant="ghost"/>} helper="information">
                    <FieldSelector
                                    selector={<Dropdown
                                    variant="outlined"
                                    label="Input value"
                                    className="flexFluid"
                                    data={[
                                        {
                                            label: 'option 1',
                                            value: '1'
                                        },
                                        {
                                            label: 'option 2',
                                            value: '2'
                                        },
                                        {
                                            label: 'option 3 with very long long label label label label label label label label',
                                            value: '3'
                                        }
                                    ]}/>}/>
                </Field>
            </Fieldset>
        </ModalBody>
        <ModalFooter>
            <Typography variant="caption">Footer children 1</Typography>
            <Button color="accent" label="Footer children 2"/>
        </ModalFooter>
    </>
    },
    render: Template
};
