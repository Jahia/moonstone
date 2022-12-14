import * as React from 'react';
import {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: 'small' | 'default' | 'big';
  color?: 'red' | 'yellow' | 'green' | 'blue' | 'deepBlue' | 'purple' | 'gray';
  className?: string;
}

const SvgViewTree = ({
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
        d="M7.75 9H6.25V5H10.25V9H8.75V11.5L13.75 11.5V10H17.75V11.5V12.5V14H13.75V12.5L8.75 12.5V16.5H13.75V15H17.75V16.5V17.5V19H13.75V17.5H8.75H7.75V16.5V12.5V11.5V9Z"
      />
        </svg>
    );
};

export default SvgViewTree;
