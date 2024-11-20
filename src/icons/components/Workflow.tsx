import * as React from 'react';
import type {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  readonly size?: 'small' | 'default' | 'big';
  readonly color?: 'red' | 'yellow' | 'green' | 'blue' | 'darkBlue' | 'purple' | 'gray';
  readonly className?: string;
}
const SvgWorkflow = ({
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
            <path d="M4 19H10V17H4V19ZM20 5H4V7H20V5ZM17 11H4V13H17.25C18.35 13 19.25 13.9 19.25 15C19.25 16.1 18.35 17 17.25 17H15V15L12 18L15 21V19H17C19.21 19 21 17.21 21 15C21 12.79 19.21 11 17 11Z"/>
        </svg>
    );
};

export default SvgWorkflow;
