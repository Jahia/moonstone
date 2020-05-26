import * as React from "react";
import PropTypes from "prop-types";

const SvgHeal = (initialProps) => {
  const props = Object.assign({}, initialProps);
  props.className =
    initialProps.className + " moonstone-icon moonstone-icon_" + props.size;
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M15.423 15.418h4.738c.464 0 .839-.374.839-.838V9.415a.838.838 0 00-.84-.84h-4.737V3.84a.843.843 0 00-.84-.839H9.417a.838.838 0 00-.84.839v4.737H3.84A.838.838 0 003 9.415v5.165c0 .464.375.838.84.838h4.737v4.737c0 .238.096.44.25.595a.862.862 0 00.596.25h5.166c.465 0 .84-.375.84-.839l-.006-4.743z"
        fill="currentColor"
      />
    </svg>
  );
};

SvgHeal.defaultProps = {
  size: "default",
  className: "",
};
SvgHeal.propTypes = {
  size: PropTypes.oneOf(["small", "default", "big"]),
  className: PropTypes.string,
};
export default SvgHeal;
