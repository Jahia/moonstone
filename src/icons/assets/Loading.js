import * as React from "react";
import PropTypes from "prop-types";

const SvgLoading = (initialProps) => {
  const props = Object.assign({}, initialProps);
  props.className =
    initialProps.className + " moonstone-icon moonstone-icon_" + props.size;
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M17.645 6.35A7.958 7.958 0 0011.995 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08a5.99 5.99 0 01-5.65 4c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L12.995 11h7V4l-2.35 2.35z"
        fill="currentColor"
      />
    </svg>
  );
};

SvgLoading.defaultProps = {
  size: "default",
  className: "",
};
SvgLoading.propTypes = {
  size: PropTypes.oneOf(["small", "default", "big"]),
  className: PropTypes.string,
};
export default SvgLoading;
