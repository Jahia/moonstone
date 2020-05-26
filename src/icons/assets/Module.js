import * as React from "react";
import PropTypes from "prop-types";

const SvgModule = (initialProps) => {
  const props = Object.assign({}, initialProps);
  props.className =
    initialProps.className + " moonstone-icon moonstone-icon_" + props.size;
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M4 9.903c0-.566.637-.908 1.12-.6l5.947 3.799c.206.131.33.357.33.6v6.582c0 .567-.637.908-1.12.6l-5.946-3.798a.712.712 0 01-.331-.6V9.903zM12.602 20.284c0 .567.638.908 1.12.6l5.947-3.798a.713.713 0 00.331-.6V9.903c0-.566-.637-.908-1.12-.6l-5.947 3.799a.712.712 0 00-.33.6v6.582zM11.491 3.135a.912.912 0 01.957 0l6.119 3.921c.407.261.407.773-.001 1.034l-6.12 3.908a.912.912 0 01-.954 0L5.373 8.09c-.408-.26-.408-.773 0-1.034l6.118-3.92z"
        fill="currentColor"
      />
    </svg>
  );
};

SvgModule.defaultProps = {
  size: "default",
  className: "",
};
SvgModule.propTypes = {
  size: PropTypes.oneOf(["small", "default", "big"]),
  className: PropTypes.string,
};
export default SvgModule;
