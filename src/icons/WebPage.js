import * as React from "react";
import PropTypes from "prop-types";

const SvgWebPage = (initialProps) => {
  const props = Object.assign({}, initialProps);
  props.className =
    initialProps.className + " moonstone-icon moonstone-icon_" + props.size;
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M19.2 4H4.8c-.99 0-1.791.9-1.791 2L3 18c0 1.1.81 2 1.8 2h14.4c.99 0 1.8-.9 1.8-2V6c0-1.1-.81-2-1.8-2zM4.8 9h9.45v3.5H4.8V9zm0 5.5h9.45V18H5.7c-.495 0-.9-.45-.9-1v-2.5zM18.3 18h-2.25V9h3.15v8c0 .55-.405 1-.9 1z"
        fill="currentColor"
      />
    </svg>
  );
};

SvgWebPage.defaultProps = {
  size: "default",
  className: "",
};
SvgWebPage.propTypes = {
  size: PropTypes.oneOf(["small", "default", "big"]),
  className: PropTypes.string,
};
export default SvgWebPage;
