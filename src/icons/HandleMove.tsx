import * as React from 'react';
type TIconSize = 'small' | 'default' | 'big';
interface IIconProps extends React.SVGProps<SVGSVGElement> {
  size?: TIconSize;
  className?: string;
}

const SvgHandleMove = ({
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
      <path d="M19.384 8.308v2.83l-3.545-.012v1.748l3.545-.013v2.83L23.075 12l-3.691-3.692zM8.308 4.617h2.83l-.012 11.222h1.748L12.86 4.617h2.83L12 .925 8.308 4.617zM4.617 15.692v-2.83l11.222.012v-1.748l-11.222.013v-2.83L.925 12l3.692 3.692zm11.075 3.692h-2.83l.012-3.545h-1.748l.013 3.545h-2.83L12 23.075l3.692-3.691z" />
    </svg>
  );
};

export default SvgHandleMove;
