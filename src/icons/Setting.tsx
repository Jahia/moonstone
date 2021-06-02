import * as React from 'react';
type TIconSize = 'small' | 'default' | 'big';
interface IIconProps extends React.SVGProps<SVGSVGElement> {
  size?: TIconSize;
  className?: string;
}

const SvgSetting = ({
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
        d="M18.941 12c0 .306-.027.594-.064.882l1.952 1.485a.446.446 0 01.11.576l-1.85 3.114a.457.457 0 01-.564.198l-2.304-.9c-.481.351-1 .657-1.563.882l-.352 2.385a.447.447 0 01-.454.378h-3.7a.447.447 0 01-.454-.378l-.351-2.385a6.808 6.808 0 01-1.564-.882l-2.304.9a.471.471 0 01-.564-.198l-1.85-3.114a.446.446 0 01.11-.576l1.952-1.485A6.946 6.946 0 015.063 12c0-.297.027-.594.064-.882L3.175 9.633a.436.436 0 01-.11-.576l1.85-3.114c.11-.198.351-.279.564-.198l2.304.9c.481-.351 1-.657 1.564-.882l.351-2.385A.447.447 0 0110.152 3h3.7c.232 0 .426.162.454.378l.352 2.385a6.81 6.81 0 011.563.882l2.304-.9a.471.471 0 01.564.198l1.85 3.114a.446.446 0 01-.11.576l-1.952 1.485c.037.288.064.576.064.882zM8.764 12c0 1.737 1.452 3.15 3.238 3.15S15.24 13.737 15.24 12c0-1.737-1.452-3.15-3.238-3.15S8.764 10.263 8.764 12z"
      />
    </svg>
  );
};

export default SvgSetting;
