import * as React from 'react';
import {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: 'small' | 'default' | 'big';
  color?: 'red' | 'yellow' | 'green' | 'blue' | 'purple' | 'gray';
  className?: string;
}

const SvgMinimize = ({
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
            <path d="M19.41 10.59L17.11 8.29003L20 5.42003L18.58 4.00003L15.71 6.89003L13.41 4.59003V10.59L19.41 10.59Z"/>
            <path d="M13.4099 19.4649L15.7099 17.1649L18.5799 20.0549L19.9999 18.6349L17.1099 15.7649L19.4099 13.4649H13.4099V19.4649Z"/>
            <path d="M4.59 13.4649L6.89 15.7649L4 18.6349L5.42 20.0549L8.29 17.1649L10.59 19.4649L10.59 13.4649L4.59 13.4649Z"/>
            <path d="M10.5901 4.59L8.29009 6.89L5.42009 4L4.00009 5.42L6.89009 8.29L4.59009 10.59H10.5901L10.5901 4.59Z"/>
        </svg>
    );
};

export default SvgMinimize;
