import * as React from 'react';
type TIconSize = 'small' | 'default' | 'big';
interface IIconProps extends React.SVGProps<SVGSVGElement> {
  size?: TIconSize;
  className?: string;
}

const SvgSiteSettingsPublication = ({
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
      <path d="M6 8.385h3V13h5V8.385h3L11.5 3 6 8.385zM9 14h1v3H9v-3zM11 14h1v5h-1v-5zM13 14h1v7h-1v-7z" />
    </svg>
  );
};

const MemoSvgSiteSettingsPublication = React.memo(SvgSiteSettingsPublication);
export default MemoSvgSiteSettingsPublication;
