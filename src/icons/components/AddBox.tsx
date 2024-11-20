import * as React from 'react';
import type {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  readonly size?: 'small' | 'default' | 'big';
  readonly color?: 'red' | 'yellow' | 'green' | 'blue' | 'darkBlue' | 'purple' | 'gray';
  readonly className?: string;
}
const SvgAddBox = ({
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
        d="M19.7778 2H4.22222C2.98889 2 2 3 2 4.22222V19.7778C2 21 2.98889 22 4.22222 22H19.7778C21 22 22 21 22 19.7778V4.22222C22 3 21 2 19.7778 2ZM17.5554 13.1111H13.111V17.5556H10.8888V13.1111H6.44434V10.8889H10.8888V6.44445H13.111V10.8889H17.5554V13.1111Z"
      />
        </svg>
    );
};

export default SvgAddBox;
