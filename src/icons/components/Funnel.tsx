import * as React from 'react';
import {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: 'small' | 'default' | 'big';
  color?: 'red' | 'yellow' | 'green' | 'blue' | 'purple' | 'gray';
  className?: string;
}

const SvgFunnel = ({
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
            <path d="M10.301 12.4736L4.0974 4.7312C3.85168 4.42454 4.09918 4 4.52367 4L19.4763 4C19.9008 4 20.1483 4.42454 19.9026 4.73121L13.699 12.4736V18.2002C13.699 18.358 13.6083 18.5049 13.4583 18.5901L11.1059 19.926C10.758 20.1236 10.301 19.9023 10.301 19.5361V12.4736Z"/>
        </svg>
    );
};

export default SvgFunnel;
