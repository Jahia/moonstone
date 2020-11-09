import * as React from 'react';
type TIconSize = 'small' | 'default' | 'big';
interface IIconProps extends React.SVGProps<SVGSVGElement> {
  size?: TIconSize;
  className?: string;
}

const SvgTune = ({
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
        d="M4 16.444v1.778h5.333v-1.778H4zM4 5.778v1.778h8.889V5.778H4zM12.889 20v-1.778H20v-1.778h-7.111v-1.777H11.11V20h1.778zM7.556 9.333v1.778H4v1.778h3.556v1.778h1.777V9.333H7.556zM20 12.89V11.11h-8.889v1.778H20zm-5.333-3.556h1.777V7.556H20V5.778h-3.556V4h-1.777v5.333z"
      />
    </svg>
  );
};

const MemoSvgTune = React.memo(SvgTune);
export default MemoSvgTune;
