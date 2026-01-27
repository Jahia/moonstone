import { definePreview } from '@storybook/react-vite';
import addonA11y from '@storybook/addon-a11y';
import addonDocs from '@storybook/addon-docs';
import { GlobalStyle } from '../src';
import { addons } from 'storybook/preview-api';
import { UPDATE_GLOBALS, STORY_ARGS_UPDATED } from "storybook/internal/core-events";

const channel = addons.getChannel();

const storyListener = (args: { args: { isReversed?: boolean } }) => {
    if (typeof args.args.isReversed !== 'undefined') {
        const colorTheme = args.args.isReversed ? 'dark' : 'light';
        channel.emit(UPDATE_GLOBALS, {
            initialGlobals: {
                theme: colorTheme,
                backgrounds: colorTheme === "dark" ? { name: "dark", value: "#293136" } : { name: "light", value: "#fdfdfd" }
            }
        });
    }
};

function setupBackgroundListener() {
    channel.removeListener(STORY_ARGS_UPDATED, storyListener);
    channel.addListener(STORY_ARGS_UPDATED, storyListener);
}

setupBackgroundListener();

export default definePreview({
    addons: [addonDocs(), addonA11y()],
    decorators: [
        (story) => (
            <>
                <GlobalStyle />
                {story()}
            </>
        )
    ],
    parameters: {
        layout: 'fullscreen',
        options: {
            storySort: {
                method: 'alphabetical'
            }
        },
        backgrounds: {
            options: {
                light: { name: "light", value: "#fdfdfd" },
                dark: { name: "dark", value: "#293136" }
            }
        },
        controls: {
            expanded: true,
            sort: 'requiredFirst'
        },
        // type-safe!
        a11y: {
            options: { xpath: true },
        },
    },
    tags: ['autodocs'],
});
