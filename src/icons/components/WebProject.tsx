import * as React from 'react';
import {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: 'small' | 'default' | 'big';
  color?: 'red' | 'yellow' | 'green' | 'blue' | 'purple' | 'gray';
  className?: string;
}

const SvgWebProject = ({
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
            <path d="M20.2222 4H7.77778C6.79111 4 6 4.73125 6 5.625V15.375C6 16.2688 6.79111 17 7.77778 17H20.2222C21.2 17 22 16.2688 22 15.375V5.625C22 4.73125 21.2089 4 20.2222 4ZM20.2222 15.375H7.77778V7.25H20.2222V15.375Z"/>
            <path d="M4 10.5323C4 10.2383 3.74004 10 3.41935 10H2.58065C2.25996 10 2 10.2383 2 10.5323V20.4677C2 20.7617 2.25996 21 2.58065 21H15.4194C15.74 21 16 20.7617 16 20.4677V19.6989C16 19.405 15.74 19.1667 15.4194 19.1667H4.58065C4.25996 19.1667 4 18.9284 4 18.6344V10.5323Z"/>
        </svg>
    );
};

export default SvgWebProject;
