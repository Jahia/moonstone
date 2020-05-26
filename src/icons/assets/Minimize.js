import * as React from "react";
import PropTypes from "prop-types";

const SvgMinimize = (initialProps) => {
  const props = Object.assign({}, initialProps);
  props.className =
    initialProps.className + " moonstone-icon moonstone-icon_" + props.size;
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M19.41 10.59l-2.3-2.3L20 5.42 18.58 4l-2.87 2.89-2.3-2.3v6h6zM13.41 19.465l2.3-2.3 2.87 2.89 1.42-1.42-2.89-2.87 2.3-2.3h-6v6zM4.59 13.465l2.3 2.3L4 18.635l1.42 1.42 2.87-2.89 2.3 2.3v-6h-6zM10.59 4.59l-2.3 2.3L5.42 4 4 5.42l2.89 2.87-2.3 2.3h6v-6z"
        fill="currentColor"
      />
    </svg>
  );
};

SvgMinimize.defaultProps = {
  size: "default",
  className: "",
};
SvgMinimize.propTypes = {
  size: PropTypes.oneOf(["small", "default", "big"]),
  className: PropTypes.string,
};
export default SvgMinimize;
