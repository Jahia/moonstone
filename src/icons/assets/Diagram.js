import * as React from "react";
import PropTypes from "prop-types";

const SvgDiagram = (initialProps) => {
  const props = Object.assign({}, initialProps);
  props.className =
    initialProps.className + " moonstone-icon moonstone-icon_" + props.size;
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3h7z"
        fill="currentColor"
      />
    </svg>
  );
};

SvgDiagram.defaultProps = {
  size: "default",
  className: "",
};
SvgDiagram.propTypes = {
  size: PropTypes.oneOf(["small", "default", "big"]),
  className: PropTypes.string,
};
export default SvgDiagram;
