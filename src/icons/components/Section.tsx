import * as React from 'react';
import {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: 'small' | 'default' | 'big';
  color?: 'red' | 'yellow' | 'green' | 'blue' | 'darkBlue' | 'purple' | 'gray';
  className?: string;
}

const SvgSection = ({
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
            <path d="M22.0007 4H1.99902V8.9955H22.0007V4Z"/>
            <path d="M18.9988 12.0112H4.99882V13.0101H18.9988V12.0112Z"/>
            <path d="M4.99902 15.0045H21.999V16.0034H4.99902V15.0045Z"/>
            <path d="M13.999 18.0011H4.99902V19H13.999V18.0011Z"/>
        </svg>
    );
};

export default SvgSection;
