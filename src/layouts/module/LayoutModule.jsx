import React from 'react';
import classnames from 'clsx';
import PropTypes from 'prop-types';

export const LayoutModule = ({navigation, content}) => {
    return (
        <>
            <div className={classnames('flexCol')}>
                {navigation}
            </div>
            <main className={classnames('flexFluid', 'flexCol')}>
                {content}
            </main>
        </>
    );
};

LayoutModule.defaultProps = {
    navigation: null,
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
    content: PropTypes.node
};
