import * as React from 'react';
import {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: 'small' | 'default' | 'big';
  color?: 'red' | 'yellow' | 'green' | 'blue' | 'deepBlue' | 'purple' | 'gray';
  className?: string;
}

const SvgFileFont = ({
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
        d="M12.1655 17.5132H15.9399V17.1323C15.8423 17.1258 15.7332 17.1095 15.6128 17.0835C15.4924 17.0575 15.3866 17.0184 15.2954 16.9663C15.175 16.8947 15.0822 16.8198 15.0171 16.7417C14.952 16.6603 14.8983 16.5708 14.856 16.4731C14.6021 15.8742 14.2944 15.119 13.9331 14.2075C13.5718 13.2961 13.0721 12.0558 12.4341 10.4868H11.4575L10.1978 13.5239C9.82015 14.4419 9.44255 15.3582 9.06494 16.2729C9.00309 16.4292 8.92497 16.5643 8.83057 16.6782C8.73942 16.7922 8.62712 16.8882 8.49365 16.9663C8.41553 17.0151 8.30811 17.0542 8.17139 17.0835C8.03792 17.1095 7.91748 17.1258 7.81006 17.1323V17.5132H10.6519V17.1323C10.284 17.0998 10.0203 17.0477 9.86084 16.9761C9.70459 16.9012 9.62646 16.8117 9.62646 16.7075C9.62646 16.675 9.63135 16.618 9.64111 16.5366C9.65413 16.4552 9.69157 16.3234 9.75342 16.1411C9.80225 16.0011 9.85921 15.8416 9.92432 15.6626C9.99268 15.4836 10.0545 15.3273 10.1099 15.1938H12.5024L13.0933 16.6294C13.116 16.6847 13.1291 16.7287 13.1323 16.7612C13.1388 16.7938 13.1421 16.8231 13.1421 16.8491C13.1421 16.924 13.0233 16.9875 12.7856 17.0396C12.548 17.0884 12.3413 17.1193 12.1655 17.1323V17.5132ZM11.2964 12.2007L12.3022 14.7104H10.3052L11.2964 12.2007Z"
      />
            <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.875 2H5.875C4.775 2 3.875 2.9 3.875 4V20C3.875 21.1 4.765 22 5.865 22H17.875C18.975 22 19.875 21.1 19.875 20V8L13.875 2ZM17.875 20H5.875V4H12.875V9H17.875V20ZM14.5024 7.32814V5.10474L16.6084 7.32814H14.5024Z"
      />
        </svg>
    );
};

export default SvgFileFont;
