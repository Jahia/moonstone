import React from 'react';
import {addDecorator} from '@storybook/react';
import {GlobalStyle} from '../src';
import { addons } from "@storybook/addons";
import { UPDATE_GLOBALS, STORY_ARGS_UPDATED } from "@storybook/core-events";

let channel = addons.getChannel();
const storyListener = (args) => {
    if (typeof args.args.isReversed !== 'undefined') {
        let colorTheme = args.args.isReversed ? 'dark' : 'light';
        channel.emit(UPDATE_GLOBALS, {
            globals: {
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


addDecorator(story => {
    return <>
        <GlobalStyle/>
        {story()}
    </>
});

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
        values: [
            { name: "light", value: "#fdfdfd" },
            { name: "dark", value: "#293136" }
        ]
    },
    controls: {
        expanded: true,
        sort: 'requiredFirst'
    },
};

setupBackgroundListener();
