import type {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  readonly size?: 'small' | 'default' | 'big';
  readonly color?: 'red' | 'yellow' | 'green' | 'blue' | 'darkBlue' | 'purple' | 'gray';
  readonly className?: string;
}
const SvgNumber = ({
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
        d="M4 0C1.79086 0 0 1.79086 0 4V20C0 22.2091 1.79086 24 4 24H20C22.2091 24 24 22.2091 24 20V4C24 1.79086 22.2091 0 20 0H4ZM8.67333 7.64969L7.10533 7.05469L4.36133 13.5437V14.8037H8.3728L8.38633 16.9457H10.1643V14.8037H11.2283V13.3967H10.1643V10.9187H8.60333L8.38506 13.3967H6.27933L8.67333 7.64969ZM17.5789 7.42569C17.1075 7.17835 16.5242 7.05469 15.8289 7.05469C15.0962 7.05469 14.4755 7.19235 13.9669 7.46769C13.4582 7.73835 13.0195 8.12102 12.6509 8.61569L13.8129 9.49769C14.0835 9.14769 14.3589 8.89569 14.6389 8.74169C14.9235 8.58302 15.2689 8.50369 15.6749 8.50369C16.1322 8.50369 16.4869 8.63202 16.7389 8.88869C16.9955 9.14535 17.1239 9.49535 17.1239 9.93869C17.1239 10.2 17.0819 10.4614 16.9979 10.7227C16.9139 10.984 16.7739 11.2664 16.5779 11.5697C16.3865 11.8684 16.1252 12.2067 15.7939 12.5847C15.4672 12.9627 15.0612 13.399 14.5759 13.8937C14.0905 14.3837 13.5142 14.9507 12.8469 15.5947V16.9457H19.0419L19.2449 15.4967H14.9609C15.7215 14.82 16.3609 14.218 16.8789 13.6907C17.3969 13.1587 17.8122 12.6757 18.1249 12.2417C18.4422 11.8077 18.6709 11.3947 18.8109 11.0027C18.9509 10.6107 19.0209 10.2094 19.0209 9.79869C19.0209 9.29935 18.8995 8.84202 18.6569 8.42669C18.4142 8.00669 18.0549 7.67302 17.5789 7.42569Z"
      />
        </svg>
    );
};

export default SvgNumber;
