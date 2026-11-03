import { Composite, CompositeItem } from '@floating-ui/react';
import clsx from 'clsx';
import React, { useCallback, useId, useLayoutEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';

import { FilterSelector } from './FilterSelector';
import { Button } from '~/components/Button';
import { Menu, MenuItem } from '~/components/Menu';
import { Tooltip } from '~/components/Tooltip';
import { layout } from '~/globals/css-utils.js';
import { getInitialIndex, mergeHandlers, rovingItemProps, useControllableState, useRovingTabIndex } from '~/hooks';
import { Add, CheckboxChecked, CheckboxUnchecked, ChevronDown, Close, ViewColumn } from '~/icons';

import type { CollectionBarCloseReason, CollectionBarFilter, CollectionBarI18n, CollectionBarProps } from './CollectionBar.types';

import styles from './CollectionBar.module.scss';

const defaultI18n: Required<CollectionBarI18n> = {
    toolbarLabel: 'Collection options',
    addFilter: 'Add filter',
    filterName: '{{name}}:',
    clearFilter: 'Clear the {{name}} filter',
    clearAll: 'Clear all',
    closeButton: 'Close',
    columnButton: 'Choose the columns',
    visibleColumns: 'Visible columns',
    hiddenColumns: 'Hidden columns',
    searchLabel: 'Search',
    searchEmptyText: 'No column matches the search',
};

const menuAnchorPosition = {
    top: 4,
    left: 0,
};

const columnMenuAnchorOrigin = {
    horizontal: 'right',
    vertical: 'bottom',
} as const;

const columnMenuTransformOrigin = {
    horizontal: 'right',
    vertical: 'top',
} as const;

// The max height of the menu of a default Dropdown
const MENU_MAX_HEIGHT = '270px';

// The APG toolbar pattern groups 3 controls or more
const TOOLBAR_MIN_CONTROLS = 3;

const withName = (label: string, name: string) => label.split('{{name}}').join(name);

const hasValue = (filter: CollectionBarFilter) => Boolean(filter.valueLabel);

// The dialog of a closed selector leaves the DOM with the focus, which then falls back to the body
const isFocusLost = () => !document.activeElement || document.activeElement === document.body;

const mapRef = (map: React.RefObject<Map<string, HTMLElement>>, key: string) => (element: HTMLElement | null) => {
    if (element) {
        map.current.set(key, element);
    } else {
        map.current.delete(key);
    }
};

// The props that the bar gives each control. In a toolbar, CompositeItem takes the ref and adds its tab index and handlers
type ControlProps = typeof rovingItemProps & { ref?: React.Ref<HTMLButtonElement> };

/**
 * A toolbar of filters above a collection, also called a filter bar: filter chips, Add filter,
 * Clear all and the column choice, above a DataTable, a list or thumbnails
 */
export const CollectionBar: React.FC<CollectionBarProps> = ({
    filters,
    columns,
    visibleColumns,
    defaultVisibleColumns,
    onVisibleColumnsChange,
    openFilterKey,
    defaultOpenFilterKey,
    onOpenFilterChange,
    onClearAll,
    isDisabled = false,
    i18n,
    className,
    ...props
}) => {
    // An empty label falls back to its default, as in Header and Pagination
    const labels = Object.fromEntries(
        Object.entries(defaultI18n).map(([key, label]) => [key, i18n?.[key as keyof CollectionBarI18n] || label]),
    ) as Required<CollectionBarI18n>;
    // The filters that Add filter put in the bar, in the order of their chips
    const [addedKeys, setAddedKeys] = useState<string[]>([]);
    const [openKey, setOpenKey] = useControllableState({
        value: openFilterKey,
        defaultValue: defaultOpenFilterKey ?? null,
        onChange: onOpenFilterChange,
        name: 'CollectionBar openFilterKey',
    });
    const [shownColumns, setShownColumns] = useControllableState({
        value: visibleColumns,
        defaultValue: defaultVisibleColumns ?? columns?.map(column => column.key) ?? [],
        onChange: next => onVisibleColumnsChange?.([...next]),
        name: 'CollectionBar visibleColumns',
    });
    const [isAddMenuOpen, setIsAddMenuOpen] = useState(false);
    const [isColumnMenuOpen, setIsColumnMenuOpen] = useState(false);
    const rovingTabIndex = useRovingTabIndex();
    // Each item of the column menu takes an id, so it is found wherever the menu renders
    const columnItemsId = useId();
    const columnItemId = (key: string) => `${columnItemsId}${key}`;

    const rootRef = useRef<HTMLDivElement>(null);
    // The chip of each filter, which anchors its selector, and its edit button, which takes the focus
    const chipElements = useRef(new Map<string, HTMLElement>());
    const chipButtons = useRef(new Map<string, HTMLElement>());
    const addFilterRef = useRef<HTMLButtonElement>(null);
    const columnButtonRef = useRef<HTMLButtonElement>(null);

    // An added chip stays in the bar while it has a value or while its selector is open
    const addableFilters = filters.filter(filter => !filter.isDisplayedByDefault);
    const shownAdded = [
        ...addedKeys.map(key => addableFilters.find(filter => filter.key === key)).filter(Boolean),
        ...addableFilters.filter(filter => !addedKeys.includes(filter.key)),
    ].filter(filter => filter.key === openKey || hasValue(filter));
    const shownFilters = [...filters.filter(filter => filter.isDisplayedByDefault), ...shownAdded];
    const filtersToAdd = addableFilters.filter(filter => !shownAdded.includes(filter));
    const openFilter = shownFilters.find(filter => filter.key === openKey);
    const hasClearAll = Boolean(onClearAll) && filters.some(hasValue);

    // A chip that leaves the bar gives the focus to Add filter, else to the first control
    const focusChip = useCallback((key?: string) => {
        const chip = key ? chipButtons.current.get(key) : null;
        const addFilter = addFilterRef.current?.hasAttribute('disabled') ? null : addFilterRef.current;
        const firstItem = rootRef.current?.querySelector<HTMLElement>('[data-roving-item]:not([disabled])');
        (chip ?? addFilter ?? firstItem)?.focus();
    }, []);

    const getChip = useCallback(() => chipElements.current.get(openKey ?? '') ?? null, [openKey]);
    const getBar = useCallback(() => rootRef.current, []);

    // A selector that closes with the focus in it gives the focus back to its chip, once the close is in the DOM:
    // the chip of an added filter may leave the bar with it, and the consumer may close a controlled selector
    const lastOpenKey = useRef(openKey);
    useLayoutEffect(() => {
        const closedKey = lastOpenKey.current;
        lastOpenKey.current = openKey;
        if (closedKey !== null && openKey === null && isFocusLost()) {
            focusChip(closedKey);
        }
    }, [openKey, focusChip]);

    // Every close of a selector calls its onClose, which commits a draft value or discards it
    const closeSelector = (reason: CollectionBarCloseReason) => {
        if (!openFilter) {
            return;
        }

        setOpenKey(null);
        openFilter.onClose?.({ reason });
    };

    const toggleSelector = (filter: CollectionBarFilter) => {
        if (openKey === filter.key) {
            closeSelector('chip');
        } else {
            closeSelector('otherControl');
            setIsAddMenuOpen(false);
            setIsColumnMenuOpen(false);
            setOpenKey(filter.key);
        }
    };

    const addFilter = (filter: CollectionBarFilter) => {
        setIsAddMenuOpen(false);
        setAddedKeys([...shownAdded.map(shown => shown.key).filter(key => key !== filter.key), filter.key]);
        setOpenKey(filter.key);
    };

    // A clear commits its change with flushSync first, so the control to focus is in the DOM
    const clearFilter = (filter: CollectionBarFilter, event: React.SyntheticEvent) => {
        flushSync(() => filter.onClear(event));
        focusChip(filter.key);
    };

    const clearAll = (event: React.SyntheticEvent) => {
        flushSync(() => {
            onClearAll(event);
            setAddedKeys([]);
        });
        focusChip();
    };

    const toggleColumn = (key: string, isVisible: boolean) => {
        const next = isVisible ? shownColumns.filter(visible => visible !== key) : [...shownColumns, key];
        flushSync(() => setShownColumns(columns.map(column => column.key).filter(column => next.includes(column))));
        // A column that moves to the other section of its menu keeps the focus
        document.getElementById(columnItemId(key))?.focus();
    };

    // ---
    // Controls of the bar, in the order of the arrow keys. With fewer than 3, each one is a Tab stop
    // ---
    const controlCount = shownFilters.length + shownFilters.filter(hasValue).length
        + (addableFilters.length > 0 ? 1 : 0) + (hasClearAll ? 1 : 0) + (columns ? 1 : 0);
    const isToolbar = controlCount >= TOOLBAR_MIN_CONTROLS;
    const itemKeys: string[] = [];
    const itemStates: Array<{ isDisabled: boolean }> = [];
    const control = (key: string, isItemDisabled: boolean, renderButton: (props: ControlProps) => React.ReactElement, ref?: React.Ref<HTMLButtonElement>) => {
        itemKeys.push(key);
        itemStates.push({ isDisabled: isItemDisabled });
        return isToolbar
            ? <CompositeItem ref={ref} render={renderButton(rovingItemProps)}/>
            : renderButton({
                    ...rovingItemProps,
                    ref,
                });
    };

    const chips = shownFilters.map((filter) => {
        const isFilterDisabled = isDisabled || Boolean(filter.isDisabled);
        const name = withName(labels.filterName, filter.label);
        const edit = control(`chip:${filter.key}`, isFilterDisabled, itemProps => (
            <Button
                {...itemProps}
                isDisabled={isFilterDisabled}
                aria-expanded={openKey === filter.key}
                aria-haspopup="dialog"
                className={clsx('moonstone-collectionBar_chipButton', styles['moonstone-collectionBar_chipButton'])}
                iconEnd={<ChevronDown/>}
                label={hasValue(filter) ? <><strong>{name}</strong> {filter.valueLabel}</> : filter.label}
                variant="outlined"
                onClick={() => toggleSelector(filter)}
            />
        ), mapRef(chipButtons, filter.key));

        let clear: React.ReactElement = null;
        if (hasValue(filter)) {
            const clearLabel = withName(labels.clearFilter, filter.label);
            clear = (
                <Tooltip className={clsx('moonstone-collectionBar_chipClearTooltip', styles['moonstone-collectionBar_chipClearTooltip'])} label={clearLabel}>
                    {control(`clear:${filter.key}`, isFilterDisabled, itemProps => (
                        <Button
                            {...itemProps}
                            isDisabled={isFilterDisabled}
                            aria-label={clearLabel}
                            className={clsx('moonstone-collectionBar_chipClear', styles['moonstone-collectionBar_chipClear'])}
                            icon={<Close/>}
                            variant="outlined"
                            onClick={event => clearFilter(filter, event)}
                        />
                    ))}
                </Tooltip>
            );
        }

        // The tooltip shows the full text of a value that ends with an ellipsis, on hover and on focus
        let shownEdit = edit;
        if (hasValue(filter)) {
            shownEdit = (
                <Tooltip className={clsx('moonstone-collectionBar_chipTooltip', styles['moonstone-collectionBar_chipTooltip'])} label={`${name} ${filter.valueLabel}`}>
                    {edit}
                </Tooltip>
            );
        }

        return (
            <span
                className={clsx(
                    ['moonstone-collectionBar_chip', styles['moonstone-collectionBar_chip']],
                    hasValue(filter) ? ['moonstone-filled', styles['moonstone-filled']] : ['moonstone-empty', styles['moonstone-empty']],
                )}
                data-filter={filter.key}
                key={filter.key}
                ref={mapRef(chipElements, filter.key)}
            >
                {shownEdit}
                {clear}
            </span>
        );
    });

    let addButton: React.ReactElement = null;
    if (addableFilters.length > 0) {
        const isAddDisabled = isDisabled || filtersToAdd.length === 0;
        addButton = control('add', isAddDisabled, itemProps => (
            <Button
                {...itemProps}
                isDisabled={isAddDisabled}
                aria-expanded={isAddMenuOpen}
                aria-haspopup="menu"
                className={clsx('moonstone-collectionBar_addFilter', styles['moonstone-collectionBar_addFilter'])}
                color="accent"
                icon={<Add/>}
                label={labels.addFilter}
                variant="ghost"
                onClick={() => {
                    closeSelector('otherControl');
                    setIsAddMenuOpen(!isAddMenuOpen);
                }}
            />
        ), addFilterRef);
    }

    let clearAllButton: React.ReactElement = null;
    if (hasClearAll) {
        clearAllButton = control('clearAll', isDisabled, itemProps => (
            <Button
                {...itemProps}
                isDisabled={isDisabled}
                className={clsx('moonstone-collectionBar_clearAll', styles['moonstone-collectionBar_clearAll'])}
                label={labels.clearAll}
                variant="ghost"
                onClick={clearAll}
            />
        ));
    }

    let columnButton: React.ReactElement = null;
    if (columns) {
        columnButton = (
            <div className={clsx(['moonstone-collectionBar_end', styles['moonstone-collectionBar_end']], ['flexRow', layout.flexRow])}>
                <Tooltip label={labels.columnButton}>
                    {control('columns', isDisabled, itemProps => (
                        <Button
                            {...itemProps}
                            isDisabled={isDisabled}
                            aria-expanded={isColumnMenuOpen}
                            aria-haspopup="menu"
                            aria-label={labels.columnButton}
                            className={clsx('moonstone-collectionBar_columnButton', styles['moonstone-collectionBar_columnButton'])}
                            icon={<ViewColumn/>}
                            variant="ghost"
                            onClick={() => {
                                closeSelector('otherControl');
                                setIsColumnMenuOpen(!isColumnMenuOpen);
                            }}
                        />
                    ), columnButtonRef)}
                </Tooltip>
            </div>
        );
    }

    // Menu filters a flat list of children by their label, so the two sections stay flat titles
    const columnSection = (title: string, isVisible: boolean) => {
        const sectionColumns = columns.filter(column => shownColumns.includes(column.key) === isVisible);
        if (sectionColumns.length === 0) {
            return [];
        }

        return [
            // The prefixes keep a title and a column apart, whatever the key of the column
            <MenuItem key={isVisible ? 'title:visible' : 'title:hidden'} label={title} variant="title"/>,
            ...sectionColumns.map(column => (
                <MenuItem
                    aria-checked={isVisible}
                    data-column={column.key}
                    iconStart={isVisible ? <CheckboxChecked color="blue"/> : <CheckboxUnchecked/>}
                    id={columnItemId(column.key)}
                    key={`column:${column.key}`}
                    label={column.label}
                    role="menuitemcheckbox"
                    onClick={() => toggleColumn(column.key, isVisible)}
                />
            )),
        ];
    };

    const columnItems = columns ? [...columnSection(labels.visibleColumns, true), ...columnSection(labels.hiddenColumns, false)] : [];

    const controlsClassName = clsx(
        ['moonstone-collectionBar_toolbar', styles['moonstone-collectionBar_toolbar']],
        ['flexRow', layout.flexRow],
        ['alignCenter', layout.alignCenter],
    );
    const controls = (
        <>
            {chips}
            {addButton}
            {clearAllButton}
            {columnButton}
        </>
    );

    let controlGroup = (
        <div aria-label={labels.toolbarLabel} className={controlsClassName} role="group">
            {controls}
        </div>
    );
    if (isToolbar) {
        controlGroup = (
            <Composite
                {...rovingTabIndex.getCompositeProps(getInitialIndex(itemStates), itemKeys)}
                orientation="horizontal"
                render={compositeProps => (
                    <div
                        {...compositeProps}
                        aria-label={labels.toolbarLabel}
                        className={controlsClassName}
                        role="toolbar"
                        {...mergeHandlers({
                            onKeyDown: rovingTabIndex.onKeyDown(compositeProps.onKeyDown),
                            onBlur: rovingTabIndex.onBlur,
                        })}
                    />
                )}
            >
                {controls}
            </Composite>
        );
    }

    return (
        <div
            className={clsx(['moonstone-collectionBar', styles['moonstone-collectionBar']], className)}
            ref={rootRef}
            {...props}
        >
            {controlGroup}
            {openFilter && (
                <FilterSelector
                    closeLabel={labels.closeButton}
                    filter={openFilter}
                    getAnchor={getChip}
                    getBar={getBar}
                    onClose={closeSelector}
                />
            )}
            {isAddMenuOpen && filtersToAdd.length > 0 && (
                <Menu
                    hasSearch={false}
                    isDisplayed
                    anchorEl={addFilterRef}
                    anchorPosition={menuAnchorPosition}
                    aria-label={labels.addFilter}
                    className={clsx('moonstone-collectionBar_addFilterMenu', styles['moonstone-collectionBar_addFilterMenu'])}
                    maxHeight={MENU_MAX_HEIGHT}
                    onClose={() => setIsAddMenuOpen(false)}
                >
                    {filtersToAdd.map(filter => (
                        <MenuItem
                            data-filter={filter.key}
                            iconStart={filter.iconStart}
                            key={filter.key}
                            label={filter.label}
                            onClick={() => addFilter(filter)}
                        />
                    ))}
                </Menu>
            )}
            {isColumnMenuOpen && columnItems.length > 0 && (
                <Menu
                    hasSearch
                    isDisplayed
                    anchorEl={columnButtonRef}
                    anchorElOrigin={columnMenuAnchorOrigin}
                    anchorPosition={menuAnchorPosition}
                    aria-label={labels.columnButton}
                    className={clsx('moonstone-collectionBar_columnMenu', styles['moonstone-collectionBar_columnMenu'])}
                    i18n={{ searchLabel: labels.searchLabel }}
                    maxHeight={MENU_MAX_HEIGHT}
                    minWidth="200px"
                    searchEmptyText={labels.searchEmptyText}
                    transformElOrigin={columnMenuTransformOrigin}
                    onClose={() => setIsColumnMenuOpen(false)}
                >
                    {columnItems}
                </Menu>
            )}
        </div>
    );
};

CollectionBar.displayName = 'CollectionBar';
