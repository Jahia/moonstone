import * as React from 'react';
import { SVGProps } from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: 'small' | 'default' | 'big';
  className?: string;
}

const SvgCopy = ({
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
      <path d="M15.0526 3H5.57895C4.71053 3 4 3.73636 4 4.63636V16.0909H5.57895V4.63636H15.0526V3ZM14.2632 6.27273L19 11.1818V19.3636C19 20.2636 18.2895 21 17.4211 21H8.72895C7.86053 21 7.15789 20.2636 7.15789 19.3636L7.16579 7.90909C7.16579 7.00909 7.86842 6.27273 8.73684 6.27273H14.2632ZM13.4737 12H17.8158L13.4737 7.5V12Z" />
    </svg>
  );
};

export default SvgCopy;
