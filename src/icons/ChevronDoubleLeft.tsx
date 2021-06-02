import * as React from 'react';
type TIconSize = 'small' | 'default' | 'big';
interface IIconProps extends React.SVGProps<SVGSVGElement> {
  size?: TIconSize;
  className?: string;
}

const SvgChevronDoubleLeft = ({
  size = 'default',
  className,
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
      <path d="M11 6l1.41 1.41L7.83 12l4.58 4.59L11 18l-6-6 6-6z" />
      <path d="M18 6l1.41 1.41L14.83 12l4.58 4.59L18 18l-6-6 6-6z" />
    </svg>
  );
};

export default SvgChevronDoubleLeft;
