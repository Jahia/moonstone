import type {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  readonly size?: 'small' | 'default' | 'big';
  readonly color?: 'red' | 'yellow' | 'green' | 'blue' | 'darkBlue' | 'purple' | 'gray';
  readonly className?: string;
}
const SvgNotificationsActive = ({
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
            <path d="M7.58003 4.08L6.15003 2.65C3.75003 4.48 2.17003 7.3 2.03003 10.5H4.03003C4.18003 7.85 5.54003 5.53 7.58003 4.08ZM19.97 10.5H21.97C21.82 7.3 20.24 4.48 17.85 2.65L16.43 4.08C18.45 5.53 19.82 7.85 19.97 10.5ZM18 11C18 7.93 16.36 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.63003 5.36 6.00003 7.92 6.00003 11V16L4.00003 18V19H20V18L18 16V11ZM12 22C12.14 22 12.27 21.99 12.4 21.96C13.05 21.82 13.58 21.38 13.84 20.78C13.94 20.54 13.99 20.28 13.99 20H9.99003C10 21.1 10.89 22 12 22Z"/>
        </svg>
    );
};

export default SvgNotificationsActive;
