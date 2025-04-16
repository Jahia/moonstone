import type {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  readonly size?: 'small' | 'default' | 'big';
  readonly color?: 'red' | 'yellow' | 'green' | 'blue' | 'darkBlue' | 'purple' | 'gray';
  readonly className?: string;
}
const SvgStudio = ({
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
            <path d="M8 21H9.94573L16 4H14.0461L8 21Z"/>
            <path d="M3.8 13L8.4 17.6L7 19L1 13L7 7L8.4 8.4L3.8 13Z"/>
            <path d="M20.2 13L15.6 17.6L17 19L23 13L17 7L15.6 8.4L20.2 13Z"/>
        </svg>
    );
};

export default SvgStudio;
