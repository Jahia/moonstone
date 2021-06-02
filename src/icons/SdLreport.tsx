import * as React from 'react';
type TIconSize = 'small' | 'default' | 'big';
interface IIconProps extends React.SVGProps<SVGSVGElement> {
  size?: TIconSize;
  className?: string;
}

const SvgSdLreport = ({
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
      <path d="M12 9.5c-.07 0-.137-.005-.204-.014L9.16 14.05a1.52 1.52 0 01.235.4h5.208a1.524 1.524 0 01.238-.406L12.21 9.485c-.069.01-.139.015-.21.015zM13.221 16.128l1.175-.678H9.752l1.071.619c.275-.347.7-.569 1.177-.569.504 0 .95.248 1.221.628zM14.7 10.75a1.496 1.496 0 01-.198-.831l-1.322-.763 2.32 4.018v-1.76a1.489 1.489 0 01-.8-.664zM9.3 10.75a1.49 1.49 0 01-.9.696v1.929l2.477-4.29-1.382.797c.024.293-.038.595-.195.868z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.507 4.8h3.715C19.2 4.8 20 5.61 20 6.6v12.6c0 .99-.8 1.8-1.778 1.8H5.778C4.8 21 4 20.19 4 19.2V6.6c0-.99.8-1.8 1.778-1.8h3.715C9.867 3.756 10.844 3 12 3c1.156 0 2.133.756 2.507 1.8zM13.5 8c0 .06-.004.12-.01.18l1.402.809a1.503 1.503 0 012.408.261 1.503 1.503 0 01-.8 2.165v2.171a1.496 1.496 0 01.797 2.164 1.5 1.5 0 01-2.2.449l-1.602.924A1.502 1.502 0 0112 18.5c-.816 0-1.479-.65-1.5-1.46l-1.538-.889A1.5 1.5 0 117.4 13.625v-2.25a1.502 1.502 0 01-.7-2.125 1.502 1.502 0 012.382-.29l1.424-.822A1.502 1.502 0 0112 6.5c.83 0 1.5.67 1.5 1.5z"
      />
    </svg>
  );
};

export default SvgSdLreport;
