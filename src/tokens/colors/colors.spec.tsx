import { over, parse, ratio, TEXT, UI } from '~/__mocks__/contrast';

import css from './colors.scss?inline';

const tokens = Object.fromEntries(
    [...css.matchAll(/--moon-color-([\w-]+):\s*([^;]+);/g)].map(([, name, value]) => [name, value.trim()]),
);

const color = (name: string) => {
    if (!tokens[name]) {
        throw new Error(`Unknown token: --moon-color-${name}`);
    }

    return parse(tokens[name]);
};

// [case, foreground, background, threshold]
type Pair = [string, string, string, number];

const light: Pair[] = [
    ['Text', 'gray_dark', 'white', TEXT],
    ['Secondary text', 'gray', 'white', TEXT],
    ['Selector border', 'gray', 'white', UI],
    ['Accent text, Button ghost and outlined', 'accent', 'white', TEXT],
    ['Accent text, hover', 'accent_dark', 'white', TEXT],
    ['Danger text, Button ghost and outlined', 'danger', 'white', TEXT],
    ['Warning text, CardSelector', 'warning', 'white', TEXT],
    ['Success text', 'success', 'white', TEXT],
    ['Button default accent', 'white', 'accent', TEXT],
    ['Button default accent, hover', 'light', 'accent_dark', TEXT],
    ['Button default accent, active', 'white', 'accent_dark_contrast', TEXT],
    ['Button default danger', 'white', 'danger', TEXT],
    ['Button default danger, hover', 'white', 'danger_dark', TEXT],
    ['Light text on warning', 'white', 'warning', TEXT],
    ['Light text on success', 'white', 'success', TEXT],
];

// The reversed background of moonstone is gray_dark
const reversed: Pair[] = [
    ['Text', 'light', 'gray_dark', TEXT],
    ['Button ghost and outlined accent', 'accent_light', 'gray_dark', TEXT],
    ['Button outlined default, hover', 'accent_light', 'gray_dark', TEXT],
    ['Button ghost and outlined danger', 'danger_plain60', 'gray_dark', TEXT],
    ['Button ghost, hover', 'white', 'gray40', TEXT],
    ['Button ghost, active', 'white', 'gray_light40', TEXT],
    ['Button ghost accent, hover', 'white', 'accent40', TEXT],
    ['Button ghost accent, active', 'white', 'accent_dark', TEXT],
    ['Button ghost danger, hover', 'white', 'danger40', TEXT],
    ['Button ghost danger, active', 'white', 'danger', TEXT],
    ['Button outlined default, active', 'white', 'accent', TEXT],
    ['SecondaryNav toggle, hover', 'light', 'accent', TEXT],
    ['TreeView item', 'gray_light', 'gray_dark', TEXT],
];

describe.each([
    ['light', light, 'white'],
    ['reversed', reversed, 'gray_dark'],
])('Color tokens, %s', (_, pairs, page) => {
    it.each(pairs)('%s: %s on %s reaches %s:1', (_case, fg, bg, min) => {
        const background = over(color(bg), color(page));
        expect(ratio(over(color(fg), background), background)).toBeGreaterThanOrEqual(min);
    });
});
