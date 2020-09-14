import * as React from 'react';
type TIconSize = 'small' | 'default' | 'big';
interface IIconProps extends React.SVGProps<SVGSVGElement> {
  size?: TIconSize;
  className?: string;
}

const SvgGroup = ({
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
        d="M13 8a4 4 0 11-8 0 4 4 0 018 0zM19 17c0-1.68-.96-2.94-2.33-3.87 2.76.4 6.33 1.69 6.33 3.87v3h-4v-3zM15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24a5.98 5.98 0 010 7.52c.42.14.86.24 1.33.24zM1 17c0-2.66 5.33-4 8-4s8 1.34 8 4v3H1v-3z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SvgGroup;
