export type ClearFiltersProps = Omit<React.ComponentPropsWithoutRef<'button'>, 'children' | 'className' | 'onClick' | 'color'> & {
    /**
     * Called when the user clicks the button. Clear the value of every filter there: the bar holds no value
     * @param event - The click on the button.
     */
    onClick: (event: React.MouseEvent) => void;

    /**
     * Texts of the component, shown on screen or read by screen readers. Translate them with the rest of the UI.
     */
    i18n?: {
        /**
         * Label of the button
         * @default 'Clear all'
         */
        label?: string;
    };

    /**
     * Additional class name
     */
    className?: string;
};
