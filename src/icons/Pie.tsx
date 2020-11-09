import * as React from 'react';
type TIconSize = 'small' | 'default' | 'big';
interface IIconProps extends React.SVGProps<SVGSVGElement> {
  size?: TIconSize;
  className?: string;
}

const SvgPie = ({ size = 'default', className, ...otherProps }: IIconProps) => {
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
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M11 21a8 8 0 008-8h-8V5a8 8 0 100 16z" />
      <path d="M21 11a8 8 0 00-8-8v8h8z" />
    </svg>
  );
};

export default SvgPie;
