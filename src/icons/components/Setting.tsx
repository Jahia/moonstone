import * as React from 'react';
import {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  readonly size?: 'small' | 'default' | 'big';
  readonly color?: 'red' | 'yellow' | 'green' | 'blue' | 'darkBlue' | 'purple' | 'gray';
  readonly className?: string;
}

const SvgSetting = ({
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
        d="M18.9414 12C18.9414 12.306 18.9136 12.594 18.8766 12.882L20.8289 14.367C21.0047 14.502 21.051 14.745 20.9399 14.943L19.0894 18.057C18.9784 18.255 18.7378 18.336 18.525 18.255L16.2212 17.355C15.74 17.706 15.2219 18.012 14.6575 18.237L14.3059 20.622C14.2782 20.838 14.0839 21 13.8525 21H10.1515C9.92024 21 9.72593 20.838 9.69818 20.622L9.34658 18.237C8.78218 18.012 8.26404 17.715 7.78291 17.355L5.47905 18.255C5.27549 18.327 5.02567 18.255 4.91464 18.057L3.06415 14.943C2.95312 14.745 2.99938 14.502 3.17518 14.367L5.12745 12.882C5.09044 12.594 5.06268 12.297 5.06268 12C5.06268 11.703 5.09044 11.406 5.12745 11.118L3.17518 9.63303C2.99938 9.49802 2.94387 9.25503 3.06415 9.05703L4.91464 5.94302C5.02567 5.74502 5.26624 5.66402 5.47905 5.74502L7.78291 6.64503C8.26404 6.29402 8.78218 5.98802 9.34658 5.76302L9.69818 3.37802C9.72593 3.16202 9.92024 3.00002 10.1515 3.00002H13.8525C14.0839 3.00002 14.2782 3.16202 14.3059 3.37802L14.6575 5.76302C15.2219 5.98802 15.74 6.28503 16.2212 6.64503L18.525 5.74502C18.7286 5.67302 18.9784 5.74502 19.0894 5.94302L20.9399 9.05703C21.051 9.25503 21.0047 9.49802 20.8289 9.63303L18.8766 11.118C18.9136 11.406 18.9414 11.694 18.9414 12ZM8.76352 12C8.76352 13.737 10.2162 15.15 12.0019 15.15C13.7876 15.15 15.2403 13.737 15.2403 12C15.2403 10.263 13.7876 8.85003 12.0019 8.85003C10.2162 8.85003 8.76352 10.263 8.76352 12Z"
      />
        </svg>
    );
};

export default SvgSetting;
