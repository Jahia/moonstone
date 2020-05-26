import * as React from "react";
import PropTypes from "prop-types";

const SvgChevronUp = (initialProps) => {
  const props = Object.assign({}, initialProps);
  props.className =
    initialProps.className + " moonstone-icon moonstone-icon_" + props.size;
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"
        fill="currentColor"
      />
    </svg>
  );
};

SvgChevronUp.defaultProps = {
  size: "default",
  className: "",
};
SvgChevronUp.propTypes = {
  size: PropTypes.oneOf(["small", "default", "big"]),
  className: PropTypes.string,
};
export default SvgChevronUp;
