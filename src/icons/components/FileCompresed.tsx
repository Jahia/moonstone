import * as React from 'react';
import type {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  readonly size?: 'small' | 'default' | 'big';
  readonly color?: 'red' | 'yellow' | 'green' | 'blue' | 'darkBlue' | 'purple' | 'gray';
  readonly className?: string;
}
const SvgFileCompresed = ({
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
        d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM9.45654 20H6V4H7.45654V5.99316H9.45654V7.99316H7.45654V9.99316H9.45654V11.9932H7.45654V13.9932H9.45654V15.9932H11.4565V13.9932H9.45654V11.9932H11.4565V9.99316H9.45654V7.99316H11.4565V5.99316H9.45654V4H13V9H18V20H11.4565V18.0068H9.45654V16.0068H7.45654V18.0068H9.45654V20ZM14.6274 7.32814V5.10474L16.7334 7.32814H14.6274Z"
      />
        </svg>
    );
};

export default SvgFileCompresed;
