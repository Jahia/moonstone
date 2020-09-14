import * as React from 'react';
type TIconSize = 'small' | 'default' | 'big';
interface IIconProps extends React.SVGProps<SVGSVGElement> {
  size?: TIconSize;
  className?: string;
}

const SvgArrowDown = ({
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
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M11 3v14.17l-3.59-3.58L6 15l6 6 6-6-1.41-1.41L13 17.17V3h-2z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SvgArrowDown;
