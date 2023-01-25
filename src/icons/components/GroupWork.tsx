import * as React from 'react';
import {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: 'small' | 'default' | 'big';
  color?: 'red' | 'yellow' | 'green' | 'blue' | 'darkBlue' | 'purple' | 'gray';
  className?: string;
}

const SvgGroupWork = ({
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
        d="M12 4.5C7.86 4.5 4.5 7.86 4.5 12C4.5 16.14 7.86 19.5 12 19.5C16.14 19.5 19.5 16.14 19.5 12C19.5 7.86 16.14 4.5 12 4.5ZM9 16.125C7.965 16.125 7.125 15.285 7.125 14.25C7.125 13.215 7.965 12.375 9 12.375C10.035 12.375 10.875 13.215 10.875 14.25C10.875 15.285 10.035 16.125 9 16.125ZM10.125 9C10.125 7.965 10.965 7.125 12 7.125C13.035 7.125 13.875 7.965 13.875 9C13.875 10.035 13.035 10.875 12 10.875C10.965 10.875 10.125 10.035 10.125 9ZM15 16.125C13.965 16.125 13.125 15.285 13.125 14.25C13.125 13.215 13.965 12.375 15 12.375C16.035 12.375 16.875 13.215 16.875 14.25C16.875 15.285 16.035 16.125 15 16.125Z"
      />
        </svg>
    );
};

export default SvgGroupWork;
