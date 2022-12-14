import * as React from 'react';
import {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: 'small' | 'default' | 'big';
  color?: 'red' | 'yellow' | 'green' | 'blue' | 'deepBlue' | 'purple' | 'gray';
  className?: string;
}

const SvgAbTesting = ({
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
            <path d="M3.5 5.5V18.5H20.5V5.5H3.5ZM19.7785 17.8116H12.3965V6.18837H19.7785V17.8116ZM10.771 14.8438H9.39529L9.27239 14.445L8.84818 13.2601H7.0007L6.57253 14.4262L6.41791 14.8438L5.13736 14.8212L5.3792 14.0538L7.0562 9.45341L7.25443 8.95689H8.60634L8.78871 9.45341L10.4618 14.0538L10.771 14.8438ZM7.43284 12.0677L7.92444 10.7286L8.41208 12.0677H7.43284ZM18.934 12.9404C18.9328 12.6645 18.8692 12.3921 18.7475 12.1416C18.6257 11.8911 18.4487 11.6684 18.2283 11.4884C18.3934 11.2311 18.4811 10.9358 18.482 10.6345C18.4794 10.2111 18.3093 9.80406 18.0053 9.49404C17.7013 9.18402 17.2857 8.99365 16.8407 8.96065C16.7949 8.95316 16.7485 8.94939 16.702 8.94936H13.6929V14.8513H17.0271C17.5418 14.8235 18.0258 14.6102 18.3803 14.255C18.7347 13.8998 18.9328 13.4295 18.934 12.9404ZM16.9002 13.5535H15.0606V12.3235H16.702L16.809 12.316L16.92 12.3235C17.0911 12.3245 17.2548 12.3894 17.3758 12.5042C17.4968 12.6189 17.5652 12.7743 17.5662 12.9366C17.5662 12.9479 17.5623 12.9592 17.5623 12.9705C17.5504 13.2977 17.2451 13.5535 16.9002 13.5535ZM16.702 10.2471C16.7554 10.2466 16.8084 10.2562 16.8579 10.2752C16.9074 10.2943 16.9525 10.3225 16.9905 10.3581C17.0284 10.3938 17.0586 10.4363 17.0792 10.4831C17.0997 10.5299 17.1103 10.5801 17.1103 10.6308V10.6646C17.1013 10.7641 17.053 10.8566 16.975 10.9236C16.897 10.9906 16.7952 11.0271 16.6901 11.0258H15.0606V10.2471H16.702Z"/>
        </svg>
    );
};

export default SvgAbTesting;
