import * as React from "react";
import PropTypes from "prop-types";

const SvgCollectionsBookmark = (initialProps) => {
  const props = Object.assign({}, initialProps);
  props.className =
    initialProps.className + " moonstone-icon moonstone-icon_" + props.size;
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 2h12c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2zm9.5 8.5L20 12V4h-5v8l2.5-1.5z"
        fill="currentColor"
      />
      <path d="M2 6h2v14h14v2H4c-1.1 0-2-.9-2-2V6z" fill="currentColor" />
    </svg>
  );
};

SvgCollectionsBookmark.defaultProps = {
  size: "default",
  className: "",
};
SvgCollectionsBookmark.propTypes = {
  size: PropTypes.oneOf(["small", "default", "big"]),
  className: PropTypes.string,
};
export default SvgCollectionsBookmark;
