import * as React from 'react';
import {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: 'small' | 'default' | 'big';
  color?: 'red' | 'yellow' | 'green' | 'blue' | 'darkBlue' | 'purple' | 'gray';
  className?: string;
}

const SvgSiteSettingsPublication = ({
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
            <path d="M6 8.38461L9 8.38461L9 13H14V8.38461L17 8.38462L11.5 3L6 8.38461Z"/>
            <path d="M9 14H10V17H9V14Z"/>
            <path d="M11 14H12V19H11V14Z"/>
            <path d="M13 14H14V21H13V14Z"/>
        </svg>
    );
};

export default SvgSiteSettingsPublication;
