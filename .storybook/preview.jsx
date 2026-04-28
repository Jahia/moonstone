import React from 'react';
import {addons} from 'storybook/preview-api';
import {UPDATE_GLOBALS, STORY_ARGS_UPDATED} from "storybook/internal/core-events";

// Copy imports from src/index.ts, in the same order
import '../src/globals/reset.module.scss';
import '../src/globals/_variables.scss';
import '../src/tokens/spacings/spacings.scss';
import '../src/tokens/colors/colors.scss';
import '../src/tokens/borders/borders.scss';
import '@fontsource-variable/nunito-sans';

let channel = addons.getChannel();
const storyListener = (args) => {
    if (typeof args.args.isReversed !== 'undefined') {
        let colorTheme = args.args.isReversed ? 'dark' : 'light';
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

export const decorators = story => story();

export const parameters = {
    layout: 'fullscreen',
    docs: {
        extractComponentDescription: (component, { notes }) => {
            if (notes) {
                return typeof notes === 'string' ? notes : notes.markdown || notes.text;
            }
            return null;
        },
    },
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
};

setupBackgroundListener();
export const tags = ['autodocs'];
