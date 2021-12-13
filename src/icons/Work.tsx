import * as React from 'react';
import { SVGProps } from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: 'small' | 'default' | 'big';
  className?: string;
}

const SvgWork = ({
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
        d="M18 7.5H15V6C15 5.1675 14.3325 4.5 13.5 4.5H10.5C9.6675 4.5 9 5.1675 9 6V7.5H6C5.1675 7.5 4.5075 8.1675 4.5075 9L4.5 17.25C4.5 18.0825 5.1675 18.75 6 18.75H18C18.8325 18.75 19.5 18.0825 19.5 17.25V9C19.5 8.1675 18.8325 7.5 18 7.5ZM13.5 7.5H10.5V6H13.5V7.5Z"
      />
    </svg>
  );
};

export default SvgWork;
