import type {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  readonly size?: 'small' | 'default' | 'big';
  readonly color?: 'red' | 'yellow' | 'green' | 'blue' | 'darkBlue' | 'purple' | 'gray';
  readonly className?: string;
}
const SvgText = ({
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
        d="M6.41574 5.39287V7.64364C6.41574 8.00454 6.0988 8.2971 5.70787 8.2971C5.31692 8.2971 5 8.00454 5 7.64364V4.73943C5 4.67034 5.01161 4.60376 5.03313 4.54126C5.12403 4.27723 5.39175 4.08594 5.70787 4.08594H18.2921C18.5366 4.08594 18.7519 4.20022 18.8792 4.37404C18.9555 4.47834 19 4.60406 19 4.7394V4.73943V7.64364C19 8.00454 18.6832 8.2971 18.2921 8.2971C17.9012 8.2971 17.5843 8.00454 17.5843 7.64364V5.39287H12.8652V18.6074H14.7597C15.1506 18.6074 15.4676 18.9 15.4676 19.2608C15.4676 19.6218 15.1506 19.9143 14.7597 19.9143H9.25405C8.8631 19.9143 8.54618 19.6218 8.54618 19.2608C8.54618 18.9 8.8631 18.6074 9.25405 18.6074H11.1349V5.39287H6.41574Z"
      />
        </svg>
    );
};

export default SvgText;
