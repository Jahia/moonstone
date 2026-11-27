import type React from 'react';

/**
 * What the function form of the FilterChip content receives
 */
export type FilterChipRenderContext = {
    /**
     * Closes the popup and gives the focus back to the chip.
     * Call it first in content that opens its own dialog, so that the dialog is not hidden behind the popup
     */
    close: () => void;
};

export type FilterChipProps = Omit<React.ComponentPropsWithoutRef<'span'>, 'children' | 'className'> & {
    /**
     * Unique key of the filter in its CollectionBar
     */
    filterKey: string;

    /**
     * Name of the filter, on the chip, as the title of its popup, and in the AddFilter menu
     */
    label: string;

    /**
     * Text of the applied value, after the name. Leave it empty when the filter has no value
     */
    valueLabel?: string;

    /**
     * Controls that edit the value, such as an Input or a CheckboxGroup. The chip opens them in a popup.
     * The function form gets a `close`
     */
    children: React.ReactNode | ((context: FilterChipRenderContext) => React.ReactNode);

    /**
     * Whether the chip shows only once the user adds it with AddFilter: then while its popup is open or while it has a value
     * @default false
     */
    isAddable?: boolean;

    /**
     * Icon of the filter in the AddFilter menu
     */
    iconStart?: React.ReactElement;

    /**
     * Whether the chip and its clear button are disabled
     * @default false
     */
    isDisabled?: boolean;

    /**
     * Called when the user clicks the clear button, shown while the filter has a value, or presses Delete or Backspace on the chip.
     * Without it, the chip shows no clear button
     * @param event - The click on the clear button, which the keys trigger too.
     */
    onClear?: (event: React.MouseEvent) => void;

    /**
     * Texts of the component, shown on screen or read by screen readers. Translate them with the rest of the UI.
     */
    i18n?: {
        /**
         * Accessible name and tooltip of the clear button
         * @default 'Clear the <label> filter'
         */
        clear?: string;
        /**
         * Accessible name of the button that leads back to the AddFilter menu, in a popup that the menu opened
         * @default 'Back to the filters'
         */
        back?: string;
    };

    /**
     * Additional class name
     */
    className?: string;
};
