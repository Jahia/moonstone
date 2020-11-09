import * as React from 'react';
type TIconSize = 'small' | 'default' | 'big';
interface IIconProps extends React.SVGProps<SVGSVGElement> {
  size?: TIconSize;
  className?: string;
}

const SvgCut = ({ size = 'default', className, ...otherProps }: IIconProps) => {
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
        d="M9.876 8.076c.207-.45.324-.945.324-1.476C10.2 4.611 8.589 3 6.6 3A3.599 3.599 0 003 6.6c0 1.989 1.611 3.6 3.6 3.6.531 0 1.026-.117 1.476-.324L10.2 12l-2.124 2.124A3.507 3.507 0 006.6 13.8 3.599 3.599 0 003 17.4C3 19.389 4.611 21 6.6 21s3.6-1.611 3.6-3.6c0-.531-.117-1.026-.324-1.476L12 13.8l6.3 6.3H21v-.9L9.876 8.076zM6.6 8.4a1.8 1.8 0 11-.001-3.599A1.8 1.8 0 016.6 8.4zm0 10.8a1.8 1.8 0 11-.001-3.599A1.8 1.8 0 016.6 19.2zm5.4-6.75a.446.446 0 01-.45-.45c0-.252.198-.45.45-.45s.45.198.45.45-.198.45-.45.45zm6.3-8.55l-5.4 5.4 1.8 1.8L21 4.8v-.9h-2.7z"
      />
    </svg>
  );
};

export default SvgCut;
