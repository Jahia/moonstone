import * as React from 'react';
import {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: 'small' | 'default' | 'big';
  color?: 'red' | 'yellow' | 'green' | 'blue' | 'darkBlue' | 'purple' | 'gray';
  className?: string;
}

const SvgPalette = ({
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
            <path d="M2.5301 19.65L3.8701 20.21V11.18L1.4401 17.04C1.0301 18.06 1.5201 19.23 2.5301 19.65ZM22.0301 15.95L17.0701 3.98C16.7601 3.23 16.0301 2.77 15.2601 2.75C15.0001 2.75 14.7301 2.79 14.4701 2.9L7.1001 5.95C6.3501 6.26 5.8901 6.98 5.8701 7.75C5.8601 8.02 5.9101 8.29 6.0201 8.55L10.9801 20.52C11.2901 21.28 12.0301 21.74 12.8101 21.75C13.0701 21.75 13.3301 21.7 13.5801 21.6L20.9401 18.55C21.9601 18.13 22.4501 16.96 22.0301 15.95ZM7.8801 8.75C7.3301 8.75 6.8801 8.3 6.8801 7.75C6.8801 7.2 7.3301 6.75 7.8801 6.75C8.4301 6.75 8.8801 7.2 8.8801 7.75C8.8801 8.3 8.4301 8.75 7.8801 8.75ZM5.8801 19.75C5.8801 20.85 6.7801 21.75 7.8801 21.75H9.3301L5.8801 13.41V19.75Z"/>
        </svg>
    );
};

export default SvgPalette;
