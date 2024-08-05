import React from 'react';

type Value = {
    /**
     * Value or id
     */
    value: string,
    /**
     * Value lable
     */
    label: string,
    /**
     * Index in list
     */
    index?: number,
    /**
     * Item is temporary
     */
    tempItem?: boolean
}

export type ValueListProps = {
    /**
     * List values
     */
    values?: Value[]
    /**
     * Set filter
     */
    setFilter: (filter: string) => void,
    /**
     * Orientation of the list (left side / right side)
     */
    iconEnd: React.ReactElement,
    /**
     * Dragged item value/id
     */
    draggedId?: string
    /**
     * Read only
     */
    isReadOnly?: boolean
    /**
     * Additional classes for <ul> element
     */
    listClasses?: string[],
    /**
     * List role
     */
    role: string,
    /**
     * OnClick callback
     */
    onClick: (e:React.MouseEvent, value: Value) => void
    /**
     * OnDragStart callback
     */
    onDragStart: (e:React.DragEvent, value: Value) => void
    /**
     * OnDragEnd callback
     */
    onDragEnd: (e:React.DragEvent, value: Value) => void
    /**
     * OnDragOver callback
     */
    onDragOver: (e:React.DragEvent, value: Value) => void
    /**
     * OnDrop callback
     */
    onDrop: (e:React.DragEvent, value: Value) => void
}
