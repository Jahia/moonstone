export type LoaderProps = Omit<React.ComponentPropsWithoutRef<'svg'>, 'className'> & {
    /**
     * Additional classname
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
