import { Thumbnail } from './Thumbnail';
import imgHorizontal from '~/__storybook__/assets/img-horizontal.webp';
import imgIcon from '~/__storybook__/assets/img-icon.webp';
import imgVertical from '~/__storybook__/assets/img-vertical.webp';
import { Love } from '~/icons';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Thumbnail> = {
    title: 'Components/Thumbnail',
    component: Thumbnail,
    tags: ['beta'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        size: {
            control: 'select',
            options: ['default', 'small'],
        },
        variant: {
            control: 'select',
            options: ['preview', 'icon'],
        },
    },
};

export default meta;

type Story = StoryObj<typeof Thumbnail>;

export const Default: Story = {
    args: {},
};

export const WithImage: Story = {
    args: {
        src: imgVertical,
        alt: 'vertical image',
    },
};

export const WithReactElement: Story = {
    args: {
        src: <Love color="gray" size="big"/>,
    },
};

export const SmallSize: Story = {
    args: {
        src: imgHorizontal,
        alt: 'Small thumbnail',
        size: 'small',
    },
};

export const IconVariant: Story = {
    args: {
        src: imgIcon,
        alt: 'Icon variant',
        variant: 'icon',
    },
};

export const AllVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <Thumbnail/>
            <Thumbnail alt="Horizontal image" src={imgHorizontal} variant="preview"/>
            <Thumbnail src={<Love color="gray" size="big"/>} variant="icon"/>
            <Thumbnail alt="Small image" size="small" src={imgVertical} variant="preview"/>
        </div>
    ),
};
