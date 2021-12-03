import * as React from 'react';
import { SVGProps } from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: 'small' | 'default' | 'big';
  className?: string;
}

const SvgText = ({
  size = 'default',
  className = '',
  ...otherProps
}: IconProps) => {
  const props = Object.assign(
    {},
    {
      size,
      className,
      ...otherProps
    }
  );
  props.className = className + ' moonstone-icon moonstone-icon_' + size;
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M5 17V19H19V17H5ZM9.5 12.8H14.5L15.4 15H17.5L12.75 4H11.25L6.5 15H8.6L9.5 12.8ZM12 5.98L13.87 11H10.13L12 5.98Z" />
    </svg>
  );
};

export default SvgText;
