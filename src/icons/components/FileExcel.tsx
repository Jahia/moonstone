import * as React from 'react';
import type {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  readonly size?: 'small' | 'default' | 'big';
  readonly color?: 'red' | 'yellow' | 'green' | 'blue' | 'darkBlue' | 'purple' | 'gray';
  readonly className?: string;
}
const SvgFileExcel = ({
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
        d="M13.875 2H5.875C4.775 2 3.875 2.9 3.875 4V20C3.875 21.1 4.765 22 5.865 22H17.875C18.975 22 19.875 21.1 19.875 20V8L13.875 2ZM17.875 20H5.875V4H12.875V9H17.875V20ZM14.5024 7.32814V5.10474L16.6084 7.32814H14.5024ZM11.3152 12.037H7.99461V12.9078H11.3152V12.037ZM11.3152 10.9174H12.4348H16.875V12.9078V14.0274V14.8982V16.0179V18.0083H12.4348H11.3152H6.875V16.0179V14.8982V14.0274V12.9078V10.9174H11.3152ZM15.7554 14.0274V14.8982H12.4348V14.0274H15.7554ZM11.3152 14.0274V14.8982H7.99461V14.0274H11.3152ZM12.4348 16.0179L15.7554 16.0179V16.8887H12.4348V16.0179ZM11.3152 16.0179V16.8887H7.99461V16.0179H11.3152ZM15.7554 12.9078V12.037H12.4348V12.9078H15.7554Z"
      />
        </svg>
    );
};

export default SvgFileExcel;
