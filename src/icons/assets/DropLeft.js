import * as React from "react";
import PropTypes from "prop-types";

const SvgDropLeft = (initialProps) => {
  const props = Object.assign({}, initialProps);
  props.className =
    initialProps.className + " moonstone-icon moonstone-icon_" + props.size;
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M14 7l-5 5 5 5V7z" fill="currentColor" />
    </svg>
  );
};

SvgDropLeft.defaultProps = {
  size: "default",
  className: "",
};
SvgDropLeft.propTypes = {
  size: PropTypes.oneOf(["small", "default", "big"]),
  className: PropTypes.string,
};
export default SvgDropLeft;
