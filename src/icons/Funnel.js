import * as React from "react";
import PropTypes from "prop-types";

const SvgFunnel = (initialProps) => {
  const props = Object.assign({}, initialProps);
  props.className =
    initialProps.className + " moonstone-icon moonstone-icon_" + props.size;
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M10.301 12.474L4.097 4.73C3.852 4.425 4.1 4 4.524 4h14.952c.425 0 .672.425.427.731l-6.204 7.743V18.2c0 .158-.09.305-.24.39l-2.353 1.336c-.348.198-.805-.024-.805-.39v-7.062z"
        fill="currentColor"
      />
    </svg>
  );
};

SvgFunnel.defaultProps = {
  size: "default",
  className: "",
};
SvgFunnel.propTypes = {
  size: PropTypes.oneOf(["small", "default", "big"]),
  className: PropTypes.string,
};
export default SvgFunnel;
