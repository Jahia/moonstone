export type BadgeColor = 'accent' | 'success' | 'danger';
export const badgeColors = ['accent', 'success', 'danger'];

export type BadgeProps = React.ComponentPropsWithoutRef<'div'> & {
    /**
     * Badge label, only for type round
     */
    label?: string;

    /**
     * Badge color
     */
    color?: BadgeColor;

    /**
     * Additional classname
     */
    className?: string;
}
