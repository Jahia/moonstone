import * as React from 'react';
import type {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  readonly size?: 'small' | 'default' | 'big';
  readonly color?: 'red' | 'yellow' | 'green' | 'blue' | 'darkBlue' | 'purple' | 'gray';
  readonly className?: string;
}
const SvgTextarea = ({
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
        d="M4.80005 8.8002C4.80005 12.773 7.98675 14.4002 11.2 14.4002V20.0002C11.2 20.442 11.5582 20.8002 12 20.8002C12.4419 20.8002 12.8 20.442 12.8 20.0002V14.4002V4.9602H14.4V20.0002C14.4 20.442 14.7582 20.8002 15.2 20.8002C15.6419 20.8002 16 20.442 16 20.0002V4.9602H18.4C18.8861 4.9602 19.28 4.56621 19.28 4.0802C19.28 3.59418 18.8861 3.2002 18.4 3.2002H15.2H12.8H12H11.2C7.98675 3.2002 4.80005 4.8274 4.80005 8.8002Z"
      />
        </svg>
    );
};

export default SvgTextarea;
