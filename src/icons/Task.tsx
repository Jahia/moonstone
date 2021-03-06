import * as React from 'react';
type TIconSize = 'small' | 'default' | 'big';
interface IIconProps extends React.SVGProps<SVGSVGElement> {
  size?: TIconSize;
  className?: string;
}

const SvgTask = ({
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.4 4.8h-3.762C14.26 3.756 13.27 3 12.1 3c-1.17 0-2.16.756-2.538 1.8H5.8c-.99 0-1.8.81-1.8 1.8v12.6c0 .99.81 1.8 1.8 1.8h12.6c.99 0 1.8-.81 1.8-1.8V6.6c0-.99-.81-1.8-1.8-1.8zm-6.3 0c.495 0 .9.405.9.9s-.405.9-.9.9a.903.903 0 01-.9-.9c0-.495.405-.9.9-.9zm1.8 12.6H7.6v-1.8h6.3v1.8zm2.7-3.6h-9V12h9v1.8zm0-3.6h-9V8.4h9v1.8z"
      />
    </svg>
  );
};

export default SvgTask;
