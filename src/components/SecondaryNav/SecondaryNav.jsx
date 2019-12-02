import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'clsx';
import styles from './SecondaryNav.scss';

export const SecondaryNav = ({header, children}) => {
    return (
        <div className={classnames(styles.secondaryNav)}>
            <header className={classnames(styles.secondaryNav_header, 'flexRow_center', 'alignCenter')}>
                {header}
            </header>
            <div>
                {children}
            </div>
        </div>
    );
};

SecondaryNav.propTypes = {
    /**
     * Header of the secondary navigation
     */
    header: PropTypes.node.isRequired,

    /**
     * Content of the component
     */
    children: PropTypes.node.isRequired
};
