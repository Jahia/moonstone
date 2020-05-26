import * as React from "react";
import PropTypes from "prop-types";

const SvgTune = (initialProps) => {
  const props = Object.assign({}, initialProps);
  props.className =
    initialProps.className + " moonstone-icon moonstone-icon_" + props.size;
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 16.444v1.778h5.333v-1.778H4zM4 5.778v1.778h8.889V5.778H4zM12.889 20v-1.778H20v-1.778h-7.111v-1.777H11.11V20h1.778zM7.556 9.333v1.778H4v1.778h3.556v1.778h1.777V9.333H7.556zM20 12.89V11.11h-8.889v1.778H20zm-5.333-3.556h1.777V7.556H20V5.778h-3.556V4h-1.777v5.333z"
        fill="currentColor"
      />
    </svg>
  );
};

SvgTune.defaultProps = {
  size: "default",
  className: "",
};
SvgTune.propTypes = {
  size: PropTypes.oneOf(["small", "default", "big"]),
  className: PropTypes.string,
};
export default SvgTune;
