export type PillProps = Omit<React.ComponentPropsWithoutRef<'span'>, 'className' | 'content'> & {
    /**
     * ListItem label
     * @deprecated label is deprecated and will be removed in a future release. Use `content` instead.
     */
    label?: string;

    /**
     * Content of the Pill (text or icon element)
     */
    content?: React.ReactElement | string;

    /**
     * Whether the component should use reversed colors, it useful with dark background
     */
    isReversed?: boolean;

    /**
     * Additional classname
     */
    className?: string;
}
