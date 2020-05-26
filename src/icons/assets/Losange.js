import * as React from "react";
import PropTypes from "prop-types";

const SvgLosange = (initialProps) => {
  const props = Object.assign({}, initialProps);
  props.className =
    initialProps.className + " moonstone-icon moonstone-icon_" + props.size;
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path fill="currentColor" d="M12 2l9.9 9.9-9.9 9.899-9.9-9.9z" />
    </svg>
  );
};

SvgLosange.defaultProps = {
  size: "default",
  className: "",
};
SvgLosange.propTypes = {
  size: PropTypes.oneOf(["small", "default", "big"]),
  className: PropTypes.string,
};
export default SvgLosange;
