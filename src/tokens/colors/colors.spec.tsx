import css from './colors.scss?inline';

// WCAG 1.4.3 (text) and 1.4.11 (component boundary)
const TEXT = 4.5;
const UI = 3;

const tokens = Object.fromEntries(
    [...css.matchAll(/--moon-color-([\w-]+):\s*([^;]+);/g)].map(([, name, value]) => [name, value.trim()]),
);

type Rgba = [number, number, number, number];

const parse = (value: string): Rgba => {
    const hex = /^#([\da-f]{3}|[\da-f]{6})$/i.exec(value)?.[1];
    if (hex) {
        const full = hex.length === 3 ? hex.split('').map(c => c + c).join('') : hex;
        return [0, 2, 4].map(i => Number.parseInt(full.slice(i, i + 2), 16)).concat(1) as Rgba;
    }

    const rgba = /^rgba?\(([^)]+)\)$/.exec(value)?.[1];
    if (rgba) {
        const [r, g, b, a = 1] = rgba.split(',').map(Number);
        return [r, g, b, a];
    }

    throw new Error(`Unsupported color: ${value}`);
};

const color = (name: string) => {
    if (!tokens[name]) {
        throw new Error(`Unknown token: --moon-color-${name}`);
    }

    return parse(tokens[name]);
};

// A translucent token is drawn over the page background
const over = ([r, g, b, a]: Rgba, [br, bg, bb]: Rgba): Rgba => [
    (a * r) + ((1 - a) * br),
    (a * g) + ((1 - a) * bg),
    (a * b) + ((1 - a) * bb),
    1,
];

const luminance = ([r, g, b]: Rgba) => {
    const [lr, lg, lb] = [r, g, b].map((v) => {
        const c = v / 255;
        return c <= 0.040_45 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
    });
    return (0.2126 * lr) + (0.7152 * lg) + (0.0722 * lb);
};

const ratio = (a: Rgba, b: Rgba) => {
    const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
    return (hi + 0.05) / (lo + 0.05);
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
