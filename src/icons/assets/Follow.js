import * as React from "react";
import PropTypes from "prop-types";

const SvgFollow = (initialProps) => {
  const props = Object.assign({}, initialProps);
  props.className =
    initialProps.className + " moonstone-icon moonstone-icon_" + props.size;
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M14 9V5l7 7-7 7v-4.1c-5 0-8.5 1.6-11 5.1 1-5 4-10 11-11z"
        fill="currentColor"
      />
    </svg>
  );
};

SvgFollow.defaultProps = {
  size: "default",
  className: "",
};
SvgFollow.propTypes = {
  size: PropTypes.oneOf(["small", "default", "big"]),
  className: PropTypes.string,
};
export default SvgFollow;
