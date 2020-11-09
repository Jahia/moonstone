import * as React from 'react';
type TIconSize = 'small' | 'default' | 'big';
interface IIconProps extends React.SVGProps<SVGSVGElement> {
  size?: TIconSize;
  className?: string;
}

const SvgArrowUp = ({
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
      <path d="M13 21V6.83l3.59 3.58L18 9l-6-6-6 6 1.41 1.41L11 6.83V21h2z" />
    </svg>
  );
};

const MemoSvgArrowUp = React.memo(SvgArrowUp);
export default MemoSvgArrowUp;
