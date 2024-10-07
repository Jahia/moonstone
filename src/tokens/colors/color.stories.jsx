import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
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
    'gray',
    'gray60',
    'gray40',
    'gray20',
    'gray_dark',
    'gray_dark60',
    'gray_dark40',
    'gray_dark20'
];

const paletteAccent = [
    'accent_dark_contrast',
    'accent_dark',
    'accent_dark20',
    'accent_dark40',
    'accent_dark60',
    'accent',
    'accent20',
    'accent40',
    'accent60',
    'accent_light',
    'accent_light20',
    'accent_light40',
    'accent_light60'
];

const paletteSupport = [
    'success',
    'success20',
    'success40',
    'success60',
    'warning',
    'warning20',
    'warning40',
    'warning60',
    'danger',
    'danger20',
    'danger40',
    'danger60',
    'danger_dark'
];

const paletteColors = ['purple', 'purple20', 'purple40', 'purple60'];

export const Color = ({color, name}) => {
    return (
        <div className="storyItem">
            <p>{name}</p>
            <div className={clsx('colorShape', [`color-${color}`])}/>
        </div>
    );
};

function displayColors(palette) {
    let colors = [];

    for (const [key, color] of palette.entries()) {
        colors.push(<Color key={key} color={color} name={`$color-${color}`}/>);
    }

    return colors;
}

export default {
    title: 'Tokens/Colors',
    excludeStories: ['Color']
};

export const Accent = () => (
    <section className="storyWrapper">{displayColors(paletteAccent)}</section>
);

export const Neutral = () => (
    <section className="storyWrapper">{displayColors(paletteNeutral)}</section>
);

export const Support = () => (
    <section className="storyWrapper">{displayColors(paletteSupport)}</section>
);

export const Palette = () => (
    <section className="storyWrapper">{displayColors(paletteColors)}</section>
);

Color.propTypes = {
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};
