import * as React from 'react';
import PropTypes from 'prop-types';

const SvgCrown = initialProps => {
    const props = Object.assign({}, initialProps);
    props.className =
    initialProps.className + ' moonstone-icon moonstone-icon_' + props.size;
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path
        d="M12.393 7.037c.42-.15.718-.534.718-.984C13.111 5.47 12.614 5 12 5s-1.111.471-1.111 1.053c0 .462.314.854.752.996-.598 1.526-1.875 4.267-3.345 4.267-1.478 0-3.346-1.663-4.26-2.575.118-.167.186-.367.186-.583 0-.581-.497-1.053-1.11-1.053C2.496 7.105 2 7.577 2 8.158S2.497 9.21 3.111 9.21c.044 0 .087-.003.129-.007.293 1.583.982 5.344.982 5.62a.32.32 0 00.238.328.388.388 0 00.133.023h14.814a.388.388 0 00.133-.023.32.32 0 00.238-.327c0-.277.69-4.038.982-5.621.042.004.085.007.129.007.614 0 1.111-.472 1.111-1.053s-.497-1.053-1.111-1.053-1.111.472-1.111 1.053c0 .243.087.466.232.645-.783.923-2.36 2.513-3.936 2.513-1.608 0-3.022-2.755-3.68-4.279zM4.593 16.228a.361.361 0 00-.37.35v1.405c0 .193.165.35.37.35h14.814c.205 0 .37-.157.37-.35v-1.404a.361.361 0 00-.37-.35H4.593z"
        fill="currentColor"
      />
        </svg>
    );
};

SvgCrown.defaultProps = {
    size: 'default',
    className: ''
};
SvgCrown.propTypes = {
    size: PropTypes.oneOf(['small', 'default', 'big']),
    className: PropTypes.string
};
export default SvgCrown;
