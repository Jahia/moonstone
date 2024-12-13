import * as React from 'react';
import type {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  readonly size?: 'small' | 'default' | 'big';
  readonly color?: 'red' | 'yellow' | 'green' | 'blue' | 'darkBlue' | 'purple' | 'gray';
  readonly className?: string;
}
const SvgZoomOut = ({
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
            <path d="M15.755 14.255H14.965L14.685 13.985C15.665 12.845 16.255 11.365 16.255 9.75499C16.255 6.16499 13.345 3.25499 9.755 3.25499C6.165 3.25499 3.255 6.16499 3.255 9.75499C3.255 13.345 6.165 16.255 9.755 16.255C11.365 16.255 12.845 15.665 13.985 14.685L14.255 14.965V15.755L19.255 20.745L20.745 19.255L15.755 14.255V14.255ZM9.755 14.255C7.265 14.255 5.255 12.245 5.255 9.75499C5.255 7.26499 7.265 5.25499 9.755 5.25499C12.245 5.25499 14.255 7.26499 14.255 9.75499C14.255 12.245 12.245 14.255 9.755 14.255ZM7.255 9.25499H12.255V10.255H7.255V9.25499Z"/>
        </svg>
    );
};

export default SvgZoomOut;
