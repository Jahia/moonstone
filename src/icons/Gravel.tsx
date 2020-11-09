import * as React from 'react';
type TIconSize = 'small' | 'default' | 'big';
interface IIconProps extends React.SVGProps<SVGSVGElement> {
  size?: TIconSize;
  className?: string;
}

const SvgGravel = ({
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
        d="M1 21h12v2H1v-2zM5.245 8.07l2.83-2.828 14.14 14.142-2.828 2.828L5.245 8.07zM12.317 1l5.657 5.656-2.83 2.83-5.654-5.66L12.317 1zM3.826 9.484l5.657 5.657-2.828 2.828-5.657-5.657 2.828-2.828z"
      />
    </svg>
  );
};

const MemoSvgGravel = React.memo(SvgGravel);
export default MemoSvgGravel;
