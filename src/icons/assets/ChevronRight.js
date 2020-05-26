import * as React from "react";
import PropTypes from "prop-types";

const SvgChevronRight = (initialProps) => {
  const props = Object.assign({}, initialProps);
  props.className =
    initialProps.className + " moonstone-icon moonstone-icon_" + props.size;
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
        fill="currentColor"
      />
    </svg>
  );
};

SvgChevronRight.defaultProps = {
  size: "default",
  className: "",
};
SvgChevronRight.propTypes = {
  size: PropTypes.oneOf(["small", "default", "big"]),
  className: PropTypes.string,
};
export default SvgChevronRight;
