import * as React from 'react';
type TIconSize = 'small' | 'default' | 'big';
interface IIconProps extends React.SVGProps<SVGSVGElement> {
  size?: TIconSize;
  className?: string;
}

const SvgTarget = ({
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
      <path d="M11.142 11.37l1.268-1.266a2.794 2.794 0 00-3.868 1.382 2.784 2.784 0 001.7 3.734 2.794 2.794 0 002.843-.676c.478-.48.76-1.12.792-1.797l1.589-1.586c.503 1.586.149 3.383-1.118 4.644-1.794 1.796-4.706 1.796-6.472 0s-1.794-4.7 0-6.464c1.589-1.586 4.058-1.763 5.857-.53l1.174-1.177c-2.442-1.848-5.94-1.676-8.177.53-2.414 2.41-2.414 6.38 0 8.79 2.413 2.41 6.383 2.406 8.796 0A6.219 6.219 0 0016.762 9.9l1.323-1.322a8.022 8.022 0 01-1.29 9.665c-3.122 3.117-8.214 3.117-11.36 0-3.144-3.118-3.121-8.2 0-11.34 2.94-2.94 7.59-3.118 10.74-.558l1.058-1.061-.145-.763 2.586-2.588L20 3.67l1.734.326-2.586 2.582-.764-.144-1.063 1.056-1.295 1.294-1.174 1.173-1.295 1.293-1.268 1.266a1.226 1.226 0 01-.354.88 1.206 1.206 0 11-1.705-1.704c.266-.232.587-.32.913-.32z" />
    </svg>
  );
};

const MemoSvgTarget = React.memo(SvgTarget);
export default MemoSvgTarget;
