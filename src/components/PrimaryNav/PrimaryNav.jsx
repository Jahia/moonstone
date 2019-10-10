import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './PrimaryNav.scss';

export const PrimaryNav = ({isExpanded, headerLogo, children, env}) => {
    console.log({isExpanded, headerLogo, children, env});
    return (
        <div className={classnames(
            styles.primaryNav,
            {[styles.expanded]: isExpanded},
        )}
        >
            <ul>
                {children}
            </ul>
        </div>
    );
};

PrimaryNav.defaultProps = {
    isExpanded: false,
    headerLogo: '',
    children: null,
    env: ''
};

PrimaryNav.propTypes = {

    /**
     * Is navigation expanded
     */
    isExpanded: PropTypes.bool,

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
