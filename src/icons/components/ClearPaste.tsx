import type {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  readonly size?: 'small' | 'default' | 'big';
  readonly color?: 'red' | 'yellow' | 'green' | 'blue' | 'darkBlue' | 'purple' | 'gray';
  readonly className?: string;
}
const SvgClearPaste = ({
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
        d="M19 3H14.82C14.4 1.84 13.3 1 12 1C10.7 1 9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V21C3 22.1 3.9 23 5 23H19C20.1 23 21 22.1 21 21V5C21 3.9 20.1 3 19 3ZM11.9999 3.00001C12.5499 3.00001 12.9999 3.45001 12.9999 4.00001C12.9999 4.55001 12.5499 5.00001 11.9999 5.00001C11.4499 5.00001 10.9999 4.55001 10.9999 4.00001C10.9999 3.45001 11.4499 3.00001 11.9999 3.00001ZM19 21H5.00005V5H7.00005V8H17V5H19V21Z"
      />
            <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.2946 14L15.6238 11.6708L14.3292 10.3762L12 12.7054L9.67087 10.3762L8.37627 11.6708L10.7054 14L8.37627 16.3292L9.67087 17.6238L12 15.2946L14.3292 17.6238L15.6238 16.3292L13.2946 14Z"
      />
        </svg>
    );
};

export default SvgClearPaste;
