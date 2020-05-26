import * as React from "react";
import PropTypes from "prop-types";

const SvgViewComfy = (initialProps) => {
  const props = Object.assign({}, initialProps);
  props.className =
    initialProps.className + " moonstone-icon moonstone-icon_" + props.size;
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 9.714h3.714V6H3v3.714zm0 4.643h3.714v-3.714H3v3.714zm4.643 0h3.714v-3.714H7.643v3.714zm4.643 0H16v-3.714h-3.714v3.714zM7.643 9.714h3.714V6H7.643v3.714zM12.286 6v3.714H16V6h-3.714zm4.642 8.357h3.715v-3.714h-3.715v3.714zM3 19h3.714v-3.714H3V19zm4.643 0h3.714v-3.714H7.643V19zm4.643 0H16v-3.714h-3.714V19zm4.642 0h3.715v-3.714h-3.715V19zm0-13v3.714h3.715V6h-3.715z"
        fill="currentColor"
      />
    </svg>
  );
};

SvgViewComfy.defaultProps = {
  size: "default",
  className: "",
};
SvgViewComfy.propTypes = {
  size: PropTypes.oneOf(["small", "default", "big"]),
  className: PropTypes.string,
};
export default SvgViewComfy;
