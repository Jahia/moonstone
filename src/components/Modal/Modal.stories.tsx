import React from 'react';
import {StoryFn, Meta} from '@storybook/react';

import {Modal} from './index';
import {Button} from '~/components';
import {Home} from '~/icons';

export default {
    title: 'Components/Floating UI/Modal',
    component: Modal,
    tags: ['beta'],
    parameters: {
        layout: 'centered',
        knobs: {disable: true},
        storysource: {disable: true},
        actions: {argTypesRegex: '^on.*'}
    }
} as Meta<typeof Modal>;

// The modal is wrapped around the button which triggers it
const ModalTemplate: StoryFn<typeof Modal> = args => (
    <Modal label="Return home?" helper="Progress will not be saved." actions={<><Button color="danger" label="Cancel" variant="outlined"/><Button label="Accept" variant="outlined"/></>} {...args}><Button icon={<Home/>} variant="outlined"/></Modal>
);

export const FLoatingModal = {
    render: ModalTemplate
};
