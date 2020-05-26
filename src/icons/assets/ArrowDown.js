import * as React from "react";
import PropTypes from "prop-types";

const SvgArrowDown = (initialProps) => {
  const props = Object.assign({}, initialProps);
  props.className =
    initialProps.className + " moonstone-icon moonstone-icon_" + props.size;
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M11 3v14.17l-3.59-3.58L6 15l6 6 6-6-1.41-1.41L13 17.17V3h-2z"
        fill="currentColor"
      />
    </svg>
  );
};

SvgArrowDown.defaultProps = {
  size: "default",
  className: "",
};
SvgArrowDown.propTypes = {
  size: PropTypes.oneOf(["small", "default", "big"]),
  className: PropTypes.string,
};
export default SvgArrowDown;
