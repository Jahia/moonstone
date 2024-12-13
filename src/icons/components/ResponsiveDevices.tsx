import * as React from 'react';
import type {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  readonly size?: 'small' | 'default' | 'big';
  readonly color?: 'red' | 'yellow' | 'green' | 'blue' | 'darkBlue' | 'purple' | 'gray';
  readonly className?: string;
}
const SvgResponsiveDevices = ({
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
        d="M2.5875 19.4125C2.97917 19.8042 3.45 20 4 20H11C11.2833 20 11.5208 19.9042 11.7125 19.7125C11.9042 19.5208 12 19.2833 12 19C12 18.7167 11.9042 18.4792 11.7125 18.2875C11.5208 18.0958 11.2833 18 11 18H4V6H19C19.2833 6 19.5208 5.90417 19.7125 5.7125C19.9042 5.52083 20 5.28333 20 5C20 4.71667 19.9042 4.47917 19.7125 4.2875C19.5208 4.09583 19.2833 4 19 4H4C3.45 4 2.97917 4.19583 2.5875 4.5875C2.19583 4.97917 2 5.45 2 6V18C2 18.55 2.19583 19.0208 2.5875 19.4125ZM14.2875 19.7125C14.4792 19.9042 14.7167 20 15 20H21C21.2833 20 21.5208 19.9042 21.7125 19.7125C21.9042 19.5208 22 19.2833 22 19V9C22 8.71667 21.9042 8.47917 21.7125 8.2875C21.5208 8.09583 21.2833 8 21 8H15C14.7167 8 14.4792 8.09583 14.2875 8.2875C14.0958 8.47917 14 8.71667 14 9V19C14 19.2833 14.0958 19.5208 14.2875 19.7125ZM20 17H16V10H20V17Z"
      />
        </svg>
    );
};

export default SvgResponsiveDevices;
