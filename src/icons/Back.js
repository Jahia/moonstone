import * as React from "react";
import PropTypes from "prop-types";

const SvgBack = (initialProps) => {
  const props = Object.assign({}, initialProps);
  props.className =
    initialProps.className + " moonstone-icon moonstone-icon_" + props.size;
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 10.875H7.309l6.288-6.289L12 3l-9 9 9 9 1.586-1.586-6.277-6.289H21v-2.25z"
        fill="currentColor"
      />
    </svg>
  );
};

SvgBack.defaultProps = {
  size: "default",
  className: "",
};
SvgBack.propTypes = {
  size: PropTypes.oneOf(["small", "default", "big"]),
  className: PropTypes.string,
};
export default SvgBack;
