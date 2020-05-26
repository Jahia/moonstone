import * as React from "react";
import PropTypes from "prop-types";

const SvgBookmark = (initialProps) => {
  const props = Object.assign({}, initialProps);
  props.className =
    initialProps.className + " moonstone-icon moonstone-icon_" + props.size;
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
        fill="currentColor"
      />
    </svg>
  );
};

SvgBookmark.defaultProps = {
  size: "default",
  className: "",
};
SvgBookmark.propTypes = {
  size: PropTypes.oneOf(["small", "default", "big"]),
  className: PropTypes.string,
};
export default SvgBookmark;
