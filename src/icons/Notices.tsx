import * as React from 'react';
type TIconSize = 'small' | 'default' | 'big';
interface IIconProps extends React.SVGProps<SVGSVGElement> {
  size?: TIconSize;
  className?: string;
}

const SvgNotices = ({
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
      <path d="M20 10.76c-.77-.17-1.62-.26-2.5-.26-1.8 0-3.37.35-4.5.99V9.83c1.26-.54 2.8-.83 4.5-.83.86 0 1.71.09 2.5.24v1.52zM13 12.49v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26V11.9c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.3-4.5.83zM13 15.16c1.26-.54 2.8-.83 4.5-.83.86 0 1.71.08 2.5.24v1.52c-.77-.17-1.62-.26-2.5-.26-1.8 0-3.37.35-4.5.99v-1.66z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.5 4.5c1.17 0 2.39.15 3.5.5.75.25 1.4.55 2 1v14.6c0 .25-.25.5-.5.5-.1 0-.15 0-.25-.05-1.4-.75-3.1-1.05-4.75-1.05-1.7 0-4.15.65-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5-1.45 0-3.4.45-4.75 1.1-.05 0-.087.012-.125.025-.038.012-.075.025-.125.025-.25 0-.5-.25-.5-.5V6c1.45-1.1 3.55-1.5 5.5-1.5 1.95 0 4.05.4 5.5 1.5 1.45-1.1 3.55-1.5 5.5-1.5zm0 13.5c1.2 0 2.4.15 3.5.5V7c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5v11.5c1.35-.85 3.8-1.5 5.5-1.5z"
      />
    </svg>
  );
};

export default SvgNotices;
