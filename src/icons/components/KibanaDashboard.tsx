import * as React from 'react';
import {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: 'small' | 'default' | 'big';
  color?: 'red' | 'yellow' | 'green' | 'blue' | 'purple' | 'gray';
  className?: string;
}

const SvgKibanaDashboard = ({
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
        d="M21.2621 3.25745C21.2621 3.80973 20.8144 4.25745 20.2621 4.25745C20.1816 4.25745 20.1034 4.24794 20.0284 4.22999L15.7138 9.27388C15.7659 9.39494 15.7947 9.52833 15.7947 9.66846C15.7947 10.2207 15.347 10.6685 14.7947 10.6685C14.2833 10.6685 13.8616 10.2846 13.8019 9.78931L9.765 7.75849C9.63279 7.82296 9.48425 7.85913 9.32727 7.85913C9.24051 7.85913 9.15633 7.84808 9.07607 7.82732L4.82848 12.8766C4.84897 12.9563 4.85986 13.0399 4.85986 13.1261C4.85986 13.6784 4.41215 14.1261 3.85986 14.1261C3.30758 14.1261 2.85986 13.6784 2.85986 13.1261C2.85986 12.5738 3.30758 12.1261 3.85986 12.1261C3.95111 12.1261 4.03949 12.1383 4.12348 12.1612L8.36229 7.1224C8.33946 7.03851 8.32727 6.95025 8.32727 6.85913C8.32727 6.30685 8.77499 5.85913 9.32727 5.85913C9.87956 5.85913 10.3273 6.30685 10.3273 6.85913C10.3273 6.87991 10.3266 6.90054 10.3254 6.921L14.1954 8.86785C14.3624 8.74264 14.5699 8.66846 14.7947 8.66846C14.8337 8.66846 14.8722 8.67069 14.9101 8.67505L19.3026 3.5401C19.2762 3.45047 19.2621 3.35561 19.2621 3.25745C19.2621 2.70516 19.7098 2.25745 20.2621 2.25745C20.8144 2.25745 21.2621 2.70516 21.2621 3.25745ZM18.7621 9.0697V21.8591H21.7621V9.0697H18.7621ZM16.2947 21.8591V14.5509H13.2947V21.8591H16.2947ZM10.8273 12.7238V21.8591H7.82727V12.7238H10.8273ZM5.35986 21.8591V18.205H2.35986V21.8591H5.35986Z"
      />
        </svg>
    );
};

export default SvgKibanaDashboard;
