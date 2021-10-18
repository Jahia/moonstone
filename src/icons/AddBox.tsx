import * as React from 'react';
type TIconSize = 'small' | 'default' | 'big';
interface IIconProps extends React.SVGProps<SVGSVGElement> {
  size?: TIconSize;
  className?: string;
}

const SvgAddBox = ({
  size = 'default',
  className = '',
  ...otherProps
}: IIconProps) => {
  const props = Object.assign(
    {},
    {
      size,
      className,
      ...otherProps
    }
  );
  props.className = className + ' moonstone-icon moonstone-icon_' + size;
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
        d="M19.778 2H4.222C2.99 2 2 3 2 4.222v15.556C2 21 2.989 22 4.222 22h15.556C21 22 22 21 22 19.778V4.222C22 3 21 2 19.778 2zm-2.223 11.111h-4.444v4.445h-2.222V13.11H6.444V10.89h4.445V6.444h2.222v4.445h4.444v2.222z"
      />
    </svg>
  );
};

export default SvgAddBox;
