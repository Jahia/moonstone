import * as React from 'react';
import type {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  readonly size?: 'small' | 'default' | 'big';
  readonly color?: 'red' | 'yellow' | 'green' | 'blue' | 'darkBlue' | 'purple' | 'gray';
  readonly className?: string;
}
const SvgAdvancedEdit = ({
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
            <path d="M19.0894 5.943L19.2677 6.24289C18.9684 6.37726 18.6879 6.56738 18.4421 6.81325L14.8149 10.4405C14.2564 9.49109 13.2047 8.85 12.0019 8.85C10.2162 8.85 8.76352 10.263 8.76352 12C8.76352 13.201 9.45801 14.2472 10.4769 14.7784L7.8504 17.4049C7.82783 17.3884 7.80533 17.3718 7.78291 17.355L5.47905 18.255C5.27549 18.327 5.02567 18.255 4.91464 18.057L3.06415 14.943C2.95312 14.745 2.99938 14.502 3.17518 14.367L5.12745 12.882C5.09044 12.594 5.06268 12.297 5.06268 12C5.06268 11.703 5.09044 11.406 5.12745 11.118L3.17518 9.633C2.99938 9.498 2.94387 9.255 3.06415 9.057L4.91464 5.943C5.02567 5.745 5.26624 5.664 5.47905 5.745L7.78291 6.645C8.26404 6.294 8.78218 5.988 9.34658 5.763L9.69818 3.378C9.72593 3.162 9.92024 3 10.1515 3H13.8525C14.0839 3 14.2782 3.162 14.3059 3.378L14.6575 5.763C15.2219 5.988 15.74 6.285 16.2212 6.645L18.525 5.745C18.7286 5.673 18.9784 5.745 19.0894 5.943Z"/>
            <path d="M10 23V20.0837L18.601 11.4827L21.5173 14.399L12.9163 23H10Z"/>
            <path d="M23.7725 11.0472C24.0758 11.3505 24.0758 11.8404 23.7725 12.1437L22.3494 13.5669L19.4331 10.6506L20.8563 9.22747C21.1596 8.92418 21.6495 8.92418 21.9528 9.22747L23.7725 11.0472Z"/>
        </svg>
    );
};

export default SvgAdvancedEdit;
