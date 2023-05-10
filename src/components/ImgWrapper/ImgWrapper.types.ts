export const imgWrapperSizes = ['small', 'default', 'big'] as const;
export type ImgWrapperSize = typeof imgWrapperSizes[number];

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

