import clsx from 'clsx';
import React, { useId, useLayoutEffect, useRef, useState } from 'react';

import { Button } from '~/components/Button';
import { CheckboxItem } from '~/components/CheckboxGroup';
import { CollectionPopover } from '~/components/CollectionBar/CollectionPopover/CollectionPopover';
import { SearchInput } from '~/components/Input';
import { Tooltip } from '~/components/Tooltip';
import { Typography } from '~/components/Typography';
import { ArrowDown, ArrowUp, HandleDrag, ViewColumn } from '~/icons';

import type { ColumnChooserColumn, ColumnChooserProps } from './ColumnChooser.types';
import type { CollectionPopoverCloseReason } from '~/components/CollectionBar/CollectionPopover/CollectionPopover';

import styles from './ColumnChooser.module.scss';

// A locked column is always visible, whatever the value or the default says
const withLocked = (keys: ReadonlyArray<string>, columns: ReadonlyArray<ColumnChooserColumn>) => [
    ...keys.filter(key => columns.some(column => column.key === key)),
    ...columns.filter(column => column.isLocked && !keys.includes(column.key)).map(column => column.key),
];

const getDefaultValue = (columns: ReadonlyArray<ColumnChooserColumn>) =>
    withLocked(columns.filter(column => !column.isHiddenByDefault).map(column => column.key), columns);

export const ColumnChooser: React.FC<ColumnChooserProps> = ({
    columns,
    value,
    onChange,
    isDisabled = false,
    i18n,
    className,
    ...props
}) => {
    const labels = {
        button: i18n?.button || 'Choose the columns',
        search: i18n?.search || 'Search columns',
        visibleColumns: i18n?.visibleColumns || 'Visible columns',
        hiddenColumns: i18n?.hiddenColumns || 'Hidden columns',
        noMatch: i18n?.noMatch || 'No column matches the search',
        reset: i18n?.reset || 'Reset',
        moveUp: i18n?.moveUp || 'Move up',
        moveDown: i18n?.moveDown || 'Move down',
    };
    const [innerValue, setInnerValue] = useState<ReadonlyArray<string>>(() => getDefaultValue(columns));
    const [button, setButton] = useState<HTMLButtonElement | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState('');
    // The visible column being dragged, and the place, between two visible columns, where it would drop
    const [dragIndex, setDragIndex] = useState<number | null>(null);
    const [dropIndex, setDropIndex] = useState<number | null>(null);
    const baseId = useId();
    // Ids come from the index of the column, so that no key can collide with another id
    const checkboxId = (column: ColumnChooserColumn) => `${baseId}-column${columns.indexOf(column)}`;
    // The control to focus after a change, as the row it was in moved or its button became disabled
    const pendingFocus = useRef<string | null>(null);

    useLayoutEffect(() => {
        if (pendingFocus.current) {
            document.getElementById(pendingFocus.current)?.focus();
            pendingFocus.current = null;
        }
    });

    const visibleKeys = withLocked(value ?? innerValue, columns);
    const visible = visibleKeys.map(key => columns.find(column => column.key === key));
    const hidden = columns.filter(column => !visibleKeys.includes(column.key));
    const query = search.trim().toLowerCase();
    const matches = (column: ColumnChooserColumn) => column.label.toLowerCase().includes(query);

    const change = (next: string[]) => {
        if (value === undefined) {
            setInnerValue(next);
        }

        onChange?.(next);
    };

    const toggle = (column: ColumnChooserColumn, isVisible: boolean) => {
        pendingFocus.current = checkboxId(column);
        change(isVisible ? visibleKeys.filter(key => key !== column.key) : [...visibleKeys, column.key]);
    };

    const move = (index: number, offset: -1 | 1) => {
        const next = [...visibleKeys];
        [next[index], next[index + offset]] = [next[index + offset], next[index]];
        const target = index + offset;
        const isAtEdge = target === 0 || target === next.length - 1;
        // The button keeps the focus, unless it becomes disabled at the end of the list
        pendingFocus.current = isAtEdge ? checkboxId(visible[index]) : `${checkboxId(visible[index])}-${offset === -1 ? 'up' : 'down'}`;
        change(next);
    };

    const endDrag = () => {
        setDragIndex(null);
        setDropIndex(null);
    };

    const drop = () => {
        if (dragIndex !== null && dropIndex !== null && dropIndex !== dragIndex && dropIndex !== dragIndex + 1) {
            const next = [...visibleKeys];
            const [key] = next.splice(dragIndex, 1);
            next.splice(dropIndex > dragIndex ? dropIndex - 1 : dropIndex, 0, key);
            change(next);
        }

        endDrag();
    };

    // The drop goes before the row, or after it when the pointer is on its lower half
    const handleDragOver = (e: React.DragEvent<HTMLLIElement>, index: number) => {
        if (dragIndex === null) {
            return;
        }

        e.preventDefault();
        const { top, height } = e.currentTarget.getBoundingClientRect();
        setDropIndex(e.clientY > top + (height / 2) ? index + 1 : index);
    };

    // A click outside or a Tab out leaves the focus where the user put it
    const close = (reason?: CollectionPopoverCloseReason) => {
        setIsOpen(false);
        setSearch('');
        if (reason !== 'outsidePress' && reason !== 'focusOut') {
            button?.focus();
        }
    };

    const isOrderable = !query;
    const isNoOpDrop = dropIndex === dragIndex || dropIndex === (dragIndex ?? -2) + 1;

    const renderRow = (column: ColumnChooserColumn, isVisible: boolean, index: number) => (
        // oxlint-disable-next-line jsx-a11y/no-noninteractive-element-interactions -- a drop target for the mouse; the move buttons order from the keyboard
        <li
            className={clsx(
                styles.row,
                isVisible && dragIndex === index && styles.dragging,
                isVisible && !isNoOpDrop && dropIndex === index && styles.dropBefore,
                isVisible && !isNoOpDrop && dropIndex === index + 1 && index === visible.length - 1 && styles.dropAfter,
            )}
            key={column.key}
            onDragOver={isVisible && isOrderable ? e => handleDragOver(e, index) : undefined}
            onDrop={isVisible && isOrderable
                ? (e) => {
                        e.preventDefault();
                        drop();
                    }
                : undefined}
        >
            {/* The handle is for the mouse; the move buttons are the keyboard and single-pointer way to order */}
            <span
                aria-hidden="true"
                className={clsx(styles.dragHandle, !(isVisible && isOrderable) && styles.dragHandleHidden)}
                draggable={isVisible && isOrderable}
                onDragEnd={endDrag}
                onDragStart={(e) => {
                    e.dataTransfer.effectAllowed = 'move';
                    e.dataTransfer.setData('text/plain', column.key);
                    setDragIndex(index);
                }}
            >
                <HandleDrag color="gray"/>
            </span>
            <CheckboxItem
                isDisabled={column.isLocked}
                checked={isVisible}
                className={styles.checkbox}
                id={checkboxId(column)}
                label={column.label}
                value={column.key}
                onChange={() => toggle(column, isVisible)}
            />
            {isVisible && isOrderable && (
                <span className={styles.moveButtons}>
                    <Button
                        isDisabled={index === 0}
                        aria-label={`${labels.moveUp} ${column.label}`}
                        icon={<ArrowUp/>}
                        id={`${checkboxId(column)}-up`}
                        variant="ghost"
                        onClick={() => move(index, -1)}
                    />
                    <Button
                        isDisabled={index === visible.length - 1}
                        aria-label={`${labels.moveDown} ${column.label}`}
                        icon={<ArrowDown/>}
                        id={`${checkboxId(column)}-down`}
                        variant="ghost"
                        onClick={() => move(index, 1)}
                    />
                </span>
            )}
        </li>
    );

    const renderSection = (title: string, sectionColumns: ColumnChooserColumn[], isVisible: boolean) => {
        const shown = sectionColumns.map((column, index) => ({
            column,
            index,
        })).filter(({ column }) => matches(column));
        if (shown.length === 0) {
            return null;
        }

        const titleId = `${baseId}-title-${isVisible ? 'visible' : 'hidden'}`;
        return (
            <div aria-labelledby={titleId} className={styles.section} role="group">
                <Typography id={titleId} variant="caption" weight="bold">{title}</Typography>
                <ul className={styles.list}>
                    {shown.map(({ column, index }) => renderRow(column, isVisible, index))}
                </ul>
            </div>
        );
    };

    const visibleSection = renderSection(labels.visibleColumns, visible, true);
    const hiddenSection = renderSection(labels.hiddenColumns, hidden, false);

    return (
        <>
            <Tooltip label={labels.button}>
                <Button
                    {...props}
                    isDisabled={isDisabled}
                    aria-expanded={isOpen}
                    aria-haspopup="dialog"
                    aria-label={labels.button}
                    className={className}
                    data-moonstone="ColumnChooser"
                    icon={<ViewColumn/>}
                    ref={setButton}
                    variant="ghost"
                    onClick={() => (isOpen ? close() : setIsOpen(true))}
                />
            </Tooltip>
            {isOpen && button && (
                <CollectionPopover anchor={button} className={styles.popover} title={labels.button} onClose={close}>
                    <SearchInput
                        aria-label={labels.search}
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        onClear={() => setSearch('')}
                    />
                    {visibleSection}
                    {hiddenSection}
                    {/* The status stays mounted, so that a screen reader announces its new text */}
                    <div role="status">
                        {!visibleSection && !hiddenSection && <Typography variant="body">{labels.noMatch}</Typography>}
                    </div>
                    <div className={styles.footer}>
                        <Button label={labels.reset} variant="ghost" onClick={() => change(getDefaultValue(columns))}/>
                    </div>
                </CollectionPopover>
            )}
        </>
    );
};

ColumnChooser.displayName = 'ColumnChooser';
