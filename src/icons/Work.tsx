import * as React from 'react';
type TIconSize = 'small' | 'default' | 'big';
interface IIconProps extends React.SVGProps<SVGSVGElement> {
  size?: TIconSize;
  className?: string;
}

const SvgWork = ({
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
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 7.5h-3V6c0-.832-.668-1.5-1.5-1.5h-3C9.668 4.5 9 5.168 9 6v1.5H6c-.832 0-1.492.668-1.492 1.5L4.5 17.25c0 .832.668 1.5 1.5 1.5h12c.832 0 1.5-.668 1.5-1.5V9c0-.832-.668-1.5-1.5-1.5zm-4.5 0h-3V6h3v1.5z"
      />
    </svg>
  );
};

export default SvgWork;
