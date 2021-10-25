import * as React from 'react';
type TIconSize = 'small' | 'default' | 'big';
interface IIconProps extends React.SVGProps<SVGSVGElement> {
  size?: TIconSize;
  className?: string;
}

const SvgWebProject = ({
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
      <path d="M20.222 4H7.778C6.79 4 6 4.731 6 5.625v9.75C6 16.269 6.791 17 7.778 17h12.444C21.2 17 22 16.269 22 15.375v-9.75C22 4.731 21.209 4 20.222 4zm0 11.375H7.778V7.25h12.444v8.125z" />
      <path d="M4 10.532c0-.294-.26-.532-.58-.532h-.84c-.32 0-.58.238-.58.532v9.936c0 .294.26.532.58.532h12.84c.32 0 .58-.238.58-.532v-.77c0-.293-.26-.531-.58-.531H4.58c-.32 0-.58-.239-.58-.533v-8.102z" />
    </svg>
  );
};

export default SvgWebProject;
