import * as React from 'react';
type TIconSize = 'small' | 'default' | 'big';
interface IIconProps extends React.SVGProps<SVGSVGElement> {
  size?: TIconSize;
  className?: string;
}

const SvgKey = ({ size = 'default', className, ...otherProps }: IIconProps) => {
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
      <path d="M20.318 10.762l-9.305-.012a4.518 4.518 0 00-1.1-1.941 4.247 4.247 0 00-6.145.012c-1.697 1.76-1.685 4.61 0 6.358 1.686 1.747 4.448 1.771 6.145.012a4.519 4.519 0 001.1-1.941h5.337v1.48c0 .412.304.728.702.728H19.3c.398 0 .703-.316.703-.728v-1.48h.304c.328 0 .632-.146.843-.364.21-.219.35-.534.35-.874.013-.692-.526-1.25-1.181-1.25zM5.465 13.42a2.063 2.063 0 010-2.84 1.89 1.89 0 012.74 0c.76.789.748 2.063 0 2.84-.75.8-1.979.788-2.74 0z" />
    </svg>
  );
};

export default SvgKey;
