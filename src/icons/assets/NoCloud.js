import * as React from "react";
import PropTypes from "prop-types";

const SvgNoCloud = (initialProps) => {
  const props = Object.assign({}, initialProps);
  props.className =
    initialProps.className + " moonstone-icon moonstone-icon_" + props.size;
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <g clipPath="url(#NoCloud_svg__clip0)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.35 10.04A7.49 7.49 0 0012 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46a5.497 5.497 0 018.05 4.87v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4 3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="NoCloud_svg__clip0">
          <path d="M0 0h24v24H0V0z" fill="#fff" />
        </clipPath>
      </defs>
    </svg>
  );
};

SvgNoCloud.defaultProps = {
  size: "default",
  className: "",
};
SvgNoCloud.propTypes = {
  size: PropTypes.oneOf(["small", "default", "big"]),
  className: PropTypes.string,
};
export default SvgNoCloud;
