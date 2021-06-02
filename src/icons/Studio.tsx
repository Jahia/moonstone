import * as React from 'react';
type TIconSize = 'small' | 'default' | 'big';
interface IIconProps extends React.SVGProps<SVGSVGElement> {
  size?: TIconSize;
  className?: string;
}

const SvgStudio = ({
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
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M8 21h1.946L16 4h-1.954L8 21zM3.8 13l4.6 4.6L7 19l-6-6 6-6 1.4 1.4L3.8 13zM20.2 13l-4.6 4.6L17 19l6-6-6-6-1.4 1.4 4.6 4.6z" />
    </svg>
  );
};

export default SvgStudio;
