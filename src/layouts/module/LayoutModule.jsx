import React from 'react';
import classnames from 'clsx';
import PropTypes from 'prop-types';

export const LayoutModule = ({navigation, content, component}) => {
    return (
        <>
            <div className={classnames('flexCol')}>
                {navigation}
            </div>
            {
                React.createElement(
                    component,
                    {className: classnames('flexFluid', 'flexCol')},
                    content
                )
            }
        </>
    );
};

LayoutModule.defaultProps = {
    navigation: null,
    component: 'main',
    content: null
};

LayoutModule.propTypes = {
    /**
     * Slot for the module's navigation
     */
    navigation: PropTypes.node,

    /**
     * Slot for the module's content
     */
    content: PropTypes.node,

    /**
     * The HTML markup used for the content node
     */
    component: PropTypes.string
};

LayoutModule.displayName = 'LayoutModule';
