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

export type Label = {
    /**
     * Add all button title
     */
    addAllTitle?: string,
    /**
     * Remove all button title
     */
    removeAllTitle?: string,
    /**
     * Label for number of items selected, before the number
     */
    selected?: string,
    /**
     * Label for number of items selected, after the number
     */
    items?: string
}

export type ListSelectorSelectorProps = {
    /**
     * Labels for component
     */
    label?: Label
    /**
     * Options for left list
     */
    options?: Option[],
    /**
     * Picked values, these are option values which should be recorded in onChange
     */
    values?: string[],
    /**
     * Read only flag
     */
    isReadOnly?: boolean,
    /**
     * Function, called everytime the use picks an option, receives array of string values as parameter
     * @param v
     */
    onChange: (v: string[]) => void
}
