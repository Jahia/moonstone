import * as React from 'react';
import {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: 'small' | 'default' | 'big';
  color?: 'red' | 'yellow' | 'green' | 'blue' | 'purple' | 'gray';
  className?: string;
}

const SvgHandleMove = ({
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
            <path d="M19.3835 8.30826L19.3835 11.1386L15.8394 11.1263V12.8737L19.3835 12.8614L19.3835 15.6917L23.0753 12L19.3835 8.30826ZM8.30829 4.61652L11.1386 4.61652L11.1263 15.8394H12.8737L12.8614 4.61652L15.6918 4.61652L12 0.924775L8.30829 4.61652ZM4.61655 15.6917L4.61655 12.8614L15.8394 12.8737V11.1263L4.61655 11.1386L4.61655 8.30826L0.924805 12L4.61655 15.6917ZM15.6918 19.3835H12.8614L12.8737 15.8394H11.1263L11.1386 19.3835H8.30829L12 23.0752L15.6918 19.3835Z"/>
        </svg>
    );
};

export default SvgHandleMove;
