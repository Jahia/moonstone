import * as React from "react";
import PropTypes from "prop-types";

const SvgSwapHoriz = (initialProps) => {
  const props = Object.assign({}, initialProps);
  props.className =
    initialProps.className + " moonstone-icon moonstone-icon_" + props.size;
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"
        fill="currentColor"
      />
    </svg>
  );
};

SvgSwapHoriz.defaultProps = {
  size: "default",
  className: "",
};
SvgSwapHoriz.propTypes = {
  size: PropTypes.oneOf(["small", "default", "big"]),
  className: PropTypes.string,
};
export default SvgSwapHoriz;
