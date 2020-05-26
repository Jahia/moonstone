import * as React from "react";
import PropTypes from "prop-types";

const SvgPublish = (initialProps) => {
  const props = Object.assign({}, initialProps);
  props.className =
    initialProps.className + " moonstone-icon moonstone-icon_" + props.size;
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z" fill="currentColor" />
    </svg>
  );
};

SvgPublish.defaultProps = {
  size: "default",
  className: "",
};
SvgPublish.propTypes = {
  size: PropTypes.oneOf(["small", "default", "big"]),
  className: PropTypes.string,
};
export default SvgPublish;
