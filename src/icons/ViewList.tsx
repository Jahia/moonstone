import * as React from 'react';
import { SVGProps } from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: 'small' | 'default' | 'big';
  className?: string;
}

const SvgViewList = ({
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
      <path d="M4 14H8V10H4V14ZM4 19H8V15H4V19ZM4 9H8V5H4V9ZM9 14H21V10H9V14ZM9 19H21V15H9V19ZM9 5V9H21V5H9Z" />
    </svg>
  );
};

export default SvgViewList;
