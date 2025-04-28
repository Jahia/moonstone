import type {SVGProps} from 'react';
interface IconProps extends SVGProps<SVGSVGElement> {
  readonly size?: 'small' | 'default' | 'big';
  readonly color?: 'red' | 'yellow' | 'green' | 'blue' | 'darkBlue' | 'purple' | 'gray';
  readonly className?: string;
}
const SvgPassword = ({
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
            <path d="M0.761391 7.97084L2.39956 7.02344L2.87314 7.85231L3.15927 8.34571L3.4454 7.85231L3.91899 7.02344L5.55715 7.97084L5.08357 8.7997L4.79744 9.29311H6.31708V11.1879H4.79744L5.08357 11.6813L5.55715 12.5003L3.91899 13.4477L3.4454 12.6287L3.15927 12.1353L2.87314 12.6287L2.39956 13.4477L0.761391 12.5003L1.23497 11.6813L1.5211 11.1879H0.00146484V9.29311H1.5211L1.23497 8.7997L0.761391 7.97084Z"/>
            <path d="M9.63258 7.97084L11.2707 7.02344L11.7443 7.85231L12.0305 8.34571L12.3166 7.85231L12.7902 7.02344L14.4283 7.97084L13.9548 8.7997L13.6686 9.29311H15.1885V11.1879H13.6686L13.9548 11.6813L14.4283 12.5003L12.7902 13.4477L12.3166 12.6287L12.0305 12.1353L11.7443 12.6287L11.2707 13.4477L9.63258 12.5003L10.1062 11.6813L10.3923 11.1879H8.87265V9.29311H10.3923L10.1062 8.7997L9.63258 7.97084Z"/>
            <path d="M18.4446 7.97084L20.0827 7.02344L20.5563 7.85231L20.8424 8.34571L21.1286 7.85231L21.6021 7.02344L23.2403 7.97084L22.7667 8.7997L22.4806 9.29311H24.0002V11.1879H22.4806L22.7667 11.6813L23.2403 12.5003L21.6021 13.4477L21.1286 12.6287L20.8424 12.1353L20.5563 12.6287L20.0827 13.4477L18.4446 12.5003L18.9181 11.6813L19.2043 11.1879H17.6846V9.29311H19.2043L18.9181 8.7997L18.4446 7.97084Z"/>
            <path d="M0.00146484 16.3841V15.3841H6.31708V16.3841H0.00146484Z"/>
            <path d="M8.8421 15.3841V16.3841H15.1577V15.3841H8.8421Z"/>
            <path d="M17.6827 16.3841V15.3841H23.9984V16.3841H17.6827Z"/>
        </svg>
    );
};

export default SvgPassword;
