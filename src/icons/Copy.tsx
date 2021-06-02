import * as React from 'react';
type TIconSize = 'small' | 'default' | 'big';
interface IIconProps extends React.SVGProps<SVGSVGElement> {
  size?: TIconSize;
  className?: string;
}

const SvgCopy = ({
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
      <path d="M15.053 3H5.579C4.711 3 4 3.736 4 4.636v11.455h1.579V4.636h9.474V3zm-.79 3.273L19 11.182v8.182c0 .9-.71 1.636-1.579 1.636H8.73c-.868 0-1.571-.736-1.571-1.636l.008-11.455c0-.9.702-1.636 1.57-1.636h5.527zM13.473 12h4.343l-4.342-4.5V12z" />
    </svg>
  );
};

export default SvgCopy;
