/* Disabled lint due to incompatibility of Button with regular props, work on this is in progress */
/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import React, {useState} from 'react';
import {ValueList} from './ValueList';
import {Button, Typography} from '~/components';
import {ChevronDoubleLeft, ChevronDoubleRight, ChevronRight, Close} from '~/icons';
import type {ListSelectorSelectorProps} from './ListSelector.types';
import './ListSelector.scss';
import clsx from 'clsx';

const MLRS_DRAG = 'mlrs_drag_list_item';

export const ListSelector: React.FC<ListSelectorSelectorProps> = ({
    label = {
        rightListTitle: '',
        leftListTitle: '',
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
    const hasTitle = label?.rightListTitle?.length > 0 || label?.leftListTitle?.length > 0;

    // This tracks drag operation without delay and prevents NPE, if we ever experience issues with this, 'dragged' will need to live in this ref
    // like it did before, but so far state updates are pretty fast and I did not see any issues.
    const [filterLeft, setFilterLeft] = useState(null);
    const [filterRight, setFilterRight] = useState(null);

    const valuesLeft = options
        .filter(o => !values.includes(o.value))
        .filter(v => ((!filterLeft || filterLeft === '') || v.label.toLowerCase().indexOf(filterLeft.toLowerCase()) !== -1));
    const valuesRight = values
        .map(v => options.find(o => o.value === v))
        .filter(v => ((!filterRight || filterRight === '') || v.label.toLowerCase().indexOf(filterRight.toLowerCase()) !== -1));

    if (typeof dragged?.originalIndex === 'number') {
        valuesRight.splice(dragged.originalIndex, 1);
    }

    // Add left side item to right side without triggering on change so its space is kept in the left list but can also exist in right list
    if (typeof dragged?.index === 'number') {
        valuesRight.splice(dragged.index, 0, {...dragged.value, tempItem: typeof dragged.originalIndex !== 'number'});
    }

    return (
        <div className={clsx('flexRow_nowrap', 'moonstone-listSelector')} {...props}>
            <div className="moonstone-listSelector_left flexCol_nowrap flexFluid">
                {hasTitle &&
                    <header className="moonstone-listSelector_title flexRow alignCenter">
                        <Typography isNowrap component="h3" weight="bold">{label?.leftListTitle}</Typography>
                    </header>}
                <ValueList values={valuesLeft}
                           role="left-list"
                           iconEnd={<ChevronRight className="moonstone-displayNone"/>}
                           isReadOnly={isReadOnly}
                           filter={filterLeft}
                           setFilter={setFilterLeft}
                           listClasses={typeof dragged?.originalIndex === 'number' ? ['moonstone-draggedOver'] : []}
                           draggedId={dragged?.value.value}
                           onClick={(e, value) => {
                               onChange(values.concat(value.value));
                           }}
                           onDragStart={(e, value) => {
                               e.stopPropagation();
                               const ct = e.currentTarget;
                               setTimeout(() => {
                                   ct.parentNode.parentNode.style.opacity = '0';
                               }, 10);
                               e.dataTransfer.setData(MLRS_DRAG, JSON.stringify({type: MLRS_DRAG, value: value}));
                               e.dataTransfer.effectAllowed = 'move';
                               e.dataTransfer.setDragImage(e.currentTarget.parentNode.parentNode as Element, 10, 10);
                               setDragged({value, from: 'left'});
                           }}
                           onDragEnd={e => {
                               e.stopPropagation();
                               e.currentTarget.parentNode.parentNode.style.opacity = '1';
                               setDragged(null);
                           }}
                           onDragOver={e => {
                               e.stopPropagation();
                               if (e.dataTransfer.types.includes(MLRS_DRAG)) {
                                   e.preventDefault();
                                   e.dataTransfer.dropEffect = 'move';
                               }
                           }}
                           onDrop={e => {
                               e.stopPropagation();
                               if (e.dataTransfer.types.includes(MLRS_DRAG)) {
                                   onChange(values.filter(val => val !== dragged.value.value));
                                   setDragged(null);
                               }
                           }}

                />
            </div>
            <div className="moonstone-listSelector_buttons alignCenter flexCol_center">
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
            <div className="moonstone-listSelector_right flexCol_nowrap flexFluid">
                {hasTitle &&
                <header className="moonstone-listSelector_title flexRow alignCenter">
                    <Typography isNowrap component="h3" weight="bold">{label?.rightListTitle}</Typography>
                </header>}
                <ValueList values={valuesRight}
                           role="right-list"
                           iconEnd={<Close className="moonstone-displayNone"/>}
                           isReadOnly={isReadOnly}
                           label={label}
                           filter={filterRight}
                           setFilter={setFilterRight}
                           listClasses={(dragged && !filterRight) ? ['moonstone-draggedOver'] : []}
                           draggedId={dragged?.value.value}
                           onClick={(e, value) => {
                               onChange(values.filter(val => val !== value.value));
                           }}
                           onDragStart={(e, value) => {
                               e.stopPropagation();
                               const ct = e.currentTarget;
                               setTimeout(() => {
                                   ct.parentNode.parentNode.style.opacity = '0';
                               }, 10);
                               e.dataTransfer.setData(MLRS_DRAG, JSON.stringify({type: MLRS_DRAG, value: value}));
                               e.dataTransfer.effectAllowed = 'move';
                               e.dataTransfer.setDragImage(e.currentTarget.parentNode.parentNode as Element, 10, 10);
                               setDragged({value, originalIndex: valuesRight.indexOf(value), index: valuesRight.indexOf(value), from: 'right'});
                           }}
                           onDragEnd={e => {
                               e.stopPropagation();
                               e.currentTarget.parentNode.parentNode.style.opacity = '1';
                               setDragged(null);
                           }}
                           onDragOver={(e, value) => {
                               e.stopPropagation();
                               // Perform move of the item within the list
                               if (e.dataTransfer.types.includes(MLRS_DRAG) && !filterRight) {
                                   e.preventDefault();
                                   e.dataTransfer.dropEffect = 'move';
                                   const rect = e.currentTarget.getBoundingClientRect();
                                   const clientOffset = {x: e.clientX, y: e.clientY};
                                   const targetMidPointY = rect.y + (rect.height / 2);
                                   let newIndex = -1;
                                   if (value && dragged?.value?.value !== value.value) {
                                       if (clientOffset.y < targetMidPointY) {
                                           newIndex = valuesRight.filter(f => f.value !== dragged.value.value).indexOf(value);
                                       }

                                       // Avoid triggering change for adjacent target
                                       if (clientOffset.y > targetMidPointY) {
                                           newIndex = valuesRight.filter(f => f.value !== dragged.value.value).indexOf(value) + 1;
                                       }
                                   } else if (value) {
                                       newIndex = valuesRight.length;
                                   }

                                   if (newIndex !== -1 && dragged.index !== newIndex) {
                                       setDragged(state => ({
                                           ...state,
                                           index: newIndex
                                       }));
                                   }
                               }
                           }}
                           onDrop={e => {
                               // Confirms drop and prevents reordering onDragEnd
                               e.stopPropagation();
                               if (e.dataTransfer.types.includes(MLRS_DRAG)) {
                                   onChange(valuesRight.map(v => v.value));
                                   setDragged(null);
                               }
                           }}
                />
                <footer className="moonstone-listSelector_footer flexRow alignCenter">
                    {values.length > 0 && <Typography variant="caption" weight="semiBold">{label.selected}</Typography>}
                </footer>
            </div>
        </div>
    );
};

ListSelector.displayName = 'ListSelector';
