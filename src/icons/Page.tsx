import * as React from 'react';
import { SVGProps } from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: 'small' | 'default' | 'big';
  color?: 'red' | 'yellow' | 'green' | 'blue' | 'purple' | 'gray';
  className?: string;
}

const SvgPage = ({
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
      <path d="M15.9421 15.3222H7.94212V17.3222H15.9421V15.3222Z" />
      <path d="M7.94212 11H15.9421V13H7.94212V11Z" />
      <path d="M11.9421 6.67779H7.94212V8.67779H11.9421V6.67779Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.982 2.03003H6.01804C4.80014 2.03003 4.02405 3.10923 4.02405 4.02402V19.9759C4.02405 21.0726 4.92134 21.9699 6.01804 21.9699H17.9919C19.0886 21.9699 19.976 21.0726 19.976 19.9759V4.02402C19.976 2.92732 19.0787 2.03003 17.982 2.03003ZM17.982 19.9759H6.01804V4.02402L17.982 4.02402V19.9759Z"
      />
    </svg>
  );
};

export default SvgPage;
