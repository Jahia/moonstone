export const badgeColors = ['accent', 'success', 'danger'] as const;

export type BadgeProps = {
    /**
     * Badge label, only for type round
     */
    label?: string;

    /**
     * Badge color
     */
    color?: typeof badgeColors[number];

    /**
     * Additional classname
     */
    className?: string;
}
