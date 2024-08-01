export const imgWrapperSizes = ['small', 'default', 'big'] as const;

export type ImgWrapperProps = {
    /**
     * Image URL
     */
    src: string;
    /**
     * Image size
     */
    size?: typeof imgWrapperSizes[number];
    /**
     * Extra CSS class
     */
    className?: string;
}

