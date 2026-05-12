import { addons } from 'storybook/preview-api';
import { UPDATE_GLOBALS, STORY_ARGS_UPDATED } from 'storybook/internal/core-events';
import type { Preview } from '@storybook/react-vite';

type StoryArgsUpdatedPayload = {
    args?: {
        isReversed?: boolean;
    };
};

const channel = addons.getChannel();

const storyListener = ({ args }: StoryArgsUpdatedPayload) => {
    if (typeof args?.isReversed !== 'undefined') {
        const colorTheme = args.isReversed ? 'dark' : 'light';
        channel.emit(UPDATE_GLOBALS, {
            initialGlobals: {
                theme: colorTheme,
                backgrounds: colorTheme === 'dark'
                    ? { name: 'dark', value: '#293136' }
                    : { name: 'light', value: '#fdfdfd' }
            }
        });
    }
};

const setupBackgroundListener = () => {
    channel.removeListener(STORY_ARGS_UPDATED, storyListener);
    channel.addListener(STORY_ARGS_UPDATED, storyListener);
};

setupBackgroundListener();

export const projectAnnotations = {
    decorators: [story => story()],
    parameters: {
        layout: 'fullscreen',
        options: {
            storySort: {
                method: 'alphabetical'
            }
        },
        backgrounds: {
            options: {
                light: { name: 'light', value: '#fdfdfd' },
                dark: { name: 'dark', value: '#293136' }
            }
        },
        controls: {
            expanded: true,
            sort: 'requiredFirst'
        }
    },
    tags: ['autodocs']
} satisfies Preview;
