import * as React from 'react';
type TIconSize = 'small' | 'default' | 'big';
interface IIconProps extends React.SVGProps<SVGSVGElement> {
  size?: TIconSize;
  className?: string;
}

const SvgHome = ({
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
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z" />
    </svg>
  );
};

const MemoSvgHome = React.memo(SvgHome);
export default MemoSvgHome;
