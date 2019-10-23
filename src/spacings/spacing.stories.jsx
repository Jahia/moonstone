import React from 'react';
import {storiesOf} from '@storybook/react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import styles from './spacings.scss';
import storyStyles from '~/styles/storybook/styles.scss';

let cx = classnames.bind(styles);

export const Spacing = ({name}) => {
    return (
        <div className={classnames(storyStyles.storyItem)}>
            <p>{name}</p>
            <div className={classnames(cx([`spacing-${name}`]))}/>
        </div>
    );
};

storiesOf('Tokens|Spacings', module).add('Default', () => (
    <section className={classnames(storyStyles.storyWrapper)}>
        <Spacing name="nano"/>
        <Spacing name="small"/>
        <Spacing name="medium"/>
        <Spacing name="large"/>
        <Spacing name="big"/>
        <Spacing name="huge"/>
    </section>
));

Spacing.propTypes = {
    name: PropTypes.string.isRequired
};
