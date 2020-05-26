import * as React from "react";
import PropTypes from "prop-types";

const SvgOpenInBrowser = (initialProps) => {
  const props = Object.assign({}, initialProps);
  props.className =
    initialProps.className + " moonstone-icon moonstone-icon_" + props.size;
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M19 4H5a2 2 0 00-2 2v12a2 2 0 002 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6a2 2 0 00-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"
        fill="currentColor"
      />
    </svg>
  );
};

SvgOpenInBrowser.defaultProps = {
  size: "default",
  className: "",
};
SvgOpenInBrowser.propTypes = {
  size: PropTypes.oneOf(["small", "default", "big"]),
  className: PropTypes.string,
};
export default SvgOpenInBrowser;
