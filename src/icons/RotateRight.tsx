import * as React from 'react';
type TIconSize = 'small' | 'default' | 'big';
interface IIconProps extends React.SVGProps<SVGSVGElement> {
  size?: TIconSize;
  className?: string;
}

const SvgRotateRight = ({
  size = 'default',
  className = '',
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
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M16.276 6.288L10.849 1v3.568c-4.7.57-8.349 4.474-8.349 9.216 0 4.742 3.638 8.646 8.349 9.216v-2.348c-3.387-.557-5.964-3.416-5.964-6.868 0-3.452 2.577-6.31 5.964-6.869v4.545l5.427-5.172zm5.224 6.334c-.203-1.616-.859-3.173-1.932-4.521l-1.694 1.65a6.654 6.654 0 011.217 2.87H21.5zm-8.265 8.019v2.347a9.588 9.588 0 004.651-1.87l-1.717-1.674a7 7 0 01-2.934 1.197zm4.64-2.813l1.693 1.639c1.073-1.348 1.73-2.905 1.932-4.52h-2.41a6.758 6.758 0 01-1.216 2.881z" />
    </svg>
  );
};

export default SvgRotateRight;
