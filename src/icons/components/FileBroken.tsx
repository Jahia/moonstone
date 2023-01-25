import * as React from 'react';
import {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: 'small' | 'default' | 'big';
  color?: 'red' | 'yellow' | 'green' | 'blue' | 'darkBlue' | 'purple' | 'gray';
  className?: string;
}

const SvgFileBroken = ({
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
        d="M6 2H14L20 8V12.0236L19.2276 11.2512L16.3366 14.1422L13.4455 11.2512L10.5545 14.1422L7.66341 11.2512L4.77235 14.1422L4.00414 13.374L4.01 4C4.01 2.9 4.9 2 6 2ZM13 3.5V9H18.5L13 3.5Z"
      />
            <path d="M4.00237 16.2007L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V14.852L19.2276 14.0796L16.3366 16.9707L13.4455 14.0796L10.5545 16.9707L7.66341 14.0796L4.77235 16.9707L4.00237 16.2007Z"/>
        </svg>
    );
};

export default SvgFileBroken;
