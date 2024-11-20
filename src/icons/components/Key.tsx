import * as React from 'react';
import type {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  readonly size?: 'small' | 'default' | 'big';
  readonly color?: 'red' | 'yellow' | 'green' | 'blue' | 'darkBlue' | 'purple' | 'gray';
  readonly className?: string;
}
const SvgKey = ({
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
            <path d="M20.3177 10.7624L11.0131 10.7502C10.8142 10.0344 10.4513 9.36703 9.91296 8.80889C8.2276 7.06168 5.46548 7.06168 3.76841 8.82102C2.07135 10.5804 2.08305 13.4317 3.76841 15.1789C5.45377 16.9261 8.21589 16.9504 9.91296 15.1911C10.4513 14.6329 10.8142 13.9656 11.0131 13.2497H16.3501V14.73C16.3501 15.1425 16.6544 15.458 17.0523 15.458H19.2995C19.6974 15.458 20.0017 15.1425 20.0017 14.73V13.2497L20.306 13.2497C20.6337 13.2497 20.938 13.1041 21.1487 12.8857C21.3594 12.6673 21.4998 12.3518 21.4998 12.0121C21.5115 11.3205 20.9731 10.7624 20.3177 10.7624ZM5.46548 13.4196C4.71643 12.643 4.70472 11.369 5.46548 10.5804C6.22623 9.7917 7.45514 9.80383 8.20419 10.5804C8.96494 11.369 8.95324 12.643 8.20419 13.4196C7.45514 14.2204 6.22623 14.2083 5.46548 13.4196Z"/>
        </svg>
    );
};

export default SvgKey;
