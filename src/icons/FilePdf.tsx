import * as React from 'react';
import { SVGProps } from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: 'small' | 'default' | 'big';
  color?: 'red' | 'yellow' | 'green' | 'blue' | 'purple' | 'gray';
  className?: string;
}

const SvgFilePdf = ({
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
        d="M13.875 2H5.875C4.775 2 3.875 2.9 3.875 4V20C3.875 21.1 4.765 22 5.865 22H17.875C18.975 22 19.875 21.1 19.875 20V8L13.875 2ZM17.875 13.5H5.875V4H12.875V9H17.875V13.5ZM14.5024 7.32814V5.10474L16.6084 7.32814H14.5024ZM9.73047 17.1653C9.73047 17.6438 9.58887 18.014 9.30566 18.2757C9.02441 18.5354 8.62402 18.6653 8.10449 18.6653H7.7793V20.0862H6.62207V15.803H8.10449C8.64551 15.803 9.05176 15.9212 9.32324 16.1575C9.59473 16.3938 9.73047 16.7298 9.73047 17.1653ZM7.7793 17.722H7.99023C8.16406 17.722 8.30176 17.6731 8.40332 17.5755C8.50684 17.4778 8.55859 17.3431 8.55859 17.1712C8.55859 16.8821 8.39844 16.7376 8.07812 16.7376H7.7793V17.722ZM14.0488 17.8538C14.0488 18.5687 13.8516 19.1194 13.457 19.5062C13.0645 19.8929 12.5117 20.0862 11.7988 20.0862H10.4131V15.803H11.8955C12.583 15.803 13.1133 15.9788 13.4863 16.3304C13.8613 16.6819 14.0488 17.1897 14.0488 17.8538ZM12.8477 17.8948C12.8477 17.5022 12.7695 17.2112 12.6133 17.0218C12.459 16.8323 12.2236 16.7376 11.9072 16.7376H11.5703V19.137H11.8281C12.1797 19.137 12.4375 19.0354 12.6016 18.8323C12.7656 18.6272 12.8477 18.3147 12.8477 17.8948ZM14.8193 20.0862H15.959V18.4778H17.2422V17.5491H15.959V16.7317H17.3506V15.803H14.8193V20.0862Z"
      />
    </svg>
  );
};

export default SvgFilePdf;
