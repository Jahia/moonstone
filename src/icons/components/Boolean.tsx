import * as React from 'react';
import {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: 'small' | 'default' | 'big';
  color?: 'red' | 'yellow' | 'green' | 'blue' | 'deepBlue' | 'purple' | 'gray';
  className?: string;
}

const SvgBoolean = ({
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
            <path d="M9.78688 7.4488L11.7866 5.4491L10.6431 4.30566L8.64344 6.30537L6.64374 4.30566L5.50031 5.4491L7.50001 7.4488L5.50031 9.4485L6.64374 10.5919L8.64344 8.59223L10.6431 10.5919L11.7866 9.4485L9.78688 7.4488Z"/>
            <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.63959 3.15603C1.63959 1.65867 2.85344 0.444824 4.35079 0.444824H12.9363C14.4336 0.444824 15.6475 1.65867 15.6475 3.15603V9.54736H19.6502C21.1475 9.54736 22.3614 10.7612 22.3614 12.2586V20.8441C22.3614 22.3414 21.1475 23.5553 19.6502 23.5553H11.0647C9.56733 23.5553 8.35349 22.3414 8.35349 20.8441V14.4527H4.35079C2.85343 14.4527 1.63959 13.2389 1.63959 11.7415V3.15603ZM4.35079 2.25229C3.85167 2.25229 3.44706 2.65691 3.44706 3.15603V11.7415C3.44706 12.2406 3.85167 12.6452 4.35079 12.6452H12.9363C13.4354 12.6452 13.84 12.2406 13.84 11.7415V3.15603C13.84 2.65691 13.4354 2.25229 12.9363 2.25229H4.35079ZM18.121 13.7384L19.2829 14.9002L14.1628 20.0203L11.4326 17.2901L12.5944 16.1283L14.1628 17.6967L18.121 13.7384Z"
      />
        </svg>
    );
};

export default SvgBoolean;
