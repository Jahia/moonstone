import * as React from 'react';
import type {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  readonly size?: 'small' | 'default' | 'big';
  readonly color?: 'red' | 'yellow' | 'green' | 'blue' | 'darkBlue' | 'purple' | 'gray';
  readonly className?: string;
}
const SvgHeal = ({
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
            <path d="M15.4226 15.4185H20.1607C20.625 15.4185 21 15.0436 21 14.5795L21 9.41455C21 8.95041 20.625 8.57554 20.1607 8.57554H15.4226L15.4226 3.83901C15.4167 3.60694 15.3274 3.39868 15.1726 3.24397C15.0238 3.09521 14.8095 3 14.5833 3H9.41667C8.95238 3 8.57738 3.37488 8.57738 3.83901V8.57554L3.83929 8.57554C3.375 8.57554 3 8.95041 3 9.41455L3 14.5795C3 15.0436 3.375 15.4185 3.83929 15.4185H8.57738V20.155C8.57738 20.3931 8.67262 20.5954 8.82738 20.7501C8.98214 20.9048 9.19047 20.9941 9.42262 21H14.5893C15.0536 21 15.4286 20.6251 15.4286 20.161L15.4226 15.4185Z"/>
        </svg>
    );
};

export default SvgHeal;
