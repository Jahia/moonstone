import React from 'react';
import PropTypes from 'prop-types';

export const ImgWrapperSize = ['small', 'default', 'big'];

export const ImgWrapper = initialProps => {
    let {size, ...props} = initialProps;
    props.className = initialProps.className + ' moonstone-icon moonstone-icon_' + size;
    return (
        <img {...props}/>
    );
};

ImgWrapper.defaultProps = {
    size: 'default',
    className: ''
};

ImgWrapper.propTypes = {
    /**
     * Image URL
     */
    src: PropTypes.string.isRequired,

    /**
     * Image size
     */
    size: PropTypes.oneOf(ImgWrapperSize),

    /**
     * Extra CSS class
     */
    className: PropTypes.string
};
