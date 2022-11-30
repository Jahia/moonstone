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
export type MultipleLeftRightSelectorProps = {
    /**
     * Add all button title
     */
    addAllTitle?: string,
    /**
     * Remove all button title
     */
    removeAllTitle?: string,
    /**
     * Options for left list
     */
    options?: Option[],
    /**
     * Picked values, these are option values which should be recorded in onChange
     */
    arrayValue?: string[],
    /**
     * Read only flag
     */
    readOnly?: boolean,
    /**
     * Function, called everytime the use picks an option, receives array of string values as parameter
     * @param v
     */
    onChange: (v: string[]) => void
}
