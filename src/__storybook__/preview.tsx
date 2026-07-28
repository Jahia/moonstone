import {definePreview} from '@storybook/react-vite';
import addonA11y from '@storybook/addon-a11y';
import addonDocs from '@storybook/addon-docs';
import storybookAddonTagBadges from 'storybook-addon-tag-badges/preview';
import {definePreviewAddon} from 'storybook/internal/csf';
import {addons} from 'storybook/preview-api';
import {
    STORY_ARGS_UPDATED,
    UPDATE_GLOBALS
} from 'storybook/internal/core-events';

// Copy imports from src/index.ts, in the same order
import '../globals/reset.scss';
import '../globals/_variables.scss';
import '../tokens/spacings/spacings.scss';
import '../tokens/colors/colors.scss';
import '../tokens/borders/borders.scss';
import '@fontsource-variable/nunito-sans';

// Uncomment to use legacy css in storybook
// import '../../dist/legacy-global-bundle.css';

const channel = addons.getChannel();
const storyListener = (args: {args: {isReversed?: boolean}}) => {
    if (typeof args.args.isReversed !== 'undefined') {
        const colorTheme = args.args.isReversed ? 'dark' : 'light';
        channel.emit(UPDATE_GLOBALS, {
            initialGlobals: {
                theme: colorTheme,
                backgrounds:
                    colorTheme === 'dark' ?
                        {name: 'dark', value: '#293136'} :
                        {name: 'light', value: '#fdfdfd'}
            }
        });
    }
};

function setupBackgroundListener() {
    channel.removeListener(STORY_ARGS_UPDATED, storyListener);
    channel.addListener(STORY_ARGS_UPDATED, storyListener);
}

setupBackgroundListener();

const tagBadgesAddon = definePreviewAddon(storybookAddonTagBadges);
const legacyDocsParametersAddon = definePreviewAddon<{
    parameters: {
        docs?: {
            extractComponentDescription?:(
                component: unknown,
                context: {
                    notes?: string | {
                        markdown?: string;
                        text?: string;
                    };
                }
            ) => string | null | undefined;
                };
                };
                }>({});

const preview = definePreview({
    addons: [
        addonDocs(),
        addonA11y(),
        tagBadgesAddon,
        legacyDocsParametersAddon
    ],
    decorators: [story => story()],
    parameters: {
        layout: 'fullscreen',

        docs: {
            extractComponentDescription: (
                component: unknown,
                {notes}: {
                    notes?: string | {
                        markdown?: string;
                        text?: string;
                    };
                }
            ) => {
                if (notes) {
                    return typeof notes === 'string' ?
                        notes :
                        notes.markdown || notes.text;
                }

                return null;
            }
        },

        options: {
            storySort: {
                method: 'alphabetical'
            }
        },

        backgrounds: {
            options: {
                light: {name: 'light', value: '#fdfdfd'},
                dark: {name: 'dark', value: '#293136'}
            }
        },

        controls: {
            expanded: true,
            sort: 'requiredFirst'
        },

        a11y: {
            // 'todo' - show a11y violations in the test UI only
            // 'error' - fail CI on a11y violations
            // 'off' - skip a11y checks entirely
            test: 'todo'
        }
    },
    tags: ['autodocs']
});

export default preview;
