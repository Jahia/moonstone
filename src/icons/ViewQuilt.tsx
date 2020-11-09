import * as React from 'react';
type TIconSize = 'small' | 'default' | 'big';
interface IIconProps extends React.SVGProps<SVGSVGElement> {
  size?: TIconSize;
  className?: string;
}

const SvgViewQuilt = ({
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
      <path d="M10 19h5v-6h-5v6zm-6 0h5V6H4v13zm12 0h5v-6h-5v6zM10 6v6h11V6H10z" />
    </svg>
  );
};

const MemoSvgViewQuilt = React.memo(SvgViewQuilt);
export default MemoSvgViewQuilt;
