import * as React from 'react';
import {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  readonly size?: 'small' | 'default' | 'big';
  readonly color?: 'red' | 'yellow' | 'green' | 'blue' | 'darkBlue' | 'purple' | 'gray';
  readonly className?: string;
}

const SvgHandleDrag = ({
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
            <path d="M11.3334 16C11.3334 16.7333 10.7334 17.3333 10.0001 17.3333C9.26675 17.3333 8.66675 16.7333 8.66675 16C8.66675 15.2667 9.26675 14.6667 10.0001 14.6667C10.7334 14.6667 11.3334 15.2667 11.3334 16ZM10.0001 10.6667C9.26675 10.6667 8.66675 11.2667 8.66675 12C8.66675 12.7333 9.26675 13.3333 10.0001 13.3333C10.7334 13.3333 11.3334 12.7333 11.3334 12C11.3334 11.2667 10.7334 10.6667 10.0001 10.6667ZM10.0001 6.66666C9.26675 6.66666 8.66675 7.26666 8.66675 8C8.66675 8.73333 9.26675 9.33333 10.0001 9.33333C10.7334 9.33333 11.3334 8.73333 11.3334 8C11.3334 7.26666 10.7334 6.66666 10.0001 6.66666ZM14.0001 9.33333C14.7334 9.33333 15.3334 8.73333 15.3334 8C15.3334 7.26666 14.7334 6.66666 14.0001 6.66666C13.2667 6.66666 12.6667 7.26666 12.6667 8C12.6667 8.73333 13.2667 9.33333 14.0001 9.33333ZM14.0001 10.6667C13.2667 10.6667 12.6667 11.2667 12.6667 12C12.6667 12.7333 13.2667 13.3333 14.0001 13.3333C14.7334 13.3333 15.3334 12.7333 15.3334 12C15.3334 11.2667 14.7334 10.6667 14.0001 10.6667ZM14.0001 14.6667C13.2667 14.6667 12.6667 15.2667 12.6667 16C12.6667 16.7333 13.2667 17.3333 14.0001 17.3333C14.7334 17.3333 15.3334 16.7333 15.3334 16C15.3334 15.2667 14.7334 14.6667 14.0001 14.6667Z"/>
        </svg>
    );
};

export default SvgHandleDrag;
