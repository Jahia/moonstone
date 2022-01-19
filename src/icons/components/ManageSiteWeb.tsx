import * as React from 'react';
import { SVGProps } from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: 'small' | 'default' | 'big';
  color?: 'red' | 'yellow' | 'green' | 'blue' | 'purple' | 'gray';
  className?: string;
}

const SvgManageSiteWeb = ({
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
      <path d="M10.2 12.996V15.0769H12.2307L19.2712 7.85257L17.2405 5.7716L10.2 12.996ZM20.8416 6.24329C21.0528 6.02686 21.0528 5.67726 20.8416 5.46084L19.5745 4.16232C19.3633 3.94589 19.0221 3.94589 18.8109 4.16232L17.8199 5.17783L19.8506 7.2588L20.8416 6.24329Z" />
      <path d="M11.9165 9.84615H4.73333V18.3077H16.8667V11.7079L18.6 9.92932V18.3077C18.6 19.2385 17.82 20 16.8667 20H4.73333C3.77133 20 3 19.2385 3 18.3077V8.15385C3 7.22308 3.77133 6.46154 4.73333 6.46154H15.215L11.9165 9.84615Z" />
    </svg>
  );
};

export default SvgManageSiteWeb;
