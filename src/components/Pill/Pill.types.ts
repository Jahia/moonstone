export type PillProps = Omit<React.ComponentPropsWithoutRef<'span'>, 'className'> & {
    /**
     * ListItem label
     */
    label: string;

    /**
     * Whether the component should use reversed colors, it useful with dark background
     */
    isReversed?: boolean;

    /**
     * Additional classname
     */
    className?: string;
}
