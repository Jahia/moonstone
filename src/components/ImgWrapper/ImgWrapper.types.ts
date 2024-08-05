export const imgWrapperSizes = ['small', 'default', 'big'] as const;

export type ImgWrapperProps = Omit<React.ComponentPropsWithoutRef<'img'>, 'className' | 'src'> & {
// export type ImgWrapperProps = {
    /**
     * Image URL
     */
    src: string;
    /**
     * Image size
     */
    size?: typeof imgWrapperSizes[number];
    /**
     * Additional classname
     */
    className?: string;
}

