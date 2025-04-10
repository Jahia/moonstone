import type {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  readonly size?: 'small' | 'default' | 'big';
  readonly color?: 'red' | 'yellow' | 'green' | 'blue' | 'darkBlue' | 'purple' | 'gray';
  readonly className?: string;
}
const SvgPasteAsReference = ({
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
            <path d="M9 12.14C7.974 12.14 7.14 12.974 7.14 14C7.14 15.026 7.974 15.86 9 15.86H11.4V17H9C7.344 17 6 15.656 6 14C6 12.344 7.344 11 9 11H11.4V12.14H9Z"/>
            <path d="M14.4 14.6H9.6V13.4H14.4V14.6Z"/>
            <path d="M12.6 11H15C16.656 11 18 12.344 18 14C18 15.656 16.656 17 15 17H12.6V15.86H15C16.026 15.86 16.86 15.026 16.86 14C16.86 12.974 16.026 12.14 15 12.14H12.6V11Z"/>
            <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.82 3H19C20.1 3 21 3.9 21 5V21C21 22.1 20.1 23 19 23H5C3.9 23 3 22.1 3 21V5C3 3.9 3.9 3 5 3H9.18C9.6 1.84 10.7 1 12 1C13.3 1 14.4 1.84 14.82 3ZM12.9999 4.00001C12.9999 3.45001 12.5499 3.00001 11.9999 3.00001C11.4499 3.00001 10.9999 3.45001 10.9999 4.00001C10.9999 4.55001 11.4499 5.00001 11.9999 5.00001C12.5499 5.00001 12.9999 4.55001 12.9999 4.00001ZM5.00005 21H19V5H17V8H7.00005V5H5.00005V21Z"
      />
        </svg>
    );
};

export default SvgPasteAsReference;
