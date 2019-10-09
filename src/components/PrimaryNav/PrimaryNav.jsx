import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './PrimaryNav.scss';

export const PrimaryNav = ({expanded, headerLogo, children, env}) => {
    console.log({expanded, headerLogo, children, env});
    return (
        <div className={classnames(
            styles.primaryNav,
            {[styles.expanded]: expanded},
        )}
        >
            <ul>
                {children}
            </ul>
        </div>
    );
};

PrimaryNav.defaultProps = {
    expanded: false,
    headerLogo: '',
    children: null,
    env: ''
};

PrimaryNav.propTypes = {

    /**
     * Is navigation expanded
     */
    expanded: PropTypes.bool,

    /**
     * Image of logo application
     */
    headerLogo: PropTypes.any,

    /**
     * Items
     */
    children: PropTypes.any,

    /**
     * Application's environment
     */
    env: PropTypes.string

};
