export type PillProps = Omit<React.ComponentPropsWithoutRef<'span'>, 'className' | 'children'> & {
    /**
     * Label of the pill
     * @deprecated Use `children` instead.
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
