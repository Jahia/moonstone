import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './PrimaryNav.scss';

export const PrimaryNav = ({isExpanded, headerLogo, children, headerCaption}) => {
    console.log({isExpanded, headerLogo, children, headerCaption});
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
    headerCaption: '',
    children: null
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
     * Application's environment
     */
    headerCaption: PropTypes.string,

    /**
     * Items
     */
    children: PropTypes.any
};
