import * as React from 'react';
type TIconSize = 'small' | 'default' | 'big';
interface IIconProps extends React.SVGProps<SVGSVGElement> {
  size?: TIconSize;
  className?: string;
}

const SvgGroupWork = ({
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 4.5c-4.14 0-7.5 3.36-7.5 7.5 0 4.14 3.36 7.5 7.5 7.5 4.14 0 7.5-3.36 7.5-7.5 0-4.14-3.36-7.5-7.5-7.5zM9 16.125a1.876 1.876 0 11.001-3.751A1.876 1.876 0 019 16.125zM10.125 9a1.876 1.876 0 113.751.001A1.876 1.876 0 0110.125 9zM15 16.125a1.876 1.876 0 11.001-3.751A1.876 1.876 0 0115 16.125z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SvgGroupWork;
