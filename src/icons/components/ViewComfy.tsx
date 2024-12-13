import * as React from 'react';
import type {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  readonly size?: 'small' | 'default' | 'big';
  readonly color?: 'red' | 'yellow' | 'green' | 'blue' | 'darkBlue' | 'purple' | 'gray';
  readonly className?: string;
}
const SvgViewComfy = ({
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
        d="M3.00001 9.71429H6.71429V6H3.00001V9.71429ZM3 14.3571H6.71429V10.6429H3V14.3571ZM7.6428 14.3571H11.3571V10.6429H7.6428V14.3571ZM12.2856 14.3571H15.9999V10.6429H12.2856V14.3571ZM7.6428 9.71429H11.3571V6H7.6428V9.71429ZM12.2856 6V9.71429H15.9999V6H12.2856ZM16.9284 14.3571H20.6427V10.6429H16.9284V14.3571ZM3 19H6.71429V15.2857H3V19ZM7.6428 19H11.3571V15.2857H7.6428V19ZM12.2856 19H15.9999V15.2857H12.2856V19ZM16.9284 19H20.6427V15.2857H16.9284V19ZM16.9284 6V9.71429H20.6427V6H16.9284Z"
      />
        </svg>
    );
};

export default SvgViewComfy;
