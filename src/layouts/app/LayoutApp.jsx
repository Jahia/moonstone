import React from 'react';
import classnames from 'clsx';
import PropTypes from 'prop-types';

import style from './LayoutApp.scss';

export const LayoutApp = ({navigation, content}) => {
    return (
        <div className={classnames(style.layoutApp, 'flexRow_center', 'flexRow')}>
            <div className={classnames(style.slotNavigation)}>
                {navigation}
            </div>
            <div className={classnames('flexFluid', 'flexRow')}>
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
