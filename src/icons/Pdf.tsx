import * as React from 'react';
import { SVGProps } from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: 'small' | 'default' | 'big';
  color?: 'red' | 'yellow' | 'green' | 'blue' | 'purple' | 'gray';
  className?: string;
}

const SvgPdf = ({
  size = 'default',
  className = '',
  color,
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
  const classNameColor = color ? ' moonstone-icon_' + color : '';
  props.className =
    className + ' moonstone-icon moonstone-icon_' + size + classNameColor;
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M20 2H8C6.9 2 6 2.9 6 4V16C6 17.1 6.9 18 8 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM11.5 9.5C11.5 10.33 10.83 11 10 11H9V13H7.5V7H10C10.83 7 11.5 7.67 11.5 8.5V9.5ZM16.5 11.5C16.5 12.33 15.83 13 15 13H12.5V7H15C15.83 7 16.5 7.67 16.5 8.5V11.5ZM20.5 8.5H19V9.5H20.5V11H19V13H17.5V7H20.5V8.5ZM9 9.5H10V8.5H9V9.5ZM4 6H2V20C2 21.1 2.9 22 4 22H18V20H4V6ZM14 11.5H15V8.5H14V11.5Z" />
    </svg>
  );
};

export default SvgPdf;
