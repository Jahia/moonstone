import * as React from 'react';
type TIconSize = 'small' | 'default' | 'big';
interface IIconProps extends React.SVGProps<SVGSVGElement> {
  size?: TIconSize;
  className?: string;
}

const SvgMinimize = ({
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
      <path d="M19.41 10.59l-2.3-2.3L20 5.42 18.58 4l-2.87 2.89-2.3-2.3v6h6zM13.41 19.465l2.3-2.3 2.87 2.89 1.42-1.42-2.89-2.87 2.3-2.3h-6v6zM4.59 13.465l2.3 2.3L4 18.635l1.42 1.42 2.87-2.89 2.3 2.3v-6h-6zM10.59 4.59l-2.3 2.3L5.42 4 4 5.42l2.89 2.87-2.3 2.3h6v-6z" />
    </svg>
  );
};

export default SvgMinimize;
