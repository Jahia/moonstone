import * as React from "react";
import PropTypes from "prop-types";

const SvgArrowLeft = (initialProps) => {
  const props = Object.assign({}, initialProps);
  props.className =
    initialProps.className + " moonstone-icon moonstone-icon_" + props.size;
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21v-2z"
        fill="currentColor"
      />
    </svg>
  );
};

SvgArrowLeft.defaultProps = {
  size: "default",
  className: "",
};
SvgArrowLeft.propTypes = {
  size: PropTypes.oneOf(["small", "default", "big"]),
  className: PropTypes.string,
};
export default SvgArrowLeft;
