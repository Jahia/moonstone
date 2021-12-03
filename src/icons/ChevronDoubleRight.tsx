import * as React from 'react';
import { SVGProps } from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: 'small' | 'default' | 'big';
  className?: string;
}

const SvgChevronDoubleRight = ({
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
      <path d="M9.58 12L5 16.59L6.41 18L12.41 12L6.41 6L5 7.41L9.58 12Z" />
      <path d="M16.9899 12L12.4099 16.59L13.8199 18L19.8199 12L13.8199 6L12.4099 7.41L16.9899 12Z" />
    </svg>
  );
};

export default SvgChevronDoubleRight;
