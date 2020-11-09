import * as React from 'react';
type TIconSize = 'small' | 'default' | 'big';
interface IIconProps extends React.SVGProps<SVGSVGElement> {
  size?: TIconSize;
  className?: string;
}

const SvgVisibility = ({
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
      <path d="M12 5C7.455 5 3.573 7.903 2 12c1.573 4.097 5.455 7 10 7 4.546 0 8.427-2.903 10-7-1.573-4.097-5.454-7-10-7zm0 11.667c-2.51 0-4.545-2.091-4.545-4.667 0-2.576 2.036-4.667 4.545-4.667 2.51 0 4.546 2.091 4.546 4.667 0 2.576-2.037 4.667-4.546 4.667zM12 9.2c-1.51 0-2.727 1.25-2.727 2.8 0 1.55 1.218 2.8 2.727 2.8 1.51 0 2.727-1.25 2.727-2.8 0-1.55-1.218-2.8-2.727-2.8z" />
    </svg>
  );
};

const MemoSvgVisibility = React.memo(SvgVisibility);
export default MemoSvgVisibility;
