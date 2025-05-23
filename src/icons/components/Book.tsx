import type {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  readonly size?: 'small' | 'default' | 'big';
  readonly color?: 'red' | 'yellow' | 'green' | 'blue' | 'darkBlue' | 'purple' | 'gray';
  readonly className?: string;
}
const SvgBook = ({
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
            <path d="M21 4C19.89 3.65 18.67 3.5 17.5 3.5C15.55 3.5 13.45 3.9 12 5C10.55 3.9 8.45 3.5 6.5 3.5C4.55 3.5 2.45 3.9 1 5V19.65C1 19.9 1.25 20.15 1.5 20.15C1.6 20.15 1.65 20.1 1.75 20.1C3.1 19.45 5.05 19 6.5 19C8.45 19 10.55 19.4 12 20.5C13.35 19.65 15.8 19 17.5 19C19.15 19 20.85 19.3 22.25 20.05C22.35 20.1 22.4 20.1 22.5 20.1C22.75 20.1 23 19.85 23 19.6V5C22.4 4.55 21.75 4.25 21 4ZM21 17.5C19.9 17.15 18.7 17 17.5 17C15.8 17 13.35 17.65 12 18.5V7C13.35 6.15 15.8 5.5 17.5 5.5C18.7 5.5 19.9 5.65 21 6V17.5Z"/>
        </svg>
    );
};

export default SvgBook;
