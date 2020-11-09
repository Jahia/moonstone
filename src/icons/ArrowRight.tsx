import * as React from 'react';
type TIconSize = 'small' | 'default' | 'big';
interface IIconProps extends React.SVGProps<SVGSVGElement> {
  size?: TIconSize;
  className?: string;
}

const SvgArrowRight = ({
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
      <path d="M3 13h14.17l-3.58 3.59L15 18l6-6-6-6-1.41 1.41L17.17 11H3v2z" />
    </svg>
  );
};

const MemoSvgArrowRight = React.memo(SvgArrowRight);
export default MemoSvgArrowRight;
