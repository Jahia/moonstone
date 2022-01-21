import * as React from 'react';
import { SVGProps } from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: 'small' | 'default' | 'big';
  color?: 'red' | 'yellow' | 'green' | 'blue' | 'purple' | 'gray';
  className?: string;
}

const SvgJwt = ({
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
      <path d="M13.3527 7.84196V3H10.6473V7.842L12 9.696L13.3527 7.84196L13.3527 10.146L15.5351 9.42599L18.4028 5.51999L16.2024 3.91799L13.3527 7.84196Z" />
      <path d="M10.6473 21V16.158L12 14.304L13.3527 16.158V13.854L15.5351 14.574L18.4028 18.48L16.2024 20.082L13.3527 16.158L13.3527 21H10.6473Z" />
      <path d="M7.79757 3.91799L10.6473 7.842L10.6473 10.146L8.46493 9.426L9.81764 11.298L7.61723 12L3 10.506L3.8477 7.932L8.46493 9.426L5.59717 5.51999L7.79757 3.91799Z" />
      <path d="M3 13.494L7.61723 12L9.81764 12.702L8.46494 14.574L10.6473 13.854L10.6473 16.158L7.79757 20.082L5.59717 18.48L8.46494 14.574L3.8477 16.068L3 13.494Z" />
      <path d="M15.5351 14.574L14.1824 12.702L16.3828 12L21.0001 13.494L20.1524 16.068L15.5351 14.574Z" />
      <path d="M16.3828 12L14.1824 11.298L15.5351 9.42599L20.1524 7.932L21.0001 10.506L16.3828 12Z" />
    </svg>
  );
};

export default SvgJwt;
