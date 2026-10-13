export const imgWrapperSizes = ['small', 'default', 'big'] as const;

export type ImgWrapperProps = Omit<React.ComponentPropsWithoutRef<'img'>, 'className' | 'src'> & {
// Export type ImgWrapperProps = {
    /**
     * Image URL
     */
    src: string;
    /**
     * Text alternative of the image, use an empty string for a decorative image
     */
    alt: string;
    /**
     * Image size
     */
    size?: typeof imgWrapperSizes[number];
    /**
     * Additional classname
     */
    className?: string;
};
