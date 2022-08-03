import * as React from 'react';
import {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: 'small' | 'default' | 'big';
  color?: 'red' | 'yellow' | 'green' | 'blue' | 'purple' | 'gray';
  className?: string;
}

const SvgNoCloud = ({
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
            <g clipPath="url(#clip0)">
                <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.3501 10.04C18.6701 6.59 15.6401 4 12.0001 4C10.5201 4 9.15015 4.43 7.99016 5.17L9.45015 6.63C10.2101 6.23 11.0801 6 12.0001 6C15.0401 6 17.5001 8.46 17.5001 11.5V12H19.0001C20.66 12 22 13.34 22 15C22 16.13 21.36 17.11 20.44 17.62L21.89 19.07C23.16 18.16 24 16.68 24 15C24 12.36 21.95 10.22 19.3501 10.04ZM2.99997 5.27L5.74994 8.01C2.55997 8.15 0 10.77 0 14C0 17.31 2.68997 20 5.99994 20H17.7298L19.7298 22L20.9998 20.73L4.26996 4L2.99997 5.27ZM7.72998 10L15.7299 18H6C3.79002 18 2.00004 16.21 2.00004 14C2.00004 11.79 3.79002 10 6 10H7.72998Z"
        />
            </g>
            <defs>
                <clipPath id="clip0">
                    <path d="M0 0H24V24H0V0Z"/>
                </clipPath>
            </defs>
        </svg>
    );
};

export default SvgNoCloud;
