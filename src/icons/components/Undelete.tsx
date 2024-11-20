import * as React from 'react';
import type {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  readonly size?: 'small' | 'default' | 'big';
  readonly color?: 'red' | 'yellow' | 'green' | 'blue' | 'darkBlue' | 'purple' | 'gray';
  readonly className?: string;
}
const SvgUndelete = ({
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
            <path d="M6.51408 4L8.51288 6H19V4H15.5L14.5 3H9.5L8.5 4H6.51408Z"/>
            <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 8.31768C4.99995 7.31783 3.99995 6.31792 3 5.31797L4.27 4.04797L21 20.788L19.74 22.048C19.065 21.3738 18.3901 20.6997 17.7152 20.0255C17.3646 20.6081 16.7258 21 16 21H8C6.9 21 6 20.1 6 19V8.31768ZM16 18.3121V19H8V10.3171C10.6663 12.9825 13.3329 15.6475 16 18.3121Z"
      />
            <path d="M9.51229 7L11.5111 9H16V13.4916L18 15.4928V7H9.51229Z"/>
        </svg>
    );
};

export default SvgUndelete;
