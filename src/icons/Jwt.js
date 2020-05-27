import * as React from 'react';
import PropTypes from 'prop-types';

const SvgJwt = initialProps => {
    const props = Object.assign({}, initialProps);
    props.className =
    initialProps.className + ' moonstone-icon moonstone-icon_' + props.size;
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path
        d="M13.353 7.842V3h-2.706v4.842L12 9.696l1.353-1.854v2.304l2.182-.72 2.868-3.906-2.2-1.602-2.85 3.924zM10.647 21v-4.842L12 14.304l1.353 1.854v-2.304l2.182.72 2.868 3.906-2.2 1.602-2.85-3.924V21h-2.706z"
        fill="currentColor"
      />
            <path
        d="M7.798 3.918l2.85 3.924v2.304l-2.183-.72 1.353 1.872-2.2.702L3 10.506l.848-2.574 4.617 1.494L5.597 5.52l2.2-1.602zM3 13.494L7.617 12l2.2.702-1.352 1.872 2.182-.72v2.304l-2.85 3.924-2.2-1.602 2.868-3.906-4.617 1.494L3 13.494zM15.535 14.574l-1.353-1.872 2.2-.702L21 13.494l-.848 2.574-4.617-1.494zM16.383 12l-2.2-.702 1.352-1.872 4.617-1.494.848 2.574L16.383 12z"
        fill="currentColor"
      />
        </svg>
    );
};

SvgJwt.defaultProps = {
    size: 'default',
    className: ''
};
SvgJwt.propTypes = {
    size: PropTypes.oneOf(['small', 'default', 'big']),
    className: PropTypes.string
};
export default SvgJwt;
