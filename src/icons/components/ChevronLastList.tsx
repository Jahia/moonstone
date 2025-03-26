import * as React from 'react';
import type {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  readonly size?: 'small' | 'default' | 'big';
  readonly color?: 'red' | 'yellow' | 'green' | 'blue' | 'darkBlue' | 'purple' | 'gray';
  readonly className?: string;
}
const SvgChevronLastList = ({
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
            <path d="M16.3849 5.79501L11.7949 10.385L7.20492 5.79501L5.79492 7.20501L11.7949 13.205L17.7949 7.20501L16.3849 5.79501ZM17.7949 16.205V18.205H5.79492V16.205H17.7949Z"/>
        </svg>
    );
};

export default SvgChevronLastList;
