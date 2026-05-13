import {definePreview} from '@storybook/react-vite';
import addonDocs from '@storybook/addon-docs';
import addonA11y from '@storybook/addon-a11y';
import * as tagBadgesAddon from 'storybook-addon-tag-badges';
import {projectAnnotations} from './previewAnnotations';

import '../../.storybook/preview.scss';

// Copy imports from src/index.ts, in the same order
import '../globals/reset.module.scss';
import '../globals/_variables.scss';
import '../tokens/spacings/spacings.scss';
import '../tokens/colors/colors.scss';
import '../tokens/borders/borders.scss';
import '@fontsource-variable/nunito-sans';

// Uncomment to use legacy css in storybook
// import '../../dist/legacy-global-bundle.css';

export default definePreview({
    ...projectAnnotations,
    addons: [
        addonDocs(),
        addonA11y(),
        tagBadgesAddon.default()
    ]
});
