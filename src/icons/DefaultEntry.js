import * as React from "react";
import PropTypes from "prop-types";

const SvgDefaultEntry = (initialProps) => {
  const props = Object.assign({}, initialProps);
  props.className =
    initialProps.className + " moonstone-icon moonstone-icon_" + props.size;
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={8} fill="currentColor" />
    </svg>
  );
};

SvgDefaultEntry.defaultProps = {
  size: "default",
  className: "",
};
SvgDefaultEntry.propTypes = {
  size: PropTypes.oneOf(["small", "default", "big"]),
  className: PropTypes.string,
};
export default SvgDefaultEntry;
