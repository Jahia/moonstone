export type AddFilterProps = Omit<React.ComponentPropsWithoutRef<'button'>, 'children' | 'className' | 'onClick' | 'color'> & {
    /**
     * Texts of the component, shown on screen or read by screen readers. Translate them with the rest of the UI.
     */
    i18n?: {
        /**
         * Label of the button, and accessible name of its menu
         * @default 'Add filter'
         */
        label?: string;
        /**
         * Accessible name of the search field of the menu
         * @default 'Search filters'
         */
        search?: string;
        /**
         * Text of the menu when the search matches no filter
         * @default 'No filter matches the search'
         */
        noMatch?: string;
    };

    /**
     * Additional class name
     */
    className?: string;
};
