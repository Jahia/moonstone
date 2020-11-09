import * as React from 'react';
type TIconSize = 'small' | 'default' | 'big';
interface IIconProps extends React.SVGProps<SVGSVGElement> {
  size?: TIconSize;
  className?: string;
}

const SvgViewComfy = ({
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
        d="M3 9.714h3.714V6H3v3.714zm0 4.643h3.714v-3.714H3v3.714zm4.643 0h3.714v-3.714H7.643v3.714zm4.643 0H16v-3.714h-3.714v3.714zM7.643 9.714h3.714V6H7.643v3.714zM12.286 6v3.714H16V6h-3.714zm4.642 8.357h3.715v-3.714h-3.715v3.714zM3 19h3.714v-3.714H3V19zm4.643 0h3.714v-3.714H7.643V19zm4.643 0H16v-3.714h-3.714V19zm4.642 0h3.715v-3.714h-3.715V19zm0-13v3.714h3.715V6h-3.715z"
      />
    </svg>
  );
};

const MemoSvgViewComfy = React.memo(SvgViewComfy);
export default MemoSvgViewComfy;
