import * as React from "react";
import PropTypes from "prop-types";

const SvgArrowDropUp = (initialProps) => {
  const props = Object.assign({}, initialProps);
  props.className =
    initialProps.className + " moonstone-icon moonstone-icon_" + props.size;
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M7 14l5-5 5 5H7z" fill="currentColor" />
    </svg>
  );
};

SvgArrowDropUp.defaultProps = {
  size: "default",
  className: "",
};
SvgArrowDropUp.propTypes = {
  size: PropTypes.oneOf(["small", "default", "big"]),
  className: PropTypes.string,
};
export default SvgArrowDropUp;
