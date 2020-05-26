import * as React from "react";
import PropTypes from "prop-types";

const SvgChevronLeft = (initialProps) => {
  const props = Object.assign({}, initialProps);
  props.className =
    initialProps.className + " moonstone-icon moonstone-icon_" + props.size;
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"
        fill="currentColor"
      />
    </svg>
  );
};

SvgChevronLeft.defaultProps = {
  size: "default",
  className: "",
};
SvgChevronLeft.propTypes = {
  size: PropTypes.oneOf(["small", "default", "big"]),
  className: PropTypes.string,
};
export default SvgChevronLeft;
