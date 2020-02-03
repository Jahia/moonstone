import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'clsx';
import styles from './Menu.scss';

export const Menu = ({children, isDisplay, maxWidth, position, className}) => {
    if (isDisplay) {
        return (
            <menu style={{maxWidth: maxWidth, ...position}} className={classnames(styles.menu, className)}>
                {children}
            </menu>
        );
    }

    return null;
};

Menu.defaultProps = {
    maxWidth: 'fit-content',
    position: {top: '0', left: '0'}
};

Menu.propTypes = {
    /**
     * Max-width available
     */
    maxWidth: PropTypes.string,

    /**
     * Content of the dropdown
     */
    children: PropTypes.node.isRequired,

    /**
     * Menu is display
     */
    isDisplay: PropTypes.bool.isRequired,

    /**
     * Coordinate to position the menu
     */
    position: PropTypes.shape({
        top: PropTypes.string,
        right: PropTypes.string,
        bottom: PropTypes.string,
        left: PropTypes.string
    }),

    /**
     * Additional classname
     */
    className: PropTypes.string
};
