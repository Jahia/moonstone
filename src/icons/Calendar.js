import * as React from "react";
import PropTypes from "prop-types";

const SvgCalendar = (initialProps) => {
  const props = Object.assign({}, initialProps);
  props.className =
    initialProps.className + " moonstone-icon moonstone-icon_" + props.size;
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"
        fill="currentColor"
      />
    </svg>
  );
};

SvgCalendar.defaultProps = {
  size: "default",
  className: "",
};
SvgCalendar.propTypes = {
  size: PropTypes.oneOf(["small", "default", "big"]),
  className: PropTypes.string,
};
export default SvgCalendar;
