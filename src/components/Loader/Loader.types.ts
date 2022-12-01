export type LoaderProps = React.ComponentPropsWithoutRef<'svg'> & {
    /**
     * Additional className
     */
    className?: string,

    /**
     * Loader size
     */
    size?: 'small' | 'medium' | 'big'

    /**
     * When it's true the Loader uses the white color instead of the accent color
     */
    isReversed?: boolean
}
