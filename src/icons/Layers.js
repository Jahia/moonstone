import * as React from "react";
import PropTypes from "prop-types";

const SvgLayers = (initialProps) => {
  const props = Object.assign({}, initialProps);
  props.className =
    initialProps.className + " moonstone-icon moonstone-icon_" + props.size;
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z"
        fill="currentColor"
      />
    </svg>
  );
};

SvgLayers.defaultProps = {
  size: "default",
  className: "",
};
SvgLayers.propTypes = {
  size: PropTypes.oneOf(["small", "default", "big"]),
  className: PropTypes.string,
};
export default SvgLayers;
