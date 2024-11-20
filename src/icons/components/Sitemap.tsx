import * as React from 'react';
import type {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  readonly size?: 'small' | 'default' | 'big';
  readonly color?: 'red' | 'yellow' | 'green' | 'blue' | 'darkBlue' | 'purple' | 'gray';
  readonly className?: string;
}
const SvgSitemap = ({
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
            <path d="M18.0823 16.5715C17.53 16.5715 17.0823 17.0192 17.0823 17.5715V20.5715C17.0823 21.1238 17.53 21.5715 18.0823 21.5715H22.0823C22.6346 21.5715 23.0823 21.1238 23.0823 20.5715V17.5715C23.0823 17.0192 22.6346 16.5715 22.0823 16.5715H20.8906V14.323C20.8906 12.8042 19.6594 11.573 18.1406 11.573L12.7343 11.573L12.7343 8.3342C14.0282 8.00116 14.9843 6.82659 14.9843 5.42871C14.9843 3.77186 13.6411 2.42871 11.9843 2.42871C10.3274 2.42871 8.98425 3.77186 8.98425 5.42871C8.98425 6.82659 9.94033 8.00117 11.2343 8.3342L11.2343 11.573L5.828 11.573C4.30922 11.573 3.078 12.8042 3.078 14.323L3.078 16.5715H1.91785C1.36556 16.5715 0.917847 17.0192 0.917847 17.5715L0.917847 20.5715C0.917847 21.1238 1.36556 21.5715 1.91785 21.5715H5.91785C6.47013 21.5715 6.91785 21.1238 6.91785 20.5715V17.5715C6.91785 17.0192 6.47013 16.5715 5.91785 16.5715H4.578V14.323C4.578 13.6326 5.13765 13.073 5.828 13.073L11.2343 13.073V16.5715H9.98437C9.43209 16.5715 8.98438 17.0192 8.98437 17.5715L8.98437 20.5715C8.98437 21.1238 9.43209 21.5715 9.98437 21.5715L13.9844 21.5715C14.5367 21.5715 14.9844 21.1238 14.9844 20.5715L14.9844 17.5715C14.9844 17.0192 14.5367 16.5715 13.9844 16.5715H12.7343V13.073L18.1406 13.073C18.831 13.073 19.3906 13.6326 19.3906 14.323V16.5715H18.0823Z"/>
        </svg>
    );
};

export default SvgSitemap;
