import React from 'react';
import PropTypes from 'prop-types';
import './Tab.scss';
import classnames from 'clsx';

export const Tab = ({children, className, ...props}) => {
    return (
        <div
            {...props}
            className={classnames(
                'moonstone-tab',
                'flexRow_center',
                'alignCenter',
                className
            )}
        >
            {children}
        </div>
    );
};

Tab.defaultProps = {
    className: ''
};

Tab.propTypes = {
    /**
     * Content of Tab component
     */
    children: PropTypes.node.isRequired,

    /**
     * Additional classname
     */
    className: PropTypes.string
};

Tab.displayName = 'Tab';
