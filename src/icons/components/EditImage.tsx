import * as React from 'react';
import type {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  readonly size?: 'small' | 'default' | 'big';
  readonly color?: 'red' | 'yellow' | 'green' | 'blue' | 'darkBlue' | 'purple' | 'gray';
  readonly className?: string;
}
const SvgEditImage = ({
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
            <path d="M4 20C3.45 20 2.97917 19.8042 2.5875 19.4125C2.19583 19.0208 2 18.55 2 18V4C2 3.45 2.19583 2.97917 2.5875 2.5875C2.97917 2.19583 3.45 2 4 2H18C18.55 2 19.0208 2.19583 19.4125 2.5875C19.8042 2.97917 20 3.45 20 4V6.25528L18 8.25527V4H4V18H8.25522L6.25521 20H4Z"/>
            <path d="M13.25 11L14.1094 12.1459L10.2552 16H5L8 12L10.25 15L13.25 11Z"/>
            <path d="M7.5 9C7.91667 9 8.27083 8.85417 8.5625 8.5625C8.85417 8.27083 9 7.91667 9 7.5C9 7.08333 8.85417 6.72917 8.5625 6.4375C8.27083 6.14583 7.91667 6 7.5 6C7.08333 6 6.72917 6.14583 6.4375 6.4375C6.14583 6.72917 6 7.08333 6 7.5C6 7.91667 6.14583 8.27083 6.4375 8.5625C6.72917 8.85417 7.08333 9 7.5 9Z"/>
            <path d="M10 24V21.0837L18.601 12.4827L21.5173 15.399L12.9163 24H10Z"/>
            <path d="M23.7725 12.0472C24.0758 12.3505 24.0758 12.8404 23.7725 13.1437L22.3494 14.5669L19.4331 11.6506L20.8563 10.2275C21.1596 9.92418 21.6495 9.92418 21.9528 10.2275L23.7725 12.0472Z"/>
        </svg>
    );
};

export default SvgEditImage;
