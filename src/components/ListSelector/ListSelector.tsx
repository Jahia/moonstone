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
    MLRS_DRAG_RIGHT_LIST_ITEM: 'MLRS_DRAG_RIGHT_LIST_ITEM',
    MLRS_DRAG_LEFT_LIST_ITEM: 'MLRS_DRAG_LEFT_LIST_ITEM'
};

export const ListSelector: React.FC<ListSelectorSelectorProps> = ({
    label = {
        addAllTitle: 'Add all',
        removeAllTitle: 'Remove all',
        selected: '0 items selected'
    },
    options = [],
    values = [],
    isReadOnly,
    onChange,
    ...props
}) => {
    const [dragged, setDragged] = useState(null);
    // This tracks drag operation without delay and prevents NPE, if we ever experience issues with this, 'dragged' will need to live in this ref
    // like it did before, but so far state updates are pretty fast and I did not see any issues.
    const dragInProgress = useRef(false);
    const [filterLeft, setFilterLeft] = useState(null);
    const [filterRight, setFilterRight] = useState(null);

    const valuesLeft = options
        .filter(o => !values.includes(o.value))
        .filter(v => ((!filterLeft || filterLeft === '') || v.label.toLowerCase().indexOf(filterLeft.toLowerCase()) !== -1));
    const valuesRight = values
        .map(v => options.find(o => o.value === v))
        .filter(v => ((!filterRight || filterRight === '') || v.label.toLowerCase().indexOf(filterRight.toLowerCase()) !== -1));

    // Handles drop of right list item into left list
    const leftListProps = useCallback(() => {
        return {
            onDragOver: (e: React.DragEvent) => {
                if (e.dataTransfer.types.includes(DATA_TYPES.MLRS_DRAG_RIGHT_LIST_ITEM.toLowerCase())) {
                    e.preventDefault();
                    e.stopPropagation();
                    e.dataTransfer.dropEffect = 'move';
                }
            },
            onDrop: (e: React.DragEvent) => {
                if (e.dataTransfer.types.includes(DATA_TYPES.MLRS_DRAG_RIGHT_LIST_ITEM.toLowerCase())) {
                    e.preventDefault();
                    e.stopPropagation();
                    dragInProgress.current = false;
                    onChange(values.filter(val => val !== dragged.value));
                    setDragged(null);
                }
            }
        };
    }, [dragged, dragInProgress, setDragged, onChange]);

    // These props handle move from left list into right list
    const rightListProps = useCallback(() => {
        return {
            onDragOver: (e: React.DragEvent) => {
                if (e.dataTransfer.types.includes(DATA_TYPES.MLRS_DRAG_LEFT_LIST_ITEM.toLowerCase())) {
                    e.preventDefault();
                    e.stopPropagation();
                    e.dataTransfer.dropEffect = 'move';
                }
            },
            onDrop: (e: React.DragEvent) => {
                if (e.dataTransfer.types.includes(DATA_TYPES.MLRS_DRAG_LEFT_LIST_ITEM.toLowerCase())) {
                    e.preventDefault();
                    e.stopPropagation();
                    dragInProgress.current = false;
                    onChange(values.concat([dragged.value]));
                    setDragged(null);
                }
            }
        };
    }, [values, dragged, setDragged, onChange]);

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
            e.dataTransfer.setData(DATA_TYPES.MLRS_DRAG_LEFT_LIST_ITEM, JSON.stringify({type: DATA_TYPES.MLRS_DRAG_LEFT_LIST_ITEM, value: value}));
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setDragImage(e.currentTarget.parentNode.parentNode as Element, 10, 10);
            setDragged({...value, tempItem: true, index: valuesRight.length, type: DATA_TYPES.MLRS_DRAG_LEFT_LIST_ITEM});
        },
        onDragEnd: (e: React.DragEvent) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            e.currentTarget.parentNode.parentNode.style.opacity = '1';
            setDragged(null);
        }
    }), [valuesRight, setDragged]);

    const leftListItemProps = useCallback(value => ({
        role: 'left-list',
        onClick: (e: React.MouseEvent) => {
            e.preventDefault();
            e.stopPropagation();
            if (!isReadOnly) {
                onChange(values.concat(value.value));
            }
        }
    }), [values, onChange, isReadOnly]);

    // Drag handle for the right list
    const rightListIconStartProps = useCallback(value => ({
        draggable: true,
        onDragStart: (e: React.DragEvent) => {
            dragInProgress.current = true;
            const ct = e.currentTarget;
            setTimeout(() => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                ct.parentNode.parentNode.style.opacity = '0';
            }, 10);
            e.dataTransfer.setData(DATA_TYPES.MLRS_DRAG_RIGHT_LIST_ITEM, JSON.stringify({type: DATA_TYPES.MLRS_DRAG_RIGHT_LIST_ITEM, value: value}));
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setDragImage(e.currentTarget.parentNode.parentNode as Element, 10, 10);
            setDragged({...value, originalIndex: value.index, type: DATA_TYPES.MLRS_DRAG_RIGHT_LIST_ITEM});
        },
        onDragEnd: (e: React.DragEvent) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            e.currentTarget.parentNode.parentNode.style.opacity = '1';
            // Did not drop on required target, restore original state
            if (dragInProgress.current && dragged !== null && dragged.originalIndex !== undefined) {
                const current = values[dragged.index];
                values.splice(dragged.index, 1);
                values.splice(dragged.originalIndex, 0, current);
                onChange([...values]);
            }

            dragInProgress.current = false;
            setDragged(null);
        }
    }), [values, dragged, dragInProgress, setDragged, onChange]);

    // Right list item drag props
    const rightListItemProps = useCallback(value => ({
        role: 'right-list',
        onDragOver: (e: React.DragEvent) => {
            // Perform move of the item within the list
            if (e.dataTransfer.types.includes(DATA_TYPES.MLRS_DRAG_RIGHT_LIST_ITEM.toLowerCase())) {
                e.preventDefault();
                e.stopPropagation();
                e.dataTransfer.dropEffect = 'move';

                if (dragged && dragged.index !== value.index) {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const clientOffset = {x: e.clientX, y: e.clientY};
                    const targetMidPointY = rect.y + (rect.height / 2);

                    // Avoid triggering change for adjacent target
                    if (clientOffset.y < targetMidPointY && value.index > dragged.index) {
                        return;
                    }

                    // Avoid triggering change for adjacent target
                    if (clientOffset.y > targetMidPointY && value.index < dragged.index) {
                        return;
                    }

                    const m = values[value.index];

                    values[value.index] = values[dragged.index];
                    values[dragged.index] = m;
                    setDragged(state => ({
                        ...state,
                        index: value.index
                    }));
                    onChange([...values]);
                }
            }

            // Handle repositioning when moving from another list
            if (e.dataTransfer.types.includes(DATA_TYPES.MLRS_DRAG_LEFT_LIST_ITEM.toLowerCase())) {
                e.preventDefault();
                e.stopPropagation();
                e.dataTransfer.dropEffect = 'move';

                if (dragged && dragged.value !== value.value) {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const clientOffset = {x: e.clientX, y: e.clientY};
                    const targetMidPointY = rect.y + (rect.height / 2);
                    // Avoid triggering change for adjacent target
                    if (clientOffset.y < targetMidPointY && value.index > dragged.index) {
                        return;
                    }

                    // Avoid triggering change for adjacent target
                    if (clientOffset.y > targetMidPointY && value.index < dragged.index) {
                        return;
                    }

                    setDragged((m: Option) => ({
                        ...m,
                        index: value.index
                    }));
                }
            }
        },
        onDrop: (e: React.DragEvent) => {
            // Confirms drop and prevents reordering onDragEnd
            if ((e.dataTransfer.types.includes(DATA_TYPES.MLRS_DRAG_RIGHT_LIST_ITEM.toLowerCase()) && value.value === dragged.value)) {
                e.preventDefault();
                e.stopPropagation();
                dragInProgress.current = false;
                setDragged(null);
            }

            // Makes tempItem permanent by updating onChange with its value
            if (e.dataTransfer.types.includes(DATA_TYPES.MLRS_DRAG_LEFT_LIST_ITEM.toLowerCase()) && dragged?.tempItem) {
                e.preventDefault();
                e.stopPropagation();
                dragInProgress.current = false;
                values.splice(dragged.index, 0, dragged.value);
                onChange([...values]);
                setDragged(null);
            }
        },
        onClick: (e: React.MouseEvent) => {
            e.preventDefault();
            e.stopPropagation();
            if (!isReadOnly) {
                onChange(values.filter(val => val !== value.value));
            }
        }
    }), [isReadOnly, values, dragged, dragInProgress, setDragged, onChange]);

    // Add left side item to right side without triggering on change so its space is kept in the left list but can also exist in right list
    if (dragged?.tempItem) {
        valuesRight.splice(dragged.index, 0, dragged);
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
                           listClasses={dragged?.type === DATA_TYPES.MLRS_DRAG_RIGHT_LIST_ITEM ? ['moonstone-draggedOver'] : []}
                           iconStartProps={leftListIconStartProps}
                           listItemProps={leftListItemProps}
                           listProps={leftListProps}
                           onMove={v => onChange(values.concat(v))}
                />
            </div>
            <div className="moonstone-buttonSection">
                <div className="moonstone-buttons">
                    <Button title={label.addAllTitle}
                            role="add-all"
                            variant="ghost"
                            isDisabled={isReadOnly || valuesLeft.length === 0}
                            icon={<ChevronDoubleRight/>}
                            onClick={() => onChange([...valuesRight, ...valuesLeft].map(o => o.value))}
                    />
                    <Button title={label.removeAllTitle}
                            role="remove-all"
                            variant="ghost"
                            isDisabled={isReadOnly || valuesRight.length === 0}
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
                           listClasses={dragged?.type === DATA_TYPES.MLRS_DRAG_RIGHT_LIST_ITEM || dragged?.type === DATA_TYPES.MLRS_DRAG_LEFT_LIST_ITEM ? ['moonstone-draggedOver'] : []}
                           iconStartProps={rightListIconStartProps}
                           listItemProps={rightListItemProps}
                           listProps={rightListProps}
                           draggedId={dragged?.value}
                           onMove={v => onChange(values.filter(val => !v.includes(val)))}
                />
                <div className="moonstone-captionContainer">
                    <Typography variant="caption" weight="semiBold">
                        {values.length > 0 && label.selected}
                    </Typography>
                </div>
            </div>
        </div>
    );
};

ListSelector.displayName = 'ListSelector';
