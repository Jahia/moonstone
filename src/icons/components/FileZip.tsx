import * as React from 'react';
import {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: 'small' | 'default' | 'big';
  color?: 'red' | 'yellow' | 'green' | 'blue' | 'purple' | 'gray';
  className?: string;
}

const SvgFileZip = ({
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
        d="M6 2C4.9 2 4.01 2.9 4.01 4L4.005 12H3C2.44772 12 2 12.4477 2 13V19C2 19.5523 2.44772 20 3 20H4C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2H6ZM13 9V3.5L18.5 9H13ZM3 13H15V19H3V13Z"
      />
            <path d="M6.07178 17.3408H7.771V18H5.00244V17.5483L6.69678 15.1069H4.99268V14.4453H7.75391V14.8848L6.07178 17.3408Z"/>
            <path d="M9.32471 18H8.47021V14.4453H9.32471V18Z"/>
            <path d="M11.0273 16.7939V18H10.1704V14.4453H11.5889C11.8607 14.4453 12.1007 14.4958 12.3091 14.5967C12.519 14.696 12.681 14.8384 12.7949 15.0239C12.9105 15.2078 12.9683 15.417 12.9683 15.6514C12.9683 15.998 12.8438 16.2756 12.5947 16.4839C12.3473 16.6906 12.0072 16.7939 11.5742 16.7939H11.0273ZM11.0273 16.1323H11.5889C11.7549 16.1323 11.881 16.0908 11.9673 16.0078C12.0552 15.9248 12.0991 15.8076 12.0991 15.6562C12.0991 15.4902 12.0544 15.3576 11.9648 15.2583C11.8753 15.159 11.7533 15.1086 11.5986 15.1069H11.0273V16.1323Z"/>
        </svg>
    );
};

export default SvgFileZip;
