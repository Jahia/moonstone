import * as React from 'react';
import {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: 'small' | 'default' | 'big';
  color?: 'red' | 'yellow' | 'green' | 'blue' | 'darkBlue' | 'purple' | 'gray';
  className?: string;
}

const SvgFeather = ({
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
            <path d="M20.7435 3C10.1991 3 3 10.3125 3 21H3.60148C3.90221 18.4688 4.23086 16.7978 6.9375 16.2353C9.75 15.6508 12.5625 15.7059 14.8125 12.5294C14.9742 11.6526 13.6875 12 12 12C14.4059 11.4375 18.0369 8.90625 18.3376 7.5C18.3376 7.5 18.0369 6.9375 14.7288 7.5C16.7337 6.5625 22.2472 3.5625 20.7435 3Z"/>
        </svg>
    );
};

export default SvgFeather;
