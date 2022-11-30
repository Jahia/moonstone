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
    readOnly?: boolean
    /**
     * Props for list item
     */
    listItemProps?: (value: any) => React.AllHTMLAttributes<any>,
    /**
     * Props for icon at the start of list item
     */
    iconStartProps?: (value: any) => React.AllHTMLAttributes<any>,
}
