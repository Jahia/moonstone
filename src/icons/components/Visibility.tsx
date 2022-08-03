import * as React from 'react';
import {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: 'small' | 'default' | 'big';
  color?: 'red' | 'yellow' | 'green' | 'blue' | 'purple' | 'gray';
  className?: string;
}

const SvgVisibility = ({
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
            <path d="M12 5C7.45455 5 3.57273 7.90267 2 12C3.57273 16.0973 7.45455 19 12 19C16.5455 19 20.4273 16.0973 22 12C20.4273 7.90267 16.5455 5 12 5ZM12 16.6667C9.49091 16.6667 7.45455 14.576 7.45455 12C7.45455 9.424 9.49091 7.33333 12 7.33333C14.5091 7.33333 16.5455 9.424 16.5455 12C16.5455 14.576 14.5091 16.6667 12 16.6667ZM12 9.2C10.4909 9.2 9.27273 10.4507 9.27273 12C9.27273 13.5493 10.4909 14.8 12 14.8C13.5091 14.8 14.7273 13.5493 14.7273 12C14.7273 10.4507 13.5091 9.2 12 9.2Z"/>
        </svg>
    );
};

export default SvgVisibility;
