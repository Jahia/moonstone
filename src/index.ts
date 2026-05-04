/**
 * This file is the entrypoint to build Moonstone, it is in charge of two things:
 * - Expose JS and CSS to consumers of the library
 * - Gather resources to be used during the build (e.g. fonts)
 */

// Gather resources at build time: {
// It is **very** important that this comes first in the module graph, so that it appears first
// in the compiled CSS output, and thus will be overridden by any styles that come after it
import './globals/reset.module.scss';

// Prefixed CSS variables
import './globals/_variables.scss';
import './tokens/spacings/spacings.scss';
import './tokens/colors/colors.scss';
import './tokens/borders/borders.scss';

import '@fontsource-variable/nunito-sans'; // Embed Nunito Sans font
// }

// Expose the following resources to consumers: {
import './legacy-global-bundle.css'; // Global styles for legacy HTML/CSS usage

export * from './components';
export * from './layouts';
export * from './icons';
// }
