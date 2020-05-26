import * as React from "react";
import PropTypes from "prop-types";

const SvgFilter = (initialProps) => {
  const props = Object.assign({}, initialProps);
  props.className =
    initialProps.className + " moonstone-icon moonstone-icon_" + props.size;
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"
        fill="currentColor"
      />
    </svg>
  );
};

SvgFilter.defaultProps = {
  size: "default",
  className: "",
};
SvgFilter.propTypes = {
  size: PropTypes.oneOf(["small", "default", "big"]),
  className: PropTypes.string,
};
export default SvgFilter;
