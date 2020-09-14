import * as React from 'react';
type TIconSize = 'small' | 'default' | 'big';
interface IIconProps extends React.SVGProps<SVGSVGElement> {
  size?: TIconSize;
  className?: string;
}

const SvgUndelete = ({
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
        d="M6.514 4l1.999 2H19V4h-3.5l-1-1h-5l-1 1H6.514z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 8.318l-3-3 1.27-1.27L21 20.788l-1.26 1.26-2.025-2.022c-.35.582-.99.974-1.715.974H8c-1.1 0-2-.9-2-2V8.318zm10 9.994V19H8v-8.683a37688.8 37688.8 0 008 7.995z"
        fill="currentColor"
      />
      <path d="M9.512 7l2 2H16v4.492l2 2V7H9.512z" fill="currentColor" />
    </svg>
  );
};

export default SvgUndelete;
