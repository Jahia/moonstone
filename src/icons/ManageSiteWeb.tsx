import * as React from 'react';
type TIconSize = 'small' | 'default' | 'big';
interface IIconProps extends React.SVGProps<SVGSVGElement> {
  size?: TIconSize;
  className?: string;
}

const SvgManageSiteWeb = ({
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
      <path d="M10.2 12.996v2.08h2.03l7.041-7.223-2.03-2.081-7.041 7.224zm10.642-6.753a.562.562 0 000-.782l-1.267-1.299a.53.53 0 00-.764 0l-.991 1.016 2.03 2.08.992-1.015z" />
      <path d="M11.916 9.846H4.733v8.462h12.134v-6.6L18.6 9.929v8.379c0 .93-.78 1.692-1.733 1.692H4.733C3.771 20 3 19.238 3 18.308V8.154c0-.93.771-1.692 1.733-1.692h10.482l-3.299 3.384z" />
    </svg>
  );
};

export default SvgManageSiteWeb;
