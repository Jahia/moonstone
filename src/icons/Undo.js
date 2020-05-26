import * as React from "react";
import PropTypes from "prop-types";

const SvgUndo = (initialProps) => {
  const props = Object.assign({}, initialProps);
  props.className =
    initialProps.className + " moonstone-icon moonstone-icon_" + props.size;
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"
        fill="currentColor"
      />
    </svg>
  );
};

SvgUndo.defaultProps = {
  size: "default",
  className: "",
};
SvgUndo.propTypes = {
  size: PropTypes.oneOf(["small", "default", "big"]),
  className: PropTypes.string,
};
export default SvgUndo;
