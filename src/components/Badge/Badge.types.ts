export type BadgeColor = 'accent' | 'success' | 'danger';
export const badgeColors = ['accent', 'success', 'danger'];

export type BadgeProps = Omit<React.ComponentPropsWithoutRef<'div'>, 'className'> & {
    /**
     * Label display inside the badge
     */
    label?: string;

    /**
     * The color of the component
     */
    color?: BadgeColor;

    /**
     * Additional classnames
     */
    className?: string;
}
