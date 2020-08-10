import React from 'react';
import classnames from 'clsx';
import PropTypes from 'prop-types';

import './LayoutApp.scss';

export const LayoutApp = ({navigation, content}) => {
    return (
        <div className={classnames('moonstone-layoutApp', 'flexRow_center', 'flexRow_nowrap')}>
            <div className={classnames('moonstone-slotNavigation')}>
                {navigation}
            </div>
            <div className={classnames('flexFluid', 'flexRow_nowrap')}>
                {content}
            </div>
        </div>
    );
};

LayoutApp.defaultProps = {
    navigation: null,
    content: null
};

LayoutApp.propTypes = {
    /**
     * Slot for the application's navigation
     */
    navigation: PropTypes.node,

    /**
     * Slot for the application's content
     */
    content: PropTypes.node
};

LayoutApp.displayName = 'LayoutApp';
