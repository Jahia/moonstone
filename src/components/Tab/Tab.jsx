import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tab.scss';
import classnames from 'clsx';

export const Tab = ({children}) => {
    return (
        <div
            className={classnames(
                styles.tab,
                'flexRow_center',
                'alignCenter'
            )}
        >
            {children}
        </div>
    );
};

Tab.propTypes = {
    /**
     * Content of Tab component
     */
    children: PropTypes.node.isRequired
};

Tab.displayName = 'Tab';
