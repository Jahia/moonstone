import type {Meta, StoryObj} from '@storybook/react';
import {Thumbnail} from './Thumbnail';
import {Love} from '../../icons/components';

const meta: Meta<typeof Thumbnail> = {
    title: 'Components/Thumbnail',
    component: Thumbnail,
    tags: ['beta'],
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        size: {
            control: 'select',
            options: ['default', 'small']
        },
        variant: {
            control: 'select',
            options: ['preview', 'icon']
        }
    }
};

export default meta;

type Story = StoryObj<typeof Thumbnail>;

export const Default: Story = {
    args: {}
};

export const WithImage: Story = {
    args: {
        src: 'https://picsum.photos/200',
        alt: 'Random image'
    }
};

export const WithReactElement: Story = {
    args: {
        src: <Love size="big" color="gray"/>
    }
};

export const SmallSize: Story = {
    args: {
        src: 'https://picsum.photos/200',
        alt: 'Small thumbnail',
        size: 'small'
    }
};

export const IconVariant: Story = {
    args: {
        src: 'https://picsum.photos/200',
        alt: 'Icon variant',
        variant: 'icon'
    }
};

export const AllVariants: Story = {
    render: () => (
        <div style={{display: 'flex', gap: '16px', alignItems: 'center'}}>
            <Thumbnail/>
            <Thumbnail src="https://picsum.photos/200" alt="Preview"/>
            <Thumbnail src={<Love size="big" color="gray"/>}/>
            <Thumbnail size="small" src="https://picsum.photos/200" alt="Small"/>
        </div>
    )
};
