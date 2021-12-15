import * as React from 'react';
import { SVGProps } from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: 'small' | 'default' | 'big';
  color?: 'red' | 'yellow' | 'green' | 'blue' | 'purple' | 'gray';
  className?: string;
}

const SvgFilePowerPoint = ({
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
        d="M13.875 2H5.875C4.775 2 3.875 2.9 3.875 4V20C3.875 21.1 4.765 22 5.865 22H17.875C18.975 22 19.875 21.1 19.875 20V8L13.875 2ZM17.875 13.5H5.875V4H12.875V9H17.875V13.5ZM14.5024 7.32814V5.10474L16.6084 7.32814H14.5024ZM9.88281 17.1653C9.88281 17.6438 9.74121 18.014 9.45801 18.2757C9.17676 18.5354 8.77637 18.6653 8.25684 18.6653H7.93164V20.0862H6.77441V15.803H8.25684C8.79785 15.803 9.2041 15.9212 9.47559 16.1575C9.74707 16.3938 9.88281 16.7298 9.88281 17.1653ZM7.93164 17.722H8.14258C8.31641 17.722 8.4541 17.6731 8.55566 17.5755C8.65918 17.4778 8.71094 17.3431 8.71094 17.1712C8.71094 16.8821 8.55078 16.7376 8.23047 16.7376H7.93164V17.722ZM13.6738 17.1653C13.6738 17.6438 13.5322 18.014 13.249 18.2757C12.9678 18.5354 12.5674 18.6653 12.0479 18.6653H11.7227V20.0862H10.5654V15.803H12.0479C12.5889 15.803 12.9951 15.9212 13.2666 16.1575C13.5381 16.3938 13.6738 16.7298 13.6738 17.1653ZM11.7227 17.722H11.9336C12.1074 17.722 12.2451 17.6731 12.3467 17.5755C12.4502 17.4778 12.502 17.3431 12.502 17.1712C12.502 16.8821 12.3418 16.7376 12.0215 16.7376H11.7227V17.722ZM15.0889 20.0862H16.2461V16.7493H17.2891V15.803H14.043V16.7493H15.0889V20.0862Z"
      />
    </svg>
  );
};

export default SvgFilePowerPoint;
