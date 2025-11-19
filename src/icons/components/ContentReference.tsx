import type {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  readonly size?: 'small' | 'default' | 'big';
  readonly color?: 'red' | 'yellow' | 'green' | 'blue' | 'darkBlue' | 'purple' | 'gray';
  readonly className?: string;
}
const SvgContentReference = ({
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
            <path d="M15.6572 17.0713L14.2422 18.4854C13.8535 18.8742 13.6592 19.3457 13.6592 19.8994C13.6592 20.4532 13.8535 20.9246 14.2422 21.3135C14.6311 21.7024 15.1033 21.8975 15.6572 21.8975C16.211 21.8974 16.6825 21.7023 17.0713 21.3135L18.4854 19.8994L19.8994 21.3135L18.4854 22.7275C17.7076 23.5053 16.7649 23.8944 15.6572 23.8945C14.5494 23.8945 13.6059 23.5054 12.8281 22.7275C12.0505 21.9498 11.6621 21.0071 11.6621 19.8994C11.6621 18.7918 12.0505 17.849 12.8281 17.0713L14.2422 15.6572L15.6572 17.0713Z"/>
            <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 8V9.31641C19.3268 9.29165 18.6504 9.37725 18 9.57324V9H13V4H6V20H9.31738C9.34242 20.6803 9.48003 21.3568 9.73047 22H5.99023C4.89023 22 4 21.1 4 20V4C4 2.9 4.9 2 6 2H14L20 8ZM14.6279 7.32812H16.7334L14.6279 5.10449V7.32812Z"
      />
            <path d="M20.6064 16.3643L16.3643 20.6064L14.9502 19.1924L19.1924 14.9502L20.6064 16.3643Z"/>
            <path d="M19.8906 11.6533C20.9924 11.6474 21.938 12.0387 22.7275 12.8281C23.5054 13.6059 23.8945 14.5494 23.8945 15.6572C23.8944 16.7649 23.5053 17.7076 22.7275 18.4854L21.3135 19.8994L19.8994 18.4854L21.3135 17.0713C21.7023 16.6825 21.8974 16.211 21.8975 15.6572C21.8975 15.1033 21.7024 14.6311 21.3135 14.2422C20.9246 13.8535 20.4532 13.6592 19.8994 13.6592C19.3457 13.6592 18.8742 13.8535 18.4854 14.2422L17.0713 15.6572L15.6572 14.2422L17.0713 12.8281C17.849 12.0505 18.7889 11.6592 19.8906 11.6533Z"/>
        </svg>
    );
};

export default SvgContentReference;
