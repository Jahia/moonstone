import * as React from "react";
import PropTypes from "prop-types";

const SvgSiteSettingsPublication = (initialProps) => {
  const props = Object.assign({}, initialProps);
  props.className =
    initialProps.className + " moonstone-icon moonstone-icon_" + props.size;
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M6 8.385h3V13h5V8.385h3L11.5 3 6 8.385zM9 14h1v3H9v-3zM11 14h1v5h-1v-5zM13 14h1v7h-1v-7z"
        fill="currentColor"
      />
    </svg>
  );
};

SvgSiteSettingsPublication.defaultProps = {
  size: "default",
  className: "",
};
SvgSiteSettingsPublication.propTypes = {
  size: PropTypes.oneOf(["small", "default", "big"]),
  className: PropTypes.string,
};
export default SvgSiteSettingsPublication;
