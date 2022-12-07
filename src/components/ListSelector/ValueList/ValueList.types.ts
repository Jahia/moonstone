export type Value = {
    value: string,
    label: string,
    index?: number
}

export type Label = {
    /**
     * Label for number of items selected, before the number
     */
    selected?: string,
    /**
     * Label for number of items selected, after the number
     */
    items?: string
}

export type ValueListProps = {
    /**
     * Component labels
     */
    label?: Label
    /**
     * List values
     */
    values?: Value[]
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
}
