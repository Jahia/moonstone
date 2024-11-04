import * as React from 'react';
import {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  readonly size?: 'small' | 'default' | 'big';
  readonly color?: 'red' | 'yellow' | 'green' | 'blue' | 'darkBlue' | 'purple' | 'gray';
  readonly className?: string;
}

const SvgRotateRight = ({
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
            <path d="M16.2759 6.2879L10.849 1V4.56788C6.14972 5.13735 2.5 9.04226 2.5 13.7839C2.5 18.5256 6.13779 22.4305 10.849 23V20.6524C7.46171 20.0946 4.88544 17.2356 4.88544 13.7839C4.88544 10.3323 7.46171 7.47332 10.849 6.91548V11.4596L16.2759 6.2879ZM21.5 12.6218C21.2972 11.0063 20.6412 9.44902 19.5678 8.1009L17.8741 9.75119C18.5182 10.6228 18.9237 11.6107 19.0907 12.6218H21.5ZM13.2345 20.6408V22.9884C14.8923 22.7908 16.5025 22.1632 17.8861 21.1173L16.1686 19.4437C15.274 20.0713 14.2721 20.4781 13.2345 20.6408ZM17.8741 17.8283L19.5678 19.467C20.6412 18.1189 21.2972 16.5615 21.5 14.9461H19.0907C18.9237 15.9572 18.5182 16.9451 17.8741 17.8283V17.8283Z"/>
        </svg>
    );
};

export default SvgRotateRight;
