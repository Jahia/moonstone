import * as React from 'react';
type TIconSize = 'small' | 'default' | 'big';
interface IIconProps extends React.SVGProps<SVGSVGElement> {
  size?: TIconSize;
  className?: string;
}

const SvgFileCompresed = ({
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
        d="M4.01 4c0-1.1.89-2 1.99-2v2h2v2H6v2h2v2H6v2h2v2H6v5h4v-7H8v-2h2V8H8V6h2V4H8V2h6l6 6v12c0 1.1-.9 2-2 2H5.99C4.89 22 4 21.1 4 20l.01-16zM13 3.5V9h5.5L13 3.5z"
      />
      <path d="M7 17v1h2v-1H7z" />
    </svg>
  );
};

export default SvgFileCompresed;
