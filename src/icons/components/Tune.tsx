import * as React from 'react';
import type {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  readonly size?: 'small' | 'default' | 'big';
  readonly color?: 'red' | 'yellow' | 'green' | 'blue' | 'darkBlue' | 'purple' | 'gray';
  readonly className?: string;
}
const SvgTune = ({
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
        d="M4 16.4444V18.2222H9.33333V16.4444H4ZM4 5.77778V7.55556H12.8889V5.77778H4ZM12.8889 20V18.2222H20V16.4444H12.8889V14.6667H11.1111V20H12.8889ZM7.55556 9.33333V11.1111H4V12.8889H7.55556V14.6667H9.33333V9.33333H7.55556ZM20 12.8889V11.1111H11.1111V12.8889H20ZM14.6667 9.33333H16.4444V7.55556H20V5.77778H16.4444V4H14.6667V9.33333Z"
      />
        </svg>
    );
};

export default SvgTune;
