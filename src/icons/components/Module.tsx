import * as React from 'react';
import {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: 'small' | 'default' | 'big';
  color?: 'red' | 'yellow' | 'green' | 'blue' | 'darkBlue' | 'purple' | 'gray';
  className?: string;
}

const SvgModule = ({
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
            <path d="M4 9.90343C4 9.3367 4.63708 8.99532 5.11961 9.30349L11.0666 13.1016C11.2729 13.2334 11.3975 13.4592 11.3975 13.7015V20.284C11.3975 20.8507 10.7604 21.1921 10.2779 20.8839L4.33088 17.0858C4.12455 16.954 4 16.7282 4 16.4858V9.90343Z"/>
            <path d="M12.6025 20.284C12.6025 20.8507 13.2396 21.1921 13.7221 20.8839L19.6691 17.0858C19.8754 16.954 20 16.7282 20 16.4858V9.90343C20 9.3367 19.3629 8.99532 18.8804 9.30349L12.9334 13.1016C12.7271 13.2334 12.6025 13.4592 12.6025 13.7015V20.284Z"/>
            <path d="M11.4913 3.13546C11.7732 2.95485 12.1659 2.95485 12.4478 3.13546L18.5667 7.05617C18.9745 7.31745 18.974 7.82922 18.5658 8.08998L12.4469 11.9984C12.1654 12.1782 11.7738 12.1782 11.4923 11.9984L5.37336 8.08998C4.96512 7.82922 4.96465 7.31745 5.37241 7.05617L11.4913 3.13546Z"/>
        </svg>
    );
};

export default SvgModule;
