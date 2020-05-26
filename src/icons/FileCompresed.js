import * as React from "react";
import PropTypes from "prop-types";

const SvgFileCompresed = (initialProps) => {
  const props = Object.assign({}, initialProps);
  props.className =
    initialProps.className + " moonstone-icon moonstone-icon_" + props.size;
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.01 4c0-1.1.89-2 1.99-2v2h2v2H6v2h2v2H6v2h2v2H6v5h4v-7H8v-2h2V8H8V6h2V4H8V2h6l6 6v12c0 1.1-.9 2-2 2H5.99C4.89 22 4 21.1 4 20l.01-16zM13 3.5V9h5.5L13 3.5z"
        fill="currentColor"
      />
      <path d="M7 17v1h2v-1H7z" fill="currentColor" />
    </svg>
  );
};

SvgFileCompresed.defaultProps = {
  size: "default",
  className: "",
};
SvgFileCompresed.propTypes = {
  size: PropTypes.oneOf(["small", "default", "big"]),
  className: PropTypes.string,
};
export default SvgFileCompresed;
