import * as React from 'react';
import { SVGProps } from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: 'small' | 'default' | 'big';
  color?: 'red' | 'yellow' | 'green' | 'blue' | 'purple' | 'gray';
  className?: string;
}

const SvgRotateLeft = ({
  size = 'default',
  className = '',
  color,
  ...otherProps
}: IconProps) => {
  const props = Object.assign(
    {},
    {
      size,
      className,
      ...otherProps
    }
  );
  const classNameColor = color ? ' moonstone-icon_' + color : '';
  props.className =
    className + ' moonstone-icon moonstone-icon_' + size + classNameColor;
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M6.12586 9.75119L4.44413 8.1009C3.37068 9.44902 2.70276 11.0063 2.5 12.6218H4.90929C5.07627 11.6107 5.49372 10.6228 6.12586 9.75119V9.75119ZM4.90929 14.9461H2.5C2.70276 16.5615 3.35876 18.1189 4.4322 19.467L6.11394 17.8167C5.49372 16.9451 5.07627 15.9688 4.90929 14.9461V14.9461ZM6.11394 21.1289C7.49749 22.1749 9.10766 22.8024 10.7655 23V20.6408C9.72787 20.4665 8.72599 20.0713 7.83145 19.4437L6.11394 21.1289ZM13.151 4.56788V1L7.72411 6.2879L13.151 11.4596V6.91548C16.5383 7.47332 19.1146 10.3323 19.1146 13.7839C19.1146 17.2356 16.5383 20.0946 13.151 20.6524V23C17.8622 22.4305 21.5 18.5256 21.5 13.7839C21.5 9.04226 17.8622 5.13735 13.151 4.56788Z" />
    </svg>
  );
};

export default SvgRotateLeft;
