import * as React from 'react';
type TIconSize = 'small' | 'default' | 'big';
interface IIconProps extends React.SVGProps<SVGSVGElement> {
  size?: TIconSize;
  className?: string;
}

const SvgForm = ({
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
        d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13zm-3 4a1 1 0 011-1h5a1 1 0 110 2h-5a1 1 0 01-1-1zm-2 1a1 1 0 100-2 1 1 0 000 2zm2 3a1 1 0 011-1h5a1 1 0 110 2h-5a1 1 0 01-1-1zm-2 1a1 1 0 100-2 1 1 0 000 2z"
      />
    </svg>
  );
};

export default SvgForm;
