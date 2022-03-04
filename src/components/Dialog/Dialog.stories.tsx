import React, {useState} from 'react';
import {Story} from '@storybook/react'
import {Dialog} from './Dialog';
import {Dialog2} from './Dialog2';
import {DialogProps} from './Dialog.types';
import {Button, Typography} from "~/components";

export default {
    title: 'Components/Dialog',
    component: Dialog,
    parameters: {
        layout: 'centered',
        knobs: {disable: true},
        storysource: {disable: true},
        actions: {argTypesRegex: '^on.*'}
    }
};

const Template: Story<DialogProps> = args => {
    const [showDialog, setShowDialog] = useState('');
    const close = () => setShowDialog('');
    return (
        <>
            <Button onClick={() => setShowDialog('radix')} label="Dialog-radix" color="accent"/>
            <Button onClick={() => setShowDialog('reach')} label="Dialog-reach" color="accent"/>
            <Dialog {...args}
                    isOpen={showDialog === 'radix'}
                    onClose={close}
                    header={(
                        <Typography variant="heading">Title</Typography>
                    )}
                    footer={(
                        <>
                            <Button size="big" label={"Ok"} color="accent"/>
                            <Button size="big"label={"Cancel"} onClick={close}/>
                        </>
                    )}
                    >
                bla bla
            </Dialog>
            <Dialog2 {...args}
                    isOpen={showDialog === 'reach'}
                    onClose={close}
                    header={(
                        <Typography variant="heading">Title</Typography>
                    )}
                    footer={(
                        <>
                            <Button size="big" label={"Ok"} color="accent"/>
                            <Button size="big"label={"Cancel"} onClick={close}/>
                        </>
                    )}
                    >
                bla bla
            </Dialog2>
        </>
    );
}

export const DefaultControlled = Template.bind({});
DefaultControlled.args = {
    'aria-label': 'default example dialog',
};
DefaultControlled.storyName = 'dialog';

export const Indeterminate = Template.bind({});
Indeterminate.args = {
    indeterminate: true,
    'aria-label': 'indeterminate example checkbox'
};

