import * as React from 'react';
type TIconSize = 'small' | 'default' | 'big';
interface IIconProps extends React.SVGProps<SVGSVGElement> {
  size?: TIconSize;
  className?: string;
}

const SvgFileZip = ({
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 2c-1.1 0-1.99.9-1.99 2l-.005 8H3a1 1 0 00-1 1v6a1 1 0 001 1h1c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13zM3 13h12v6H3v-6z"
      />
      <path d="M6.072 17.34H7.77V18H5.002v-.452l1.695-2.441H4.993v-.662h2.76v.44L6.073 17.34zM9.325 18H8.47v-3.555h.855V18zM11.027 16.794V18h-.857v-3.555h1.419c.272 0 .512.05.72.152.21.099.372.241.486.427.116.184.173.393.173.627 0 .347-.124.625-.373.833-.248.207-.588.31-1.02.31h-.548zm0-.662h.562c.166 0 .292-.041.378-.124a.46.46 0 00.132-.352.571.571 0 00-.134-.398.476.476 0 00-.366-.151h-.572v1.025z" />
    </svg>
  );
};

export default SvgFileZip;
