import { CardSelector } from './index';
import imgIcon from '~/__storybook__/assets/img-icon.webp';
import imgVertical from '~/__storybook__/assets/img-vertical.webp';
import { Button } from '~/components/Button';
import { Chip } from '~/components/Chip';
import { Close, FileImage, Lock, Love } from '~/icons';

import type { CardSelectorProps } from './CardSelector.types';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof CardSelector> = {
    title: 'Components/CardSelector',
    component: CardSelector,
    tags: ['new'],

    parameters: {
        a11y: { test: 'todo' }, // axe gate: known violations, WCAG AA epic #1421
        layout: 'padded',
        actions: { argTypesRegex: '^on.*' },
    },
};
export default meta;

type Story = StoryObj<typeof CardSelector>;
const Template = (args: CardSelectorProps) => {
    return <div style={{ maxWidth: '100vw' }}><CardSelector {...args}/></div>;
};

export const Default: Story = {
    args: {
        id: 'cardSelector',
        displayName: 'Item name',
        systemName: 'system name',
    },
    render: Template,
};

export const Image: Story = {
    args: {
        ...Default.args,
        thumbnail: imgVertical,
        thumbnailAlt: 'preview-img',
        thumbnailType: 'preview',
        information: 'more information',
        chips: [<Chip color="accent" icon={<FileImage/>} key="chip" label="image"/>, <Chip color="danger" icon={<Lock/>} key="chip2" label="marked for deletion"/>],
    },
    render: Template,
};

export const Icon: Story = {
    args: {
        ...Image.args,
        thumbnail: imgIcon,
        thumbnailType: 'icon',
    },
    render: Template,
};

export const IconComponent: Story = {
    args: {
        ...Image.args,
        thumbnail: <Love className="test" id="test"/>,
        thumbnailType: 'icon',
    },
    render: Template,
};

export const Actions: Story = {
    args: {
        ...Image.args,
        cardAction: <Button icon={<Close/>} key="btn" variant="ghost"/>,
    },
    render: Template,
};

export const NoChips: Story = {
    args: {
        ...Image.args,
        chips: null,
    },
    render: Template,
};

export const Error: Story = {
    args: {
        hasError: true,
        errorMessage: 'Broken reference',
    },
    render: Template,
};
