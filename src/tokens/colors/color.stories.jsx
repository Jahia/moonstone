import React from 'react';
import {storiesOf} from '@storybook/react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './colors.stories.module.scss';
import storyStyles from '~/__storybook__/storybook.module.scss';

let cx = classnames.bind(styles);

const paletteNeutral = ['light',
    'light60',
    'light40',
    'gray_light',
    'gray_light60',
    'gray_light40',
    'gray',
    'gray60',
    'gray40',
    'gray_dark',
    'gray_dark60',
    'gray_dark40'];
const paletteAccent = [
    'accent_dark_contrast',
    'accent_dark',
    'accent_dark40',
    'accent_dark60',
    'accent',
    'accent40',
    'accent60',
    'accent_light',
    'accent_light40',
    'accent_light60'
];
const paletteSupport = [
    'success',
    'success40',
    'success60',
    'warning',
    'warning40',
    'warning60',
    'danger',
    'danger40',
    'danger60',
    'danger_dark'
];

const paletteColors = [
    'purple',
    'purple40',
    'purple60'
];

export const Color = ({color, name}) => {
    return (
        <div className={classnames(storyStyles.storyItem)}>
            <p>{name}</p>
            <div className={classnames(styles.colorShape, cx([`color-${color}`]))}/>
        </div>
    );
};

function displayColors(palette) {
    let colors = [];

    for (const [key, color] of palette.entries()) {
        colors.push(
            <Color key={key} color={color} name={`$color-${color}`}/>
        );
    }

    return colors;
}

storiesOf('Tokens/Colors', module)
    .add('Accent', () => (
        <section className={classnames(storyStyles.storyWrapper)}>
            {displayColors(paletteAccent)}
        </section>
    ))
    .add('Neutral', () => (
        <section className={classnames(storyStyles.storyWrapper)}>
            {displayColors(paletteNeutral)}
        </section>
    ))
    .add('Support', () => (
        <section className={classnames(storyStyles.storyWrapper)}>
            {displayColors(paletteSupport)}
        </section>
    ))
    .add('Palette', () => (
        <section className={classnames(storyStyles.storyWrapper)}>
            {displayColors(paletteColors)}
        </section>
    ));

Color.propTypes = {
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};
