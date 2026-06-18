import preview from '~/__storybook__/preview';
import {Thumbnail} from './Thumbnail';
import {Love} from '~/icons';
import imgVertical from '~/__storybook__/assets/img-vertical.webp';
import imgHorizontal from '~/__storybook__/assets/img-horizontal.webp';
import imgIcon from '~/__storybook__/assets/img-icon.webp';

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
    args: {}
});

export const WithImage = meta.story({
    args: {
        src: imgVertical,
        alt: 'vertical image'
    }
});

export const WithReactElement = meta.story({
    args: {
        src: <Love size="big" color="gray"/>
    }
});

export const SmallSize = meta.story({
    args: {
        src: imgHorizontal,
        alt: 'Small thumbnail',
        size: 'small'
    }
});

export const IconVariant = meta.story({
    args: {
        src: imgIcon,
        alt: 'Icon variant',
        variant: 'icon'
    }
});

export const AllVariants = meta.story({
    render: () => (
        <div style={{display: 'flex', gap: '16px', alignItems: 'center'}}>
            <Thumbnail/>
            <Thumbnail variant="preview" src={imgHorizontal} alt="Horizontal image"/>
            <Thumbnail variant="icon" src={<Love size="big" color="gray"/>}/>
            <Thumbnail variant="preview" size="small" src={imgVertical} alt="Small image"/>
        </div>
    )
});
