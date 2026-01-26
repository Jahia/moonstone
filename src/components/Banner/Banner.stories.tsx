import preview from '../../../.storybook/preview';
import {Banner, Button} from '~/components';
import {RichText} from '~/icons';
import {BannerProps} from './Banner.types';

const meta = preview.meta({
    title: 'Components/Banner',
    component: Banner,
    tags: ['new'],
    parameters: {
        layout: 'padded',
        actions: {argTypesRegex: '^on.*'}
    }
});

export const Default = meta.story({
    args: {
        title: 'Banner Title',
        children: 'Banner content'
    },
    render: (args: BannerProps) => (
        <div style={{maxWidth: '100vw'}}>
            <Banner {...args}/>
        </div>
    )
});

export const WithButton = Default.extend({
    render: (args: BannerProps) => (
        <div style={{maxWidth: '100vw'}}>
            <Banner {...args}>
                <Button label="Click me"/>
            </Banner>
        </div>
    )
});

export const WithLongContent = Default.extend({
    args: {
        iconStart: <RichText/>,
        children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultricies tortor ac nisl porttitor, sed porta risus vulputate. Nullam luctus in lacus ultrices faucibus. Aliquam vehicula, risus eget finibus consectetur, arcu ante dapibus massa, finibus venenatis mauris ante eu libero. Mauris eleifend et diam ac laoreet. Nullam quis interdum odio. Donec accumsan porta est in accumsan. Maecenas dolor magna, auctor eget ultricies ut, cursus at lacus. Quisque sagittis metus ac sodales sollicitudin. Etiam et leo a mauris malesuada hendrerit ac eu lacus. Phasellus gravida hendrerit lacinia. Pellentesque velit justo, auctor in ligula et, mattis convallis odio. Nam pulvinar tellus eu luctus pretium.'
    }
});
