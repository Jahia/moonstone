import preview from '~/__storybook__/preview';

import {Banner, Button} from '~/components';
import type {BannerProps} from './Banner.types';
import {RichText} from '~/icons';

const meta = preview.meta({
    title: 'Components/Banner',
    component: Banner,
    tags: ['new'],

    parameters: {
        layout: 'padded',
        actions: {argTypesRegex: '^on.*'}
    }
});

const Template = (args: BannerProps) => {
    return <div style={{maxWidth: '100vw'}}><Banner {...args}/></div>;
};

const defaultArgs = {
    title: 'Banner Title',
    children: 'Banner content'
} satisfies BannerProps;

export const Default = meta.story({
    args: defaultArgs,
    render: Template
});

export const WithButton = meta.story({
    args: {
        ...defaultArgs,
        children: <>There was an error. <Button label="Click me"/></>
    }
});

export const WithLongContent = meta.story({
    args: {
        ...defaultArgs,
        iconStart: <RichText/>,
        children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultricies tortor ac nisl porttitor, sed porta risus vulputate. Nullam luctus in lacus ultrices faucibus. Aliquam vehicula, risus eget finibus consectetur, arcu ante dapibus massa, finibus venenatis mauris ante eu libero. Mauris eleifend et diam ac laoreet. Nullam quis interdum odio. Donec accumsan porta est in accumsan. Maecenas dolor magna, auctor eget ultricies ut, cursus at lacus. Quisque sagittis metus ac sodales sollicitudin. Etiam et leo a mauris malesuada hendrerit ac eu lacus. Phasellus gravida hendrerit lacinia. Pellentesque velit justo, auctor in ligula et, mattis convallis odio. Nam pulvinar tellus eu luctus pretium.'
    }
});
