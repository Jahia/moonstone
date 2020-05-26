import * as React from "react";
import PropTypes from "prop-types";

const SvgViewQuilt = (initialProps) => {
  const props = Object.assign({}, initialProps);
  props.className =
    initialProps.className + " moonstone-icon moonstone-icon_" + props.size;
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M10 19h5v-6h-5v6zm-6 0h5V6H4v13zm12 0h5v-6h-5v6zM10 6v6h11V6H10z"
        fill="currentColor"
      />
    </svg>
  );
};

SvgViewQuilt.defaultProps = {
  size: "default",
  className: "",
};
SvgViewQuilt.propTypes = {
  size: PropTypes.oneOf(["small", "default", "big"]),
  className: PropTypes.string,
};
export default SvgViewQuilt;
