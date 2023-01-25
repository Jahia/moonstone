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
     * Whether the component should use reversed colors, it useful with dark background
     */
    isReversed?: boolean
}
