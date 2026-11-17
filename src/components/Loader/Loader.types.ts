export type LoaderProps = Omit<React.ComponentPropsWithoutRef<'svg'>, 'className'> & {
    /**
     * Additional classname
     */
    className?: string;

    /**
     * Loader size
     */
    size?: 'small' | 'medium' | 'big';

    /**
     * Whether the component should use reversed colors, it useful with dark background
     */
    isReversed?: boolean;

    /**
     * Texts of the component, shown on screen or read by screen readers. Translate them with the rest of the UI.
     */
    i18n?: {
        /**
         * Accessible name of the loader
         * @default 'Loading'
         */
        loadingLabel?: string;
    };
};
