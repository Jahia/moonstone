import type {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  readonly size?: 'small' | 'default' | 'big';
  readonly color?: 'red' | 'yellow' | 'green' | 'blue' | 'darkBlue' | 'purple' | 'gray';
  readonly className?: string;
}
const SvgWebPage = ({
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
            <path d="M19.2 4H4.8C3.81 4 3.009 4.9 3.009 6L3 18C3 19.1 3.81 20 4.8 20H19.2C20.19 20 21 19.1 21 18V6C21 4.9 20.19 4 19.2 4ZM4.8 9H14.25V12.5H4.8V9ZM4.8 14.5H14.25V18H5.7C5.205 18 4.8 17.55 4.8 17V14.5ZM18.3 18H16.05V9H19.2V17C19.2 17.55 18.795 18 18.3 18Z"/>
        </svg>
    );
};

export default SvgWebPage;
