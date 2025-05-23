import type {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  readonly size?: 'small' | 'default' | 'big';
  readonly color?: 'red' | 'yellow' | 'green' | 'blue' | 'darkBlue' | 'purple' | 'gray';
  readonly className?: string;
}
const SvgNotices = ({
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
            <path d="M20 10.76C19.23 10.59 18.38 10.5 17.5 10.5C15.7 10.5 14.13 10.85 13 11.49V9.83C14.26 9.29 15.8 9 17.5 9C18.36 9 19.21 9.09 20 9.24V10.76Z"/>
            <path d="M13 12.49V14.15C14.13 13.51 15.7 13.16 17.5 13.16C18.38 13.16 19.23 13.25 20 13.42V11.9C19.21 11.75 18.36 11.66 17.5 11.66C15.8 11.66 14.26 11.96 13 12.49Z"/>
            <path d="M13 15.16C14.26 14.62 15.8 14.33 17.5 14.33C18.36 14.33 19.21 14.41 20 14.57V16.09C19.23 15.92 18.38 15.83 17.5 15.83C15.7 15.83 14.13 16.18 13 16.82V15.16Z"/>
            <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.5 4.5C18.67 4.5 19.89 4.65 21 5C21.75 5.25 22.4 5.55 23 6V20.6C23 20.85 22.75 21.1 22.5 21.1C22.4 21.1 22.35 21.1 22.25 21.05C20.85 20.3 19.15 20 17.5 20C15.8 20 13.35 20.65 12 21.5C10.55 20.4 8.45 20 6.5 20C5.05 20 3.1 20.45 1.75 21.1C1.7 21.1 1.6625 21.1125 1.625 21.125C1.5875 21.1375 1.55 21.15 1.5 21.15C1.25 21.15 1 20.9 1 20.65V6C2.45 4.9 4.55 4.5 6.5 4.5C8.45 4.5 10.55 4.9 12 6C13.45 4.9 15.55 4.5 17.5 4.5ZM17.5 18C18.7 18 19.9 18.15 21 18.5V7C19.9 6.65 18.7 6.5 17.5 6.5C15.8 6.5 13.35 7.15 12 8V19.5C13.35 18.65 15.8 18 17.5 18Z"
      />
        </svg>
    );
};

export default SvgNotices;
