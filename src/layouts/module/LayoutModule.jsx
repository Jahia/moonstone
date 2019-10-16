import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import l from '../../styles/_layout.scss';

export const LayoutModule = ({navigation, content}) => {
    return (
        <>
            <div>
                {navigation}
            </div>
            <main className={classnames(l.flexFluid, l.flexRow)}>
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
