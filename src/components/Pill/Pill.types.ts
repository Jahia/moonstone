export type PillProps = Omit<React.ComponentPropsWithoutRef<'span'>, 'className'> & {
    /**
     * ListItem label
     */
    label: string;

    /**
     * Reversed style for dark background with light text
     */
    isReversed?: boolean;

    /**
     * Additional classname
     */
    className?: string;
}
