import * as React from 'react';
type TIconSize = 'small' | 'default' | 'big';
interface IIconProps extends React.SVGProps<SVGSVGElement> {
  size?: TIconSize;
  className?: string;
}

const SvgLocalSiteManager = ({
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
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M10.941 6.06c0 .575-.242 1.095-.632 1.469l.42.758c-.33.13-.64.302-.922.508l-.414-.75c-.181.05-.372.076-.57.076-1.169 0-2.117-.922-2.117-2.06S7.654 4 8.824 4s2.117.923 2.117 2.06zM8.178 12.303l-1.123.137a2.121 2.121 0 00-1.937-1.228c-1.17 0-2.118.923-2.118 2.06 0 1.139.948 2.061 2.118 2.061 1.105 0 2.013-.824 2.109-1.875l1.164-.143a3.91 3.91 0 01-.213-1.012zM12 16.944v-.951a4.2 4.2 0 001.059-.072v1.023c.913.229 1.588 1.035 1.588 1.995 0 1.138-.948 2.061-2.118 2.061s-2.117-.923-2.117-2.06c0-.96.675-1.768 1.588-1.996zM15.81 13.961l.955.332v.01c0 1.138.948 2.06 2.117 2.06 1.17 0 2.118-.922 2.118-2.06s-.948-2.06-2.118-2.06c-.792 0-1.483.423-1.846 1.05l-.833-.289c-.09.34-.223.66-.393.957zM16.36 9.456l-.568.553a4.012 4.012 0 00-.646-.828l.41-.398a2.013 2.013 0 01-.38-1.177c0-1.138.949-2.06 2.118-2.06 1.17 0 2.118.922 2.118 2.06s-.948 2.06-2.118 2.06c-.335 0-.652-.075-.933-.21zM12.25 15c1.702 0 3.082-1.343 3.082-3s-1.38-3-3.083-3c-1.703 0-3.083 1.343-3.083 3s1.38 3 3.083 3z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SvgLocalSiteManager;
