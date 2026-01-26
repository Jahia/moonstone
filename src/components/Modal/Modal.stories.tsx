import {useState} from 'react';

import preview from '../../../.storybook/preview';
import {Modal, Button, Typography, Field, FieldSelector, Input, Chip, Dropdown} from '~/components';
import type {ModalProps} from './Modal.types';
import {Add, Language, MoreVert} from '~/icons';
import {Fieldset} from '../Fieldset';
import {ModalBody, ModalFooter, ModalHeader} from '~/components';

const meta = preview.meta({
    title: 'Components/Modal',
    component: Modal,
    tags: ['beta'],
    parameters: {
        layout: 'centered'
    }
});

export const Playground = meta.story({
    args: {
        children: null,
        isOpen: false
    },
    render: (args: ModalProps) => {
        const [open, setOpen] = useState(false);
        return (
            <div style={{maxWidth: '100vw'}}>
                <Button label="Open modal" onClick={() => setOpen(true)}/>
                <Modal {...args} isOpen={open} onOpenChange={setOpen}>
                    <>
                        <ModalHeader title="Modal Title"/>
                        <ModalBody>
                            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed elit et nibh rhoncus tincidunt id vel orci. Quisque vehicula eleifend odio, vitae dapibus eros volutpat vel. Quisque tortor ipsum, blandit porta ipsum quis, imperdiet lobortis purus. Cras euismod tempus lectus. Etiam fringilla ut orci ac ultricies. Donec eget finibus erat. Quisque posuere elit massa, eget posuere neque euismod sit amet. Duis orci tortor, rhoncus a risus eget, accumsan suscipit mauris.
                                Suspendisse metus quam, suscipit eu suscipit vitae, vehicula non dolor. Vestibulum tincidunt nec dolor non viverra. Nunc pharetra elit vel dolor interdum, ut venenatis risus dignissim. Quisque in facilisis sem. Nulla egestas, risus nec vehicula tincidunt, nisi magna iaculis turpis, ut commodo sem ipsum eu dui. Nulla varius, magna et suscipit porta, mauris erat blandit magna, ut condimentum ante mi in erat. Sed auctor libero sit amet hendrerit fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Cras placerat sapien ut porta convallis. Aliquam semper fringilla magna. Maecenas tincidunt ultricies ante. In ultricies augue non pharetra suscipit. Donec ante dolor, pulvinar vitae rutrum vitae, porttitor vel nulla. Praesent et massa lectus. Nulla gravida turpis metus, vestibulum aliquam leo mollis id.
                                Nulla ullamcorper pretium est, ac tempor ante. Donec molestie posuere metus id feugiat. Quisque auctor, lectus at luctus pharetra, felis orci pulvinar ante, eget venenatis lacus neque a quam. Maecenas tortor massa, placerat a feugiat id, porttitor sit amet lorem. Nunc lacinia ante sed diam aliquet, vel vehicula magna tincidunt. Nulla quam risus, placerat semper erat nec, semper dictum sapien. Suspendisse est erat, tincidunt vitae dictum eu, auctor quis sem. Ut venenatis egestas nisl, quis consectetur erat consectetur et.
                            </Typography>
                        </ModalBody>
                        <ModalFooter>
                            <Typography>Modal footer</Typography>
                            <Button label="Close" onClick={() => setOpen(false)}/>
                        </ModalFooter>
                    </>
                </Modal>
            </div>
        );
    }
});

export const ModalInModal = meta.story({
    args: {
        children: null,
        isOpen: false,
        onOpenChange: () => undefined
    },
    render: (args: ModalProps) => {
        const [open, setOpen] = useState(false);
        const [open2, setOpen2] = useState(false);
        return (
            <div style={{maxWidth: '100vw'}}>
                <Button label="Open modal" onClick={() => setOpen(true)}/>
                <Modal {...args} isOpen={open} onOpenChange={setOpen}>
                    <>
                        <ModalHeader title="Modal Title"/>
                        <ModalBody>
                            <Button label="Open modal" onClick={() => setOpen2(true)}/>
                            <Modal {...args} isOpen={open2} onOpenChange={setOpen2}>
                                <>
                                    <ModalHeader title="Modal Title"/>
                                    <ModalBody>
                                        <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed elit et nibh rhoncus tincidunt id vel orci. Quisque vehicula eleifend odio, vitae dapibus eros volutpat vel. Quisque tortor ipsum, blandit porta ipsum quis, imperdiet lobortis purus. Cras euismod tempus lectus. Etiam fringilla ut orci ac ultricies. Donec eget finibus erat. Quisque posuere elit massa, eget posuere neque euismod sit amet. Duis orci tortor, rhoncus a risus eget, accumsan suscipit mauris.
                                            Suspendisse metus quam, suscipit eu suscipit vitae, vehicula non dolor. Vestibulum tincidunt nec dolor non viverra. Nunc pharetra elit vel dolor interdum, ut venenatis risus dignissim. Quisque in facilisis sem. Nulla egestas, risus nec vehicula tincidunt, nisi magna iaculis turpis, ut commodo sem ipsum eu dui. Nulla varius, magna et suscipit porta, mauris erat blandit magna, ut condimentum ante mi in erat. Sed auctor libero sit amet hendrerit fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Cras placerat sapien ut porta convallis. Aliquam semper fringilla magna. Maecenas tincidunt ultricies ante. In ultricies augue non pharetra suscipit. Donec ante dolor, pulvinar vitae rutrum vitae, porttitor vel nulla. Praesent et massa lectus. Nulla gravida turpis metus, vestibulum aliquam leo mollis id.
                                            Nulla ullamcorper pretium est, ac tempor ante. Donec molestie posuere metus id feugiat. Quisque auctor, lectus at luctus pharetra, felis orci pulvinar ante, eget venenatis lacus neque a quam. Maecenas tortor massa, placerat a feugiat id, porttitor sit amet lorem. Nunc lacinia ante sed diam aliquet, vel vehicula magna tincidunt. Nulla quam risus, placerat semper erat nec, semper dictum sapien. Suspendisse est erat, tincidunt vitae dictum eu, auctor quis sem. Ut venenatis egestas nisl, quis consectetur erat consectetur et.
                                        </Typography>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Typography>Modal footer</Typography>
                                        <Button label="Close" onClick={() => setOpen2(false)}/>
                                    </ModalFooter>
                                </>
                            </Modal>
                        </ModalBody>
                        <ModalFooter>
                            <Typography>Modal footer</Typography>
                            <Button label="Close" onClick={() => setOpen(false)}/>
                        </ModalFooter>
                    </>
                </Modal>
            </div>
        );
    }
});

export const Advanced = meta.story({
    args: {
        isOpen: false,
        onOpenChange: () => undefined,
        size: 'large',
        children: (
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
                                    value=""
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
                                    ]}
                                />}
                            />
                        </Field>
                    </Fieldset>
                </ModalBody>
                <ModalFooter>
                    <Typography variant="caption">Footer children 1</Typography>
                    <Button color="accent" label="Footer children 2"/>
                </ModalFooter>
            </>
        )
    },
    render: (args: ModalProps) => {
        const [open, setOpen] = useState(false);
        return (
            <div style={{maxWidth: '100vw'}}>
                <Button label="Open modal" onClick={() => setOpen(true)}/>
                <Modal {...args} isOpen={open} onOpenChange={setOpen}/>
            </div>
        );
    }
});
