import * as React from "react";
import PropTypes from "prop-types";

const SvgExplore = (initialProps) => {
  const props = Object.assign({}, initialProps);
  props.className =
    initialProps.className + " moonstone-icon moonstone-icon_" + props.size;
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 10.9c-.61 0-1.1.49-1.1 1.1 0 .61.49 1.1 1.1 1.1.61 0 1.1-.49 1.1-1.1 0-.61-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z"
        fill="currentColor"
      />
    </svg>
  );
};

SvgExplore.defaultProps = {
  size: "default",
  className: "",
};
SvgExplore.propTypes = {
  size: PropTypes.oneOf(["small", "default", "big"]),
  className: PropTypes.string,
};
export default SvgExplore;
