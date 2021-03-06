import * as React from 'react';
type TIconSize = 'small' | 'default' | 'big';
interface IIconProps extends React.SVGProps<SVGSVGElement> {
  size?: TIconSize;
  className?: string;
}

const SvgChevronDoubleRight = ({
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
      <path d="M9.58 12L5 16.59 6.41 18l6-6-6-6L5 7.41 9.58 12z" />
      <path d="M16.99 12l-4.58 4.59L13.82 18l6-6-6-6-1.41 1.41L16.99 12z" />
    </svg>
  );
};

export default SvgChevronDoubleRight;
