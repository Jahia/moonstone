import type {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  readonly size?: 'small' | 'default' | 'big';
  readonly color?: 'red' | 'yellow' | 'green' | 'blue' | 'darkBlue' | 'purple' | 'gray';
  readonly className?: string;
}
const SvgModified = ({
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
            <path d="M12 15V12.5003L19.3723 5.12804L21.872 7.62769L14.4997 15H12Z"/>
            <path d="M23.805 4.75476C24.065 5.01472 24.065 5.43466 23.805 5.69463L22.5852 6.91446L20.0855 4.4148L21.3054 3.19497C21.5653 2.93501 21.9853 2.93501 22.2452 3.19497L23.805 4.75476Z"/>
            <path d="M12 4C13.2362 4 14.402 4.29872 15.4293 4.82839L13.915 6.34267C13.3187 6.121 12.6735 6 12 6C9.88581 6 8.04354 7.19801 7.12383 8.96387L6.62825 9.91538L5.56143 10.0288C3.55992 10.2416 2 11.9413 2 14C2 16.2054 3.79457 18 6 18H19C20.6554 18 22 16.6554 22 15C22 14.1085 21.6072 13.3078 20.9795 12.7628L22.3957 11.3466C23.3826 12.2529 24 13.5512 24 15C24 17.76 21.76 20 19 20H6C2.69 20 0 17.31 0 14C0 10.91 2.34 8.36 5.35 8.04C6.6 5.64 9.11 4 12 4Z"/>
        </svg>
    );
};

export default SvgModified;
