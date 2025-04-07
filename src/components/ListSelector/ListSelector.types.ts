type Label = {
    /**
     * Title of the right list
     */
    rightListTitle?: string,
    /**
     * Title of the left list
     */
    leftListTitle?: string,
    /**
     * Add all button title
     */
    addAllTitle?: string,
    /**
     * Remove all button title
     */
    removeAllTitle?: string,
    /**
     * Label for number of items selected, use values to determine the number
     */
    selected: string,
}

export type Option = {
    /**
     * Option label
     */
    label: string,
    /**
     * Option value
     */
    value: string
}

export type ListSelectorSelectorProps = Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange'> & {
    /**
     * Labels for component
     */
    label: Label
    /**
     * Options for left list
     */
    options?: Option[],
    /**
     * Picked values, these are option values which should be recorded in onChange
     */
    values?: string[],
    /**
     * Whether the component cannot be modified
     */
    isReadOnly?: boolean,
    /**
     * Function, called everytime the user picks an option, receives array of string values as parameter
     * @param v
     */
    onChange: (v: string[]) => void
}
