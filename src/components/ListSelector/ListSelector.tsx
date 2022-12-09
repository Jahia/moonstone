/* Disabled lint due to incompatibility of Button with regular props, work on this is in progress */
/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import React, {useState, useCallback, useRef} from 'react';
import {ValueList} from './ValueList';
import {Button, Typography} from '~/components';
import {ChevronDoubleLeft, ChevronDoubleRight} from '~/icons';
import type {ListSelectorSelectorProps, Option} from './ListSelector.types';
import './ListSelector.scss';
import clsx from 'clsx';

const DATA_TYPES = {
    MLRS_DRAG_TO_REORDER: 'MLRS_DRAG_TO_REORDER',
    MLRS_DRAG_TO_MOVE: 'MLRS_DRAG_TO_MOVE'
};

export const FAKE_VALUE = 'dnd_move_in_progress';

export const ListSelector: React.FC<ListSelectorSelectorProps> = ({
    label = {
        addAllTitle: 'Add all',
        removeAllTitle: 'Remove all',
        selected: 'Selected',
        items: 'items'
    },
    options = [],
    values = [],
    isReadOnly,
    onChange,
    ...props
}) => {
    const [draggedId, setDraggedId] = useState(null);
    // Value for temporary fake move
    const [moved, setMoved] = useState(null);
    const dnd = useRef({
        dragging: null
    });

    // Drag handle for the left list props
    const leftListIconStartProps = useCallback(value => ({
        draggable: true,
        onDragStart: (e: React.DragEvent) => {
            const ct = e.currentTarget;
            setTimeout(() => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                ct.parentNode.parentNode.style.opacity = '0';
            }, 10);
            e.dataTransfer.setData(DATA_TYPES.MLRS_DRAG_TO_MOVE, JSON.stringify({type: DATA_TYPES.MLRS_DRAG_TO_MOVE, value: value}));
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setDragImage(e.currentTarget.parentNode.parentNode as Element, 10, 10);
            dnd.current.dragging = value;
        },
        onDragEnd: (e: React.DragEvent) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            e.currentTarget.parentNode.parentNode.style.opacity = '1';
            setMoved(null);
            dnd.current.dragging = null;
        }
    }), []);

    const leftListItemProps = useCallback(value => ({
        role: 'left-list',
        onDragOver: (e: React.DragEvent) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
        },
        onDrop: (e: React.DragEvent) => {
            e.preventDefault();
            onChange(values.filter(val => val !== dnd.current.dragging.value));
            setDraggedId(null);
            dnd.current.dragging = null;
        },
        onClick: (e: React.MouseEvent) => {
            e.preventDefault();
            e.stopPropagation();
            onChange(values.concat(value.value));
        }
    }), [values, onChange]);

    // Drag handle for the right list
    const rightListIconStartProps = useCallback(value => ({
        draggable: true,
        onDragStart: (e: React.DragEvent) => {
            const ct = e.currentTarget;
            setTimeout(() => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                ct.parentNode.parentNode.style.opacity = '0';
            }, 10);
            e.dataTransfer.setData(DATA_TYPES.MLRS_DRAG_TO_REORDER, JSON.stringify({type: DATA_TYPES.MLRS_DRAG_TO_REORDER, value: value}));
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setDragImage(e.currentTarget.parentNode.parentNode as Element, 10, 10);
            dnd.current.dragging = value;
            setDraggedId(value.value);
        },
        onDragEnd: (e: React.DragEvent) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            e.currentTarget.parentNode.parentNode.style.opacity = '1';
            // Did not drop on required target, restore original state
            if (dnd.current.dragging !== null && dnd.current.dragging.originalIndex) {
                const current = values[dnd.current.dragging.index];
                values.splice(dnd.current.dragging.index, 1);
                values.splice(dnd.current.dragging.originalIndex, 0, current);
                onChange([...values]);
            }

            setDraggedId(null);
            dnd.current.dragging = null;
        }
    }), [values, onChange]);

    // Right list item drag props
    const rightListItemProps = useCallback(value => ({
        role: 'right-list',
        onDragOver: (e: React.DragEvent) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';

            // Perform move of the item within the list
            if (e.dataTransfer.types.includes(DATA_TYPES.MLRS_DRAG_TO_REORDER.toLowerCase())) {
                if (dnd.current.dragging && dnd.current.dragging.index !== value.index) {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const clientOffset = {x: e.clientX, y: e.clientY};
                    const targetMidPointY = rect.y + (rect.height / 2);

                    // Avoid triggering change for adjacent target
                    if (clientOffset.y < targetMidPointY && value.index > dnd.current.dragging.index) {
                        return;
                    }

                    // Avoid triggering change for adjacent target
                    if (clientOffset.y > targetMidPointY && value.index < dnd.current.dragging.index) {
                        return;
                    }

                    const m = values[value.index];

                    if (!dnd.current.dragging.originalIndex) {
                        dnd.current.dragging.originalIndex = dnd.current.dragging.index;
                    }

                    values[value.index] = values[dnd.current.dragging.index];
                    values[dnd.current.dragging.index] = m;
                    dnd.current.dragging.index = value.index;
                    onChange([...values]);
                }
            }

            // Handle repositioning when moving from another list
            if (e.dataTransfer.types.includes(DATA_TYPES.MLRS_DRAG_TO_MOVE.toLowerCase())) {
                if (moved && value.value !== FAKE_VALUE) {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const clientOffset = {x: e.clientX, y: e.clientY};
                    const targetMidPointY = rect.y + (rect.height / 2);
                    // Avoid triggering change for adjacent target
                    if (clientOffset.y < targetMidPointY && value.index > dnd.current.dragging.index) {
                        return;
                    }

                    // Avoid triggering change for adjacent target
                    if (clientOffset.y > targetMidPointY && value.index < dnd.current.dragging.index) {
                        return;
                    }

                    dnd.current.dragging.index = value.index;
                    setMoved((m: Option) => ({
                        ...m,
                        index: value.index
                    }));
                    return;
                }

                // Set fake value/id to simulate a move from another list
                if (dnd.current.dragging && dnd.current.dragging.value !== value.value && !dnd.current.dragging.moved) {
                    dnd.current.dragging.index = value.index;
                    dnd.current.dragging.moved = true;
                    setMoved({index: value.index, value: FAKE_VALUE, label: dnd.current.dragging.label});
                }
            }
        },
        onDrop: (e: React.DragEvent) => {
            e.preventDefault();
            // Confirms drop and prevents reordering onDragEnd
            if ((e.dataTransfer.types.includes(DATA_TYPES.MLRS_DRAG_TO_REORDER.toLowerCase()) && value.value === dnd.current.dragging.value)) {
                dnd.current.dragging = null;
            }

            if (e.dataTransfer.types.includes(DATA_TYPES.MLRS_DRAG_TO_MOVE.toLowerCase()) && dnd.current.dragging && dnd.current.dragging.moved) {
                values.splice(dnd.current.dragging.index, 0, dnd.current.dragging.value);
                dnd.current.dragging = null;
            }
        },
        onClick: (e: React.MouseEvent) => {
            e.preventDefault();
            e.stopPropagation();
            onChange(values.filter(val => val !== value.value));
        }
    }), [values, moved, onChange]);

    const [filterLeft, setFilterLeft] = useState(null);
    const [filterRight, setFilterRight] = useState(null);

    const valuesLeft = options
        .filter(o => !values.includes(o.value))
        .filter(v => ((!filterLeft || filterLeft === '') || v.label.toLowerCase().indexOf(filterLeft.toLowerCase()) !== -1));
    const valuesRight = values
        .map(v => options.find(o => o.value === v))
        .filter(v => ((!filterRight || filterRight === '') || v.label.toLowerCase().indexOf(filterRight.toLowerCase()) !== -1));

    if (moved) {
        valuesRight.splice(moved.index, 0, moved);
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return (
        <div className={clsx('flexRow_nowrap', 'moonstone-multipleSelector')} {...props}>
            <div>
                <ValueList orientation="left"
                           isReadOnly={isReadOnly}
                           values={valuesLeft}
                           filter={filterLeft}
                           setFilter={setFilterLeft}
                           iconStartProps={leftListIconStartProps}
                           listItemProps={leftListItemProps}
                           onMove={v => onChange(values.concat(v))}
                />
            </div>
            <div className="moonstone-buttonSection">
                <div className="moonstone-buttons">
                    <Button title={label.addAllTitle}
                            role="add-all"
                            variant="ghost"
                            isDisabled={isReadOnly}
                            icon={<ChevronDoubleRight/>}
                            onClick={() => onChange([...valuesRight, ...valuesLeft].map(o => o.value))}
                    />
                    <Button title={label.removeAllTitle}
                            role="remove-all"
                            variant="ghost"
                            isDisabled={isReadOnly}
                            icon={<ChevronDoubleLeft/>}
                            onClick={() => onChange(values.filter(v => !valuesRight.find(o => o.value === v)))}
                    />
                </div>
            </div>
            <div>
                <ValueList orientation="right"
                           isReadOnly={isReadOnly}
                           label={label}
                           values={valuesRight}
                           filter={filterRight}
                           setFilter={setFilterRight}
                           iconStartProps={rightListIconStartProps}
                           listItemProps={rightListItemProps}
                           draggedId={draggedId}
                           onMove={v => onChange(values.filter(val => !v.includes(val)))}
                />
                <div className="captionContainer">
                    <Typography variant="caption" weight="semiBold">
                        {values.length > 0 && `${label.selected} ${values.length} ${label.items}`}
                    </Typography>
                </div>
            </div>
        </div>
    );
};

ListSelector.displayName = 'MultipleLeftRightSelector';
