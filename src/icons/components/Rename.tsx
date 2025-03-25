import * as React from 'react';
import type {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  readonly size?: 'small' | 'default' | 'big';
  readonly color?: 'red' | 'yellow' | 'green' | 'blue' | 'darkBlue' | 'purple' | 'gray';
  readonly className?: string;
}
const SvgRename = ({
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
            <path d="M13.5 12.7553L10.5 15.7553V7H5V4H19V7H13.5V12.7553Z"/>
            <path d="M10 24V21.0837L18.601 12.4827L21.5173 15.399L12.9163 24H10Z"/>
            <path d="M23.7725 12.0472C24.0758 12.3505 24.0758 12.8404 23.7725 13.1437L22.3494 14.5669L19.4331 11.6506L20.8563 10.2275C21.1596 9.92418 21.6495 9.92418 21.9528 10.2275L23.7725 12.0472Z"/>
        </svg>
    );
};

export default SvgRename;
