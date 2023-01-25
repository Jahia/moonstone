import * as React from 'react';
import {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: 'small' | 'default' | 'big';
  color?: 'red' | 'yellow' | 'green' | 'blue' | 'darkBlue' | 'purple' | 'gray';
  className?: string;
}

const SvgJContent = ({
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
        d="M11.2932 18L14.0012 18V15.292L6.01445 7.3053L3.30647 10.0133L11.2932 18ZM3.9192 5.21122C3.63757 4.92959 3.18263 4.92959 2.901 5.21122L1.21122 6.901C0.929593 7.18263 0.929593 7.63757 1.21122 7.9192L2.53271 9.24069L5.24069 6.53271L3.9192 5.21122Z"
      />
            <path d="M14.0012 16H11V17.7068L11.2932 18L14.0012 18V16Z"/>
            <path d="M12.7091 14H9V12H10.7091L12.7091 14Z"/>
            <path d="M14.1232 14L12.123 12H17V14H14.1232Z"/>
            <path d="M15.0012 16V18H17V16H15.0012Z"/>
            <path d="M7 15.121V20H19V9H14V4H7V6.87768L5 4.87781V4C5 2.9 5.9 2 7 2H15L21 8V20C21 21.1 20.1 22 19 22H6.99C5.89 22 5 21.1 5 20V13.121L7 15.121Z"/>
            <path d="M7 13.7068V8.29086L6.01445 7.3053L5 8.31975V11.7068L7 13.7068Z"/>
            <path d="M5 6.7734L5.24069 6.53271L5 6.29202V6.7734Z"/>
        </svg>
    );
};

export default SvgJContent;
