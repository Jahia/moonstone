export type ImgWrapperSize = 'small' | 'default' | 'big';
export const imgWrapperSizes = ['small', 'default', 'big'];

export type ImgWrapperProps = React.ComponentPropsWithoutRef<'div'> &{
    /**
     * Image URL
     */
    src: string;
    /**
     * Image size
     */
    size?: ImgWrapperSize;
    /**
     * Extra CSS class
     */
    className?: string;
}

