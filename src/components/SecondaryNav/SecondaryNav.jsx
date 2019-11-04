import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'clsx';
import style from './SecondaryNav.scss';

export const SecondaryNav = ({children, resizeWidth}) => {
    return (
        <div style={{width: resizeWidth}} className={classnames(style.secondaryNav)}>
            {children}
        </div>
    );
};

SecondaryNav.defaultProps = {
    children: null,
    resizeWidth: 245
};

SecondaryNav.propTypes = {
    children: PropTypes.node,
    resizeWidth: PropTypes.number
};
