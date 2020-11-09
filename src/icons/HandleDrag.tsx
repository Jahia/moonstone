import * as React from 'react';
type TIconSize = 'small' | 'default' | 'big';
interface IIconProps extends React.SVGProps<SVGSVGElement> {
  size?: TIconSize;
  className?: string;
}

const SvgHandleDrag = ({
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
      <path d="M11.333 16c0 .733-.6 1.333-1.333 1.333s-1.333-.6-1.333-1.333.6-1.333 1.333-1.333 1.333.6 1.333 1.333zM10 10.667c-.733 0-1.333.6-1.333 1.333s.6 1.333 1.333 1.333 1.333-.6 1.333-1.333-.6-1.333-1.333-1.333zm0-4c-.733 0-1.333.6-1.333 1.333s.6 1.333 1.333 1.333 1.333-.6 1.333-1.333-.6-1.333-1.333-1.333zm4 2.666c.733 0 1.333-.6 1.333-1.333s-.6-1.333-1.333-1.333-1.333.6-1.333 1.333.6 1.333 1.333 1.333zm0 1.334c-.733 0-1.333.6-1.333 1.333s.6 1.333 1.333 1.333 1.333-.6 1.333-1.333-.6-1.333-1.333-1.333zm0 4c-.733 0-1.333.6-1.333 1.333s.6 1.333 1.333 1.333 1.333-.6 1.333-1.333-.6-1.333-1.333-1.333z" />
    </svg>
  );
};

const MemoSvgHandleDrag = React.memo(SvgHandleDrag);
export default MemoSvgHandleDrag;
