import * as React from 'react';
import {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: 'small' | 'default' | 'big';
  color?: 'red' | 'yellow' | 'green' | 'blue' | 'purple' | 'gray';
  className?: string;
}

const SvgGlobalLink = ({
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
            <path d="M12.9149 8.41309C15.8873 5.31093 19.5634 2.73681 22.0001 1.99982C19.3429 2.80348 15.127 4.38197 11.8981 7.39234V5.20096H10.6546L10.6544 9.6692H15.1313V8.41309H12.9149Z"/>
            <path d="M9.66952 5.20097H8.42594V7.53591L6.96315 6.07594L6.08381 6.95359L7.54613 8.41309H5.20721V9.6692L9.68408 9.6692V8.41309H9.66952V5.20097Z"/>
            <path d="M10.6548 11.9318V10.6757H15.1317V11.9319L12.7928 11.9318L14.2551 13.3914L13.3758 14.269L11.9134 12.8094V15.144H10.6698V11.9318H10.6548Z"/>
            <path d="M2 22.0002C2.73842 19.5681 5.31759 15.899 8.42582 12.9323V15.144H9.68435V10.6757H5.20721V11.9169H7.40363C4.387 15.1397 2.80528 19.3479 2 22.0002Z"/>
        </svg>
    );
};

export default SvgGlobalLink;
