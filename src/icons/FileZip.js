import * as React from 'react';
import PropTypes from 'prop-types';

const SvgFileZip = initialProps => {
    const props = Object.assign({}, initialProps);
    props.className =
    initialProps.className + ' moonstone-icon moonstone-icon_' + props.size;
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 2c-1.1 0-1.99.9-1.99 2l-.005 8H3a1 1 0 00-1 1v6a1 1 0 001 1h1c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13zM3 13h12v6H3v-6z"
        fill="currentColor"
      />
            <path
        d="M6.072 17.34H7.77V18H5.002v-.452l1.695-2.441H4.993v-.662h2.76v.44L6.073 17.34zM9.325 18H8.47v-3.555h.855V18zM11.027 16.794V18h-.857v-3.555h1.419c.272 0 .512.05.72.152.21.099.372.241.486.427.116.184.173.393.173.627 0 .347-.124.625-.373.833-.248.207-.588.31-1.02.31h-.548zm0-.662h.562c.166 0 .292-.041.378-.124a.46.46 0 00.132-.352.571.571 0 00-.134-.398.476.476 0 00-.366-.151h-.572v1.025z"
        fill="currentColor"
      />
        </svg>
    );
};

SvgFileZip.defaultProps = {
    size: 'default',
    className: ''
};
SvgFileZip.propTypes = {
    size: PropTypes.oneOf(['small', 'default', 'big']),
    className: PropTypes.string
};
export default SvgFileZip;
