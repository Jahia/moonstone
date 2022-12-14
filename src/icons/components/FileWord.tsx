import * as React from 'react';
import {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: 'small' | 'default' | 'big';
  color?: 'red' | 'yellow' | 'green' | 'blue' | 'darkBlue' | 'purple' | 'gray';
  className?: string;
}

const SvgFileWord = ({
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
        d="M13.875 2H5.875C4.775 2 3.875 2.9 3.875 4V20C3.875 21.1 4.765 22 5.865 22H17.875C18.975 22 19.875 21.1 19.875 20V8L13.875 2ZM17.875 20H5.875V4H12.875V9H17.875V20ZM14.5024 7.32814V5.10474L16.6084 7.32814H14.5024ZM14.2089 16.8056L15.5485 11.1944H14.0572L13.4138 14.1262L12.6335 11.1944H11.0725L10.3279 14.1613L9.67599 11.1944H8.20148L9.5641 16.8056H10.9912L11.8752 13.4878L12.7561 16.8056H14.2089ZM15.2951 11.3944L14.051 16.6056H14.051L15.2952 11.3944H14.2181L14.2181 11.3944H15.2951ZM11.8755 12.7097L10.8375 16.6056H10.8375L11.8755 12.7097L11.8755 12.7097ZM8.45586 11.3944L8.45586 11.3944H9.51517L10.315 15.0343L10.3149 15.0345L9.51512 11.3944H8.45586ZM11.2285 11.3944L11.2285 11.3944H12.4798L13.4325 14.9739L13.4324 14.974L12.4798 11.3944H11.2285Z"
      />
        </svg>
    );
};

export default SvgFileWord;
