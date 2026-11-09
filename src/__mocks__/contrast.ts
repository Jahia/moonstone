// WCAG 1.4.3 (text) and 1.4.11 (component boundary)
export const TEXT = 4.5;
export const UI = 3;

export type Rgba = [number, number, number, number];

export const parse = (value: string): Rgba => {
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

// A translucent token is drawn over the page background
export const over = ([r, g, b, a]: Rgba, [br, bg, bb]: Rgba): Rgba => [
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

export const ratio = (a: Rgba, b: Rgba) => {
    const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
    return (hi + 0.05) / (lo + 0.05);
};
