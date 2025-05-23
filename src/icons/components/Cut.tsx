import type {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  readonly size?: 'small' | 'default' | 'big';
  readonly color?: 'red' | 'yellow' | 'green' | 'blue' | 'darkBlue' | 'purple' | 'gray';
  readonly className?: string;
}
const SvgCut = ({
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
        d="M9.876 8.076C10.083 7.626 10.2 7.131 10.2 6.6C10.2 4.611 8.589 3 6.6 3C4.611 3 3 4.611 3 6.6C3 8.589 4.611 10.2 6.6 10.2C7.131 10.2 7.626 10.083 8.076 9.876L10.2 12L8.076 14.124C7.626 13.917 7.131 13.8 6.6 13.8C4.611 13.8 3 15.411 3 17.4C3 19.389 4.611 21 6.6 21C8.589 21 10.2 19.389 10.2 17.4C10.2 16.869 10.083 16.374 9.876 15.924L12 13.8L18.3 20.1H21V19.2L9.876 8.076ZM6.6 8.4C5.61 8.4 4.8 7.599 4.8 6.6C4.8 5.601 5.61 4.8 6.6 4.8C7.59 4.8 8.4 5.601 8.4 6.6C8.4 7.599 7.59 8.4 6.6 8.4ZM6.6 19.2C5.61 19.2 4.8 18.399 4.8 17.4C4.8 16.401 5.61 15.6 6.6 15.6C7.59 15.6 8.4 16.401 8.4 17.4C8.4 18.399 7.59 19.2 6.6 19.2ZM12 12.45C11.748 12.45 11.55 12.252 11.55 12C11.55 11.748 11.748 11.55 12 11.55C12.252 11.55 12.45 11.748 12.45 12C12.45 12.252 12.252 12.45 12 12.45ZM18.3 3.9L12.9 9.3L14.7 11.1L21 4.8V3.9H18.3Z"
      />
        </svg>
    );
};

export default SvgCut;
