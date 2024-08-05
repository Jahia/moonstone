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
     * When it's true the Loader uses the white color instead of the accent color
     */
    isReversed?: boolean
}
