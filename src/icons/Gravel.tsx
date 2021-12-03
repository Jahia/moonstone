import * as React from 'react';
import { SVGProps } from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: 'small' | 'default' | 'big';
  className?: string;
}

const SvgGravel = ({
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
        d="M1 21H13V23H1V21ZM5.24512 8.06919L8.07512 5.24219L22.2151 19.3842L19.3871 22.2122L5.24512 8.06919ZM12.3172 1L17.9742 6.656L15.1442 9.486L9.49023 3.826L12.3172 1ZM3.82556 9.48438L9.48256 15.1414L6.65456 17.9694L0.997559 12.3124L3.82556 9.48438Z"
      />
    </svg>
  );
};

export default SvgGravel;
