import type {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  readonly size?: 'small' | 'default' | 'big';
  readonly color?: 'red' | 'yellow' | 'green' | 'blue' | 'darkBlue' | 'purple' | 'gray';
  readonly className?: string;
}
const SvgComments = ({
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
            <path d="M21 6H19V15H6V17C6 17.55 6.45 18 7 18H18L22 22V7C22 6.45 21.55 6 21 6ZM17 12V3C17 2.45 16.55 2 16 2H3C2.45 2 2 2.45 2 3V17L6 13H16C16.55 13 17 12.55 17 12Z"/>
        </svg>
    );
};

export default SvgComments;
