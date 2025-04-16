import type {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  readonly size?: 'small' | 'default' | 'big';
  readonly color?: 'red' | 'yellow' | 'green' | 'blue' | 'darkBlue' | 'purple' | 'gray';
  readonly className?: string;
}
const SvgFileCode = ({
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
            <path d="M10.4518 11.4232C10.4049 11.3763 10.3413 11.35 10.275 11.35C10.2087 11.35 10.1451 11.3763 10.0982 11.4232L7.69822 13.8232C7.60059 13.9209 7.60059 14.0791 7.69822 14.1768L10.0982 16.5768C10.1451 16.6237 10.2087 16.65 10.275 16.65C10.3413 16.65 10.4049 16.6237 10.4518 16.5768L11.0118 16.0168C11.1094 15.9191 11.1094 15.7609 11.0118 15.6632L9.34855 14L11.0118 12.3368C11.1094 12.2391 11.1094 12.0809 11.0118 11.9832L10.4518 11.4232Z"/>
            <path d="M13.6518 11.4232C13.6049 11.3763 13.5413 11.35 13.475 11.35C13.4087 11.35 13.3451 11.3763 13.2982 11.4232L12.7382 11.9832C12.6406 12.0809 12.6406 12.2391 12.7382 12.3368L14.4014 14L12.7382 15.6632C12.6406 15.7609 12.6406 15.9191 12.7382 16.0168L13.2982 16.5768C13.3451 16.6237 13.4087 16.65 13.475 16.65C13.5413 16.65 13.6049 16.6237 13.6518 16.5768L16.0518 14.1768C16.1494 14.0791 16.1494 13.9209 16.0518 13.8232L13.6518 11.4232Z"/>
            <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.875 2H5.875C4.775 2 3.875 2.9 3.875 4V20C3.875 21.1 4.765 22 5.865 22H17.875C18.975 22 19.875 21.1 19.875 20V8L13.875 2ZM17.875 20H5.875V4H12.875V9H17.875V20ZM14.5024 7.32814V5.10474L16.6084 7.32814H14.5024Z"
      />
        </svg>
    );
};

export default SvgFileCode;
