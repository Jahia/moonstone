import * as React from 'react';
type TIconSize = 'small' | 'default' | 'big';
interface IIconProps extends React.SVGProps<SVGSVGElement> {
  size?: TIconSize;
  className?: string;
}

const SvgChevronBigRight = ({
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
      <path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2 5.88 4.12z" />
    </svg>
  );
};

const MemoSvgChevronBigRight = React.memo(SvgChevronBigRight);
export default MemoSvgChevronBigRight;
