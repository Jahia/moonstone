import * as React from "react";
import PropTypes from "prop-types";

const SvgPie = (initialProps) => {
  const props = Object.assign({}, initialProps);
  props.className =
    initialProps.className + " moonstone-icon moonstone-icon_" + props.size;
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M11 21a8 8 0 008-8h-8V5a8 8 0 100 16z" fill="currentColor" />
      <path d="M21 11a8 8 0 00-8-8v8h8z" fill="currentColor" />
    </svg>
  );
};

SvgPie.defaultProps = {
  size: "default",
  className: "",
};
SvgPie.propTypes = {
  size: PropTypes.oneOf(["small", "default", "big"]),
  className: PropTypes.string,
};
export default SvgPie;
