import * as React from 'react';
import {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: 'small' | 'default' | 'big';
  color?: 'red' | 'yellow' | 'green' | 'blue' | 'darkBlue' | 'purple' | 'gray';
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
            <path d="M9.78694 7.4488L11.7866 5.4491L10.6432 4.30566L8.6435 6.30537L6.6438 4.30566L5.50037 5.4491L7.50007 7.4488L5.50037 9.4485L6.6438 10.5919L8.6435 8.59223L10.6432 10.5919L11.7866 9.4485L9.78694 7.4488Z"/>
            <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.63965 3.15603C1.63965 1.65867 2.8535 0.444824 4.35085 0.444824H12.9363C14.4337 0.444824 15.6475 1.65867 15.6475 3.15603V9.54736H19.6502C21.1476 9.54736 22.3614 10.7612 22.3614 12.2586V20.8441C22.3614 22.3414 21.1476 23.5553 19.6502 23.5553H11.0648C9.56739 23.5553 8.35355 22.3414 8.35355 20.8441V14.4527H4.35085C2.8535 14.4527 1.63965 13.2389 1.63965 11.7415V3.15603ZM4.35085 2.25229C3.85173 2.25229 3.44712 2.65691 3.44712 3.15603V11.7415C3.44712 12.2406 3.85173 12.6452 4.35085 12.6452H12.9363C13.4355 12.6452 13.8401 12.2406 13.8401 11.7415V3.15603C13.8401 2.65691 13.4355 2.25229 12.9363 2.25229H4.35085ZM18.1211 13.7384L19.2829 14.9002L14.1628 20.0203L11.4326 17.2901L12.5945 16.1283L14.1628 17.6967L18.1211 13.7384Z"
      />
        </svg>
    );
};

export default SvgBoolean;
