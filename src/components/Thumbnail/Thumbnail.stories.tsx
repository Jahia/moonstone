import {StoryObj, Meta} from '@storybook/react-vite';

import {Thumbnail} from './index';
import {Love} from '~/icons';
import type {ThumbnailProps} from './Thumbnail.types';

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
    args: {},
    name: 'Default (Fallback)'
};

export const WithImagePreview: Story = {
    args: {
        src: 'https://picsum.photos/100/100',
        alt: 'Sample image',
        variant: 'preview',
        size: 'default'
    }
};

export const WithImageIcon: Story = {
    args: {
        src: 'http://www.google.com/s2/favicons?domain=www.jahia.com',
        alt: 'Jahia favicon',
        variant: 'icon',
        size: 'default'
    }
};

export const WithReactElement: Story = {
    args: {
        src: <Love/>,
        variant: 'icon',
        size: 'default'
    }
};

const AllSizesTemplate = (args: ThumbnailProps) => (
    <div style={{display: 'flex', gap: '16px', alignItems: 'center'}}>
        <div>
            <p style={{marginBottom: '8px'}}>Default (46x46)</p>
            <Thumbnail {...args} size="default"/>
        </div>
        <div>
            <p style={{marginBottom: '8px'}}>Small (40x40)</p>
            <Thumbnail {...args} size="small"/>
        </div>
    </div>
);

export const AllSizes: Story = {
    args: {
        src: 'https://picsum.photos/100/100',
        alt: 'Sample image',
        variant: 'preview'
    },
    render: AllSizesTemplate
};
