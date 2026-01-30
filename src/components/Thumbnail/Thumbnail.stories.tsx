import preview from '~storybook/preview';
import {Thumbnail} from './Thumbnail';
import type {ThumbnailProps} from './Thumbnail.types';
import {Love} from '../../icons/components';

const meta = preview.meta({
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
});

export const Default = meta.story({
    render: (args: ThumbnailProps) => <Thumbnail {...args}/>
});

export const WithImage = Default.extend({
    args: {
        src: 'https://picsum.photos/200',
        alt: 'Random image'
    }
});

export const WithReactElement = Default.extend({
    args: {
        src: <Love size="big" color="gray"/>
    }
});

export const SmallSize = Default.extend({
    args: {
        src: 'https://picsum.photos/200',
        alt: 'Small thumbnail',
        size: 'small'
    }
});

export const IconVariant = Default.extend({
    args: {
        src: 'https://picsum.photos/200',
        alt: 'Icon variant',
        variant: 'icon'
    }
});

export const AllVariants = meta.story({
    render: (args: ThumbnailProps) => (
        <div style={{display: 'flex', gap: '16px', alignItems: 'center'}}>
            <Thumbnail {...args}/>
            <Thumbnail src="https://picsum.photos/200" alt="Preview"/>
            <Thumbnail src={<Love size="big" color="gray"/>}/>
            <Thumbnail size="small" src="https://picsum.photos/200" alt="Small"/>
        </div>
    )
});
