import * as React from 'react';
import { SVGProps } from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: 'small' | 'default' | 'big';
  color?: 'red' | 'yellow' | 'green' | 'blue' | 'purple' | 'gray';
  className?: string;
}

const SvgTask = ({
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.4 4.8H14.638C14.26 3.756 13.27 3 12.1 3C10.93 3 9.94 3.756 9.562 4.8H5.8C4.81 4.8 4 5.61 4 6.6V19.2C4 20.19 4.81 21 5.8 21H18.4C19.39 21 20.2 20.19 20.2 19.2V6.6C20.2 5.61 19.39 4.8 18.4 4.8ZM12.1 4.8C12.595 4.8 13 5.205 13 5.7C13 6.195 12.595 6.6 12.1 6.6C11.605 6.6 11.2 6.195 11.2 5.7C11.2 5.205 11.605 4.8 12.1 4.8ZM13.9 17.4H7.6V15.6H13.9V17.4ZM16.6 13.8H7.6V12H16.6V13.8ZM16.6 10.2H7.6V8.4H16.6V10.2Z"
      />
    </svg>
  );
};

export default SvgTask;
