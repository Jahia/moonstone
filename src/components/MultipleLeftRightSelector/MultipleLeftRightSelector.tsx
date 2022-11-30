/* Disabled lint due to incompatibility of Button with regular props, work on this is in progress */
/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import React, {useState, useCallback, useRef} from 'react';
import {ValueList} from './ValueList';
import {Button} from '~/components';
import {ChevronDoubleLeft, ChevronDoubleRight} from '~/icons';
import {MultipleLeftRightSelectorProps, Option} from './MultipleLeftRightSelector.types';
import './MultipleLeftRightSlector.scss';

const DATA_TYPES = {
    MLRS_DRAG_TO_REORDER: 'MLRS_DRAG_TO_REORDER',
    MLRS_DRAG_TO_MOVE: 'MLRS_DRAG_TO_MOVE'
};

export const FAKE_VALUE = 'dnd_move_in_progress';

export const MultipleLeftRightSelector: React.FC<MultipleLeftRightSelectorProps> = ({
    addAllTitle = 'Add all',
    removeAllTitle = 'Remove all',
    options = [],
    arrayValue = [],
    readOnly,
    onChange
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

    const leftListItemProps = useCallback(() => ({
        role: 'left-list'
    }), []);

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
                const current = arrayValue[dnd.current.dragging.index];
                arrayValue.splice(dnd.current.dragging.index, 1);
                arrayValue.splice(dnd.current.dragging.originalIndex, 0, current);
                onChange([...arrayValue]);
            }

            setDraggedId(null);
            dnd.current.dragging = null;
        }
    }), [arrayValue, onChange]);

    // Right list item drag props
    const rightListListItemProps = useCallback(value => ({
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

                    const m = arrayValue[value.index];

                    if (!dnd.current.dragging.originalIndex) {
                        dnd.current.dragging.originalIndex = dnd.current.dragging.index;
                    }

                    arrayValue[value.index] = arrayValue[dnd.current.dragging.index];
                    arrayValue[dnd.current.dragging.index] = m;
                    dnd.current.dragging.index = value.index;
                    onChange([...arrayValue]);
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
                arrayValue.splice(dnd.current.dragging.index, 0, dnd.current.dragging.value);
                dnd.current.dragging = null;
            }
        }
    }), [arrayValue, moved, onChange]);

    const valuesLeft = options.filter(o => !arrayValue.includes(o.value));
    const valuesRight = arrayValue.map(v => options.find(o => o.value === v));

    if (moved) {
        valuesRight.splice(moved.index, 0, moved);
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return (
        <div className="moonstone-multipleSelector">
            <ValueList orientation="left"
                       readOnly={readOnly}
                       values={valuesLeft}
                       iconStartProps={arrayValue.length > 0 ? leftListIconStartProps : null}
                       listItemProps={leftListItemProps}
                       onMove={v => onChange(arrayValue.concat(v))}
            />
            <div className="moonstone-buttonSection">
                <div className="moonstone-buttons">
                    <Button title={addAllTitle}
                            role="add-all"
                            variant="ghost"
                            isDisabled={readOnly}
                            icon={<ChevronDoubleRight/>}
                            onClick={() => onChange(options.map(o => o.value))}
                    />
                    <Button title={removeAllTitle}
                            role="remove-all"
                            variant="ghost"
                            isDisabled={readOnly}
                            icon={<ChevronDoubleLeft/>}
                            onClick={() => onChange([])}
                    />
                </div>
            </div>
            <ValueList orientation="right"
                       readOnly={readOnly}
                       values={valuesRight}
                       iconStartProps={rightListIconStartProps}
                       listItemProps={rightListListItemProps}
                       draggedId={draggedId}
                       onMove={v => onChange(arrayValue.filter(val => !v.includes(val)))}
            />
        </div>
    );
};

MultipleLeftRightSelector.displayName = 'MultipleLeftRightSelector';
