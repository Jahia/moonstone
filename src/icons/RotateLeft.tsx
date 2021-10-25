import * as React from 'react';
type TIconSize = 'small' | 'default' | 'big';
interface IIconProps extends React.SVGProps<SVGSVGElement> {
  size?: TIconSize;
  className?: string;
}

const SvgRotateLeft = ({
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
      <path d="M6.126 9.751l-1.682-1.65C3.371 9.449 2.703 11.006 2.5 12.62h2.41a6.802 6.802 0 011.216-2.87zm-1.217 5.195H2.5c.203 1.615.859 3.173 1.932 4.521l1.682-1.65a6.87 6.87 0 01-1.205-2.87zm1.205 6.183A9.587 9.587 0 0010.765 23v-2.36a7.153 7.153 0 01-2.934-1.196l-1.717 1.685zM13.15 4.568V1L7.724 6.288l5.427 5.172V6.915c3.387.558 5.964 3.417 5.964 6.869s-2.577 6.31-5.964 6.868V23c4.711-.57 8.349-4.474 8.349-9.216 0-4.742-3.638-8.647-8.349-9.216z" />
    </svg>
  );
};

export default SvgRotateLeft;
