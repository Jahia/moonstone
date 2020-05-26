import * as React from "react";
import PropTypes from "prop-types";

const SvgHandleResize = (initialProps) => {
  const props = Object.assign({}, initialProps);
  props.className =
    initialProps.className + " moonstone-icon moonstone-icon_" + props.size;
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M9.75 18V6h1.5v12h-1.5zM14.25 6v12h-1.5V6h1.5z"
        fill="currentColor"
      />
    </svg>
  );
};

SvgHandleResize.defaultProps = {
  size: "default",
  className: "",
};
SvgHandleResize.propTypes = {
  size: PropTypes.oneOf(["small", "default", "big"]),
  className: PropTypes.string,
};
export default SvgHandleResize;
