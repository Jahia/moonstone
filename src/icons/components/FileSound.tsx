import * as React from 'react';
import {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: 'small' | 'default' | 'big';
  color?: 'red' | 'yellow' | 'green' | 'blue' | 'darkBlue' | 'purple' | 'gray';
  className?: string;
}

const SvgFileSound = ({
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
            <path d="M11.875 15.0772V10.3883H14.7321V12.1661H12.8274V16.6105C12.8274 17.5928 11.975 18.3883 10.9226 18.3883C9.87024 18.3883 9.01786 17.5928 9.01786 16.6105C9.01786 15.6283 9.87024 14.8328 10.9226 14.8328C11.2702 14.8328 11.594 14.9261 11.875 15.0772Z"/>
            <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.875 2H5.875C4.775 2 3.875 2.9 3.875 4V20C3.875 21.1 4.765 22 5.865 22H17.875C18.975 22 19.875 21.1 19.875 20V8L13.875 2ZM17.875 9V20H5.875V4H12.875V9H17.875ZM14.5024 7.32814V5.10474L16.6084 7.32814H14.5024Z"
      />
        </svg>
    );
};

export default SvgFileSound;
