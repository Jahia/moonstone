import * as React from 'react';
import {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: 'small' | 'default' | 'big';
  color?: 'red' | 'yellow' | 'green' | 'blue' | 'darkBlue' | 'purple' | 'gray';
  className?: string;
}

const SvgWorkInProgress = ({
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
            <path d="M20.872 17.7124L13.3926 10.233C14.1323 8.34256 13.7213 6.1234 12.1597 4.56176C10.5159 2.91794 8.05013 2.58917 6.07754 3.49328L9.61177 7.0275L7.14603 9.49323L3.52962 5.95901C2.54332 7.9316 2.95428 10.3973 4.5981 12.0412C6.15974 13.6028 8.3789 14.0137 10.2693 13.274L17.7487 20.7534C18.0775 21.0822 18.5706 21.0822 18.8994 20.7534L20.7898 18.863C21.2007 18.5343 21.2007 17.9589 20.872 17.7124Z"/>
        </svg>
    );
};

export default SvgWorkInProgress;
