import * as React from 'react';
import {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: 'small' | 'default' | 'big';
  color?: 'red' | 'yellow' | 'green' | 'blue' | 'purple' | 'gray';
  className?: string;
}

const SvgZoomIn = ({
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
            <path d="M15.7549 14.255H14.9649L14.6849 13.985C15.6649 12.845 16.2549 11.365 16.2549 9.75499C16.2549 6.16499 13.3449 3.25499 9.75488 3.25499C6.16488 3.25499 3.25488 6.16499 3.25488 9.75499C3.25488 13.345 6.16488 16.255 9.75488 16.255C11.3649 16.255 12.8449 15.665 13.9849 14.685L14.2549 14.965V15.755L19.2549 20.745L20.7449 19.255L15.7549 14.255V14.255ZM9.75488 14.255C7.26488 14.255 5.25488 12.245 5.25488 9.75499C5.25488 7.26499 7.26488 5.25499 9.75488 5.25499C12.2449 5.25499 14.2549 7.26499 14.2549 9.75499C14.2549 12.245 12.2449 14.255 9.75488 14.255ZM10.2549 7.25499H9.25488V9.25499H7.25488V10.255H9.25488V12.255H10.2549V10.255H12.2549V9.25499H10.2549V7.25499Z"/>
        </svg>
    );
};

export default SvgZoomIn;
