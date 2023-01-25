import * as React from 'react';
import {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: 'small' | 'default' | 'big';
  color?: 'red' | 'yellow' | 'green' | 'blue' | 'darkBlue' | 'purple' | 'gray';
  className?: string;
}

const SvgFilePowerPoint = ({
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
        d="M13.875 2H5.875C4.775 2 3.875 2.9 3.875 4V20C3.875 21.1 4.765 22 5.865 22H17.875C18.975 22 19.875 21.1 19.875 20V8L13.875 2ZM17.875 20H5.875V4H12.875V9H17.875V20ZM14.5024 7.32814V5.10474L16.6084 7.32814H14.5024ZM12.2917 10.25C14.1326 10.25 15.625 11.7424 15.625 13.5833H12.2917V10.25ZM14.7917 14.4167C14.7917 16.2576 13.2993 17.75 11.4583 17.75C9.61738 17.75 8.125 16.2576 8.125 14.4167C8.125 12.5757 9.61738 11.0833 11.4583 11.0833V14.4167H14.7917Z"
      />
        </svg>
    );
};

export default SvgFilePowerPoint;
