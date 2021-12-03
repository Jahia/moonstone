import * as React from 'react';
import { SVGProps } from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: 'small' | 'default' | 'big';
  className?: string;
}

const SvgFileCompresed = ({
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.01 4C4.01 2.9 4.9 2 6 2V4H8V6H6V8H8V10H6V12H8V14H6V19H10V12H8V10H10V8H8V6H10V4H8V2H14L20 8V20C20 21.1 19.1 22 18 22H5.99C4.89 22 4 21.1 4 20L4.01 4ZM13 3.5V9H18.5L13 3.5Z"
      />
      <path d="M7 17V18H9V17H7Z" />
    </svg>
  );
};

export default SvgFileCompresed;
