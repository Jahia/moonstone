export type Value = {
    value: string,
    label: string,
    index?: number
}

export type ValueListProps = {
    /**
     * List values
     */
    values?: Value[]
    /**
     * Filter
     */
    filter?: string
    /**
     * Set filter
     */
    setFilter: (filter: string) => void,
    /**
     * Function called on move
     */
    onMove: (value: string[]) => void,
    /**
     * Orientation of the list (left side / right side)
     */
    orientation: 'left' | 'right',
    /**
     * Dragged item value/id
     */
    draggedId?: string
    /**
     * Read only
     */
    isReadOnly?: boolean
    /**
     * Props for list item
     */
    listItemProps?: (value: any) => React.AllHTMLAttributes<any>,
    /**
     * Props for icon at the start of list item
     */
    iconStartProps?: (value: any) => React.AllHTMLAttributes<any>,
    /**
     * List props
     * @param values
     */
    listProps?: (values: any) => React.AllHTMLAttributes<any>,
}
