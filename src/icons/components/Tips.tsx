import type {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  readonly size?: 'small' | 'default' | 'big';
  readonly color?: 'red' | 'yellow' | 'green' | 'blue' | 'darkBlue' | 'purple' | 'gray';
  readonly className?: string;
}
const SvgTips = ({
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
            <path d="M12 3C11.54 3 11.07 3.04 10.6 3.14C7.84001 3.67 5.64001 5.9 5.12001 8.66C4.64001 11.27 5.60001 13.67 7.34001 15.22C7.77001 15.6 8.00001 16.13 8.00001 16.69V19C8.00001 20.1 8.90001 21 10 21H10.28C10.63 21.6 11.26 22 12 22C12.74 22 13.38 21.6 13.72 21H14C15.1 21 16 20.1 16 19V16.69C16 16.14 16.22 15.6 16.64 15.23C18.09 13.95 19 12.08 19 10C19 6.13 15.87 3 12 3ZM14 19H10V18H14V19ZM14 17H10V16H14V17Z"/>
        </svg>
    );
};

export default SvgTips;
