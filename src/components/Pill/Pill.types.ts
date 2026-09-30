export type PillProps = Omit<React.ComponentPropsWithoutRef<'span'>, 'className' | 'children'> & {
    /**
     * ListItem label
     * @deprecated label is deprecated and will be removed in a future release. Use `children` instead.
     */
    label?: string;

    /**
     * Content of the Pill (text or icon element)
     */
    children: React.ReactElement | string;

    /**
     * Whether the component should use reversed colors, it useful with dark background
     */
    isReversed?: boolean;

    /**
     * Additional classname
     */
    className?: string;
};
