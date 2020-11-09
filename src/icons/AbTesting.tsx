import * as React from 'react';
type TIconSize = 'small' | 'default' | 'big';
interface IIconProps extends React.SVGProps<SVGSVGElement> {
  size?: TIconSize;
  className?: string;
}

const SvgAbTesting = ({
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
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M3.5 5.5v13h17v-13h-17zm16.279 12.312h-7.383V6.188h7.383v11.624zm-9.008-2.968H9.395l-.123-.399-.424-1.185H7.001l-.428 1.166-.155.418-1.28-.023.241-.767 1.677-4.6.198-.497h1.352l.183.496 1.673 4.6.309.79zm-3.338-2.776l.491-1.34.488 1.34h-.98zm11.501.872a1.845 1.845 0 00-.187-.798 1.94 1.94 0 00-.519-.654c.165-.257.253-.552.254-.854a1.643 1.643 0 00-.477-1.14 1.82 1.82 0 00-1.164-.533.863.863 0 00-.139-.012h-3.01v5.902h3.335a2.07 2.07 0 001.353-.596c.355-.355.553-.825.554-1.315zm-2.034.614h-1.84v-1.23h1.642l.107-.008.111.007a.668.668 0 01.456.181.6.6 0 01.19.433c0 .01-.004.022-.004.034-.012.327-.317.582-.662.582zm-.198-3.307a.424.424 0 01.288.111.385.385 0 01.12.273v.034a.388.388 0 01-.135.259.43.43 0 01-.285.102h-1.63v-.779h1.642z" />
    </svg>
  );
};

const MemoSvgAbTesting = React.memo(SvgAbTesting);
export default MemoSvgAbTesting;
