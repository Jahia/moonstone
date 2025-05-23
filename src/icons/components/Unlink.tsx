import type {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  readonly size?: 'small' | 'default' | 'big';
  readonly color?: 'red' | 'yellow' | 'green' | 'blue' | 'darkBlue' | 'purple' | 'gray';
  readonly className?: string;
}
const SvgUnlink = ({
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
            <path d="M17 7H13V8.9H17C18.71 8.9 20.1 10.29 20.1 12C20.1 13.43 19.12 14.63 17.79 14.98L19.25 16.44C20.88 15.61 22 13.95 22 12C22 9.24 19.76 7 17 7ZM16 11H13.81L15.81 13H16V11ZM2 4.27L5.11 7.38C3.29 8.12 2 9.91 2 12C2 14.76 4.24 17 7 17H11V15.1H7C5.29 15.1 3.9 13.71 3.9 12C3.9 10.41 5.11 9.1 6.66 8.93L8.73 11H8V13H10.73L13 15.27V17H14.73L18.74 21L20 19.74L3.27 3L2 4.27Z"/>
        </svg>
    );
};

export default SvgUnlink;
