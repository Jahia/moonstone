import * as React from 'react';
import {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: 'small' | 'default' | 'big';
  color?: 'red' | 'yellow' | 'green' | 'blue' | 'purple' | 'gray';
  className?: string;
}

const SvgFileDoc = ({
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
        d="M13.875 2H5.875C4.775 2 3.875 2.9 3.875 4V20C3.875 21.1 4.765 22 5.865 22H17.875C18.975 22 19.875 21.1 19.875 20V8L13.875 2ZM17.875 13.5H5.875V4H12.875V9H17.875V13.5ZM14.5024 7.32814V5.10474L16.6084 7.32814H14.5024ZM14.21 17.9388C14.21 18.6595 14.0332 19.2073 13.6797 19.5823C13.3262 19.9573 12.8086 20.1448 12.127 20.1448C11.4551 20.1448 10.9395 19.9564 10.5801 19.5794C10.2227 19.2025 10.0439 18.6536 10.0439 17.9329C10.0439 17.22 10.2217 16.6761 10.5771 16.3011C10.9346 15.9241 11.4531 15.7357 12.1328 15.7357C12.8145 15.7357 13.3311 15.9222 13.6826 16.2952C14.0342 16.6683 14.21 17.2161 14.21 17.9388ZM11.2627 17.9388C11.2627 18.7669 11.5508 19.181 12.127 19.181C12.4199 19.181 12.6367 19.0804 12.7773 18.8792C12.9199 18.678 12.9912 18.3646 12.9912 17.9388C12.9912 17.511 12.9189 17.1956 12.7744 16.9925C12.6318 16.7874 12.418 16.6849 12.1328 16.6849C11.5527 16.6849 11.2627 17.1028 11.2627 17.9388ZM9.43164 17.8538C9.43164 18.5687 9.23438 19.1194 8.83984 19.5062C8.44727 19.8929 7.89453 20.0862 7.18164 20.0862H5.7959V15.803H7.27832C7.96582 15.803 8.49609 15.9788 8.86914 16.3304C9.24414 16.6819 9.43164 17.1898 9.43164 17.8538ZM8.23047 17.8948C8.23047 17.5023 8.15234 17.2112 7.99609 17.0218C7.8418 16.8323 7.60645 16.7376 7.29004 16.7376H6.95312V19.137H7.21094C7.5625 19.137 7.82031 19.0355 7.98438 18.8323C8.14844 18.6273 8.23047 18.3148 8.23047 17.8948ZM16.2461 17.0306C16.4004 16.804 16.6152 16.6907 16.8906 16.6907C17.0723 16.6907 17.2422 16.7161 17.4004 16.7669C17.5586 16.8177 17.7168 16.8802 17.875 16.9544L18.2295 16.0433C17.8076 15.8421 17.3652 15.7415 16.9023 15.7415C16.4785 15.7415 16.1094 15.8323 15.7949 16.014C15.4824 16.1937 15.2422 16.4515 15.0742 16.7874C14.9082 17.1234 14.8252 17.513 14.8252 17.9564C14.8252 18.6653 14.9971 19.2073 15.3408 19.5823C15.6865 19.9573 16.1826 20.1448 16.8291 20.1448C17.2803 20.1448 17.6846 20.0657 18.042 19.9075V18.929C17.8623 19.0032 17.6836 19.0667 17.5059 19.1194C17.3281 19.1722 17.1445 19.1985 16.9551 19.1985C16.3281 19.1985 16.0146 18.7864 16.0146 17.9622C16.0146 17.5657 16.0918 17.2552 16.2461 17.0306Z"
      />
        </svg>
    );
};

export default SvgFileDoc;
