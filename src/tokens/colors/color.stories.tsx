import React from 'react';
import clsx from 'clsx';
import preview from '../../../.storybook/preview';
import './colors.stories.scss';
import '~/__storybook__/storybook.scss';

const paletteNeutral = [
    'light',
    'light60',
    'light40',
    'light20',
    'gray_light',
    'gray_light60',
    'gray_light40',
    'gray_light20',
    'gray_light_plain60',
    'gray_light_plain40',
    'gray_light_plain20',
    'gray',
    'gray60',
    'gray40',
    'gray20',
    'gray_plain60',
    'gray_plain40',
    'gray_plain20',
    'gray_dark',
    'gray_dark60',
    'gray_dark40',
    'gray_dark20',
    'gray_dark_plain60',
    'gray_dark_plain40',
    'gray_dark_plain20'
];

const paletteAccent = [
    'accent_dark_contrast',
    'accent_dark_contrast20',
    'accent_dark_contrast40',
    'accent_dark_contrast60',
    'accent_dark_contrast_plain20',
    'accent_dark_contrast_plain40',
    'accent_dark_contrast_plain60',
    'accent_dark',
    'accent_dark20',
    'accent_dark40',
    'accent_dark60',
    'accent_dark_plain20',
    'accent_dark_plain40',
    'accent_dark_plain60',
    'accent',
    'accent20',
    'accent40',
    'accent60',
    'accent_plain20',
    'accent_plain40',
    'accent_plain60',
    'accent_light',
    'accent_light20',
    'accent_light40',
    'accent_light60',
    'accent_light_plain20',
    'accent_light_plain40',
    'accent_light_plain60'
];

const paletteSupport = [
    'success',
    'success20',
    'success40',
    'success60',
    'success_plain20',
    'success_plain40',
    'success_plain60',
    'success_dark',
    'warning',
    'warning20',
    'warning40',
    'warning60',
    'warning_plain20',
    'warning_plain40',
    'warning_plain60',
    'warning_dark',
    'danger',
    'danger20',
    'danger40',
    'danger60',
    'danger_plain20',
    'danger_plain40',
    'danger_plain60',
    'danger_dark'
];

const paletteColors = [
    'purple',
    'purple20',
    'purple40',
    'purple60',
    'purple_plain20',
    'purple_plain40',
    'purple_plain60',
    'purple_dark'
];

type Palettes = typeof paletteAccent | typeof paletteColors | typeof paletteNeutral | typeof paletteSupport;
type ColorProps = {
    readonly color: string,
    readonly name: string
};

export const Color: React.FC<ColorProps> = ({color, name}) => {
    return (
        <div className="storyItem">
            <p>{name}</p>
            <div className={clsx('colorShape', [`color-${color}`])}/>
        </div>
    );
};

function displayColors(palette: Palettes) {
    const colors = [];

    for (const [key, color] of palette.entries()) {
        colors.push(<Color key={key} color={color} name={`$color-${color}`}/>);
    }

    return colors;
}

const meta = preview.meta({
    title: 'Tokens/Colors',
    excludeStories: ['Color']
});

export const Accent = meta.story({
    render: () => (
        <section className="storyWrapper">{displayColors(paletteAccent)}</section>
    )
});

export const Neutral = meta.story({
    render: () => (
        <section className="storyWrapper">{displayColors(paletteNeutral)}</section>
    )
});

export const Support = meta.story({
    render: () => (
        <section className="storyWrapper">{displayColors(paletteSupport)}</section>
    )
});

export const Palette = meta.story({
    render: () => (
        <section className="storyWrapper">{displayColors(paletteColors)}</section>
    )
});
