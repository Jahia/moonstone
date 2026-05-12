import { definePreview } from '@storybook/react-vite';
import addonDocs from '@storybook/addon-docs';
import addonA11y from '@storybook/addon-a11y';
import * as tagBadgesAddon from 'storybook-addon-tag-badges';
import { projectAnnotations } from '../src/__storybook__/previewAnnotations';

import './preview.scss';

// Copy imports from src/index.ts, in the same order
import '../src/globals/reset.module.scss';
import '../src/globals/_variables.scss';
import '../src/tokens/spacings/spacings.scss';
import '../src/tokens/colors/colors.scss';
import '../src/tokens/borders/borders.scss';
import '@fontsource-variable/nunito-sans';

// Uncomment to use legacy css in storybook
// import '../dist/legacy-global-bundle.css';

export default definePreview({
    ...projectAnnotations,
    addons: [
        addonDocs(),
        addonA11y(),
        tagBadgesAddon.default()
    ]
});
