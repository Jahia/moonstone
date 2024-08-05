export const badgeColors = ['accent', 'success', 'danger'] as const;

export type BadgeProps = Omit<React.ComponentPropsWithoutRef<'div'>, 'className'> & {
    /**
     * Label displays inside the badge
     */
    label?: string;

    /**
     * Define the background color of the badge
     */
    color?: typeof badgeColors[number];

    /**
     * Additional classname
     */
    className?: string;
}
