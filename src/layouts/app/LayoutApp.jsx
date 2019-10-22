import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import style from './LayoutApp.scss';
import l from '../../styles/_layout.scss';

export const LayoutApp = ({navigation, content}) => {
    return (
        <div className={classnames(style.layoutApp, l.flexRow_center)}>
            <div className={classnames(style.slotNavigation)}>
                {navigation}
            </div>
            <div className={classnames(l.flexFluid, l.flexRow)}>
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
