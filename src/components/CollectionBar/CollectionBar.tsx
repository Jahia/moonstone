import { Composite, CompositeItem } from '@floating-ui/react';
import clsx from 'clsx';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import { FilterSelector } from './FilterSelector';
import { Button } from '~/components/Button';
import { Menu, MenuItem } from '~/components/Menu';
import { Tooltip } from '~/components/Tooltip';
import { layout } from '~/globals/css-utils.js';
import { getInitialIndex, mergeHandlers, rovingItemProps, useRovingTabIndex } from '~/hooks';
import { Add, CheckboxChecked, CheckboxUnchecked, ChevronDown, Close, ViewColumn } from '~/icons';

import type { CollectionBarFilter, CollectionBarI18n, CollectionBarProps } from './CollectionBar.types';

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

// The APG toolbar pattern groups 3 controls or more
const TOOLBAR_MIN_CONTROLS = 3;

const withName = (label: string, name: string) => label.split('{{name}}').join(name);

const hasValue = (filter: CollectionBarFilter) => Boolean(filter.valueLabel);

// The control that takes the focus once the render after a change is done
type FocusRequest = { chip: string } | { column: string } | { first: true };

/**
 * A toolbar of filters above a collection, also called a filter bar: filter chips, Add filter,
 * Clear all and the column choice, above a DataTable, a list or thumbnails
 */
export const CollectionBar: React.FC<CollectionBarProps> = ({
    filters,
    columns,
    visibleColumns,
    onVisibleColumnsChange,
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
    const [openKey, setOpenKey] = useState<string | null>(null);
    const [isAddMenuOpen, setIsAddMenuOpen] = useState(false);
    const [isColumnMenuOpen, setIsColumnMenuOpen] = useState(false);
    const rovingTabIndex = useRovingTabIndex();

    const rootRef = useRef<HTMLDivElement>(null);
    const chipRefs = useRef(new Map<string, HTMLElement>());
    const focusRequest = useRef<FocusRequest | null>(null);
    const addFilterRef = useRef<HTMLElement>(null);
    const columnButtonRef = useRef<HTMLElement>(null);

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

    // A chip that leaves the bar gives the focus to Add filter, else to the first control.
    // A column that moves to the other section of its menu keeps the focus
    useEffect(() => {
        const request = focusRequest.current;
        if (!request) {
            return;
        }

        focusRequest.current = null;
        if ('column' in request) {
            rootRef.current?.querySelector<HTMLElement>(`[data-column="${CSS.escape(request.column)}"]`)?.focus();
            return;
        }

        const chip = 'chip' in request ? chipRefs.current.get(request.chip) : null;
        const addFilter = addFilterRef.current?.hasAttribute('disabled') ? null : addFilterRef.current;
        const firstItem = rootRef.current?.querySelector<HTMLElement>('[data-roving-item]:not([disabled])');
        (chip ?? addFilter ?? firstItem)?.focus();
    });

    const getChip = useCallback(
        () => rootRef.current?.querySelector<HTMLElement>(`.moonstone-collectionBar_chip[data-filter="${CSS.escape(openKey ?? '')}"]`) ?? null,
        [openKey],
    );

    const setChipRef = (key: string) => (element: HTMLElement | null) => {
        if (element) {
            chipRefs.current.set(key, element);
        } else {
            chipRefs.current.delete(key);
        }
    };

    // Every close of a selector calls its onClose, which commits a draft value
    const closeSelector = (isFocusBack = true) => {
        if (!openFilter) {
            return;
        }

        setOpenKey(null);
        openFilter.onClose?.();
        if (isFocusBack) {
            focusRequest.current = { chip: openFilter.key };
        }
    };

    const toggleSelector = (filter: CollectionBarFilter) => {
        if (openKey === filter.key) {
            closeSelector();
        } else {
            closeSelector(false);
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

    const clearFilter = (filter: CollectionBarFilter, event: React.MouseEvent) => {
        filter.onClear(event);
        focusRequest.current = { chip: filter.key };
    };

    const clearAll = (event: React.MouseEvent) => {
        onClearAll(event);
        setAddedKeys([]);
        focusRequest.current = { first: true };
    };

    const toggleColumn = (key: string, isVisible: boolean) => {
        const next = isVisible ? visibleColumns.filter(visible => visible !== key) : [...visibleColumns, key];
        onVisibleColumnsChange(columns.map(column => column.key).filter(column => next.includes(column)));
        focusRequest.current = { column: key };
    };

    // ---
    // Controls of the bar, in the order of the arrow keys. With fewer than 3, each one is a Tab stop
    // ---
    const controlCount = shownFilters.length + shownFilters.filter(hasValue).length
        + (addableFilters.length > 0 ? 1 : 0) + (hasClearAll ? 1 : 0) + (columns ? 1 : 0);
    const isToolbar = controlCount >= TOOLBAR_MIN_CONTROLS;
    const itemKeys: string[] = [];
    const itemStates: Array<{ isDisabled: boolean }> = [];
    const control = (key: string, isItemDisabled: boolean, button: React.ReactElement, ref?: React.Ref<HTMLElement>) => {
        itemKeys.push(key);
        itemStates.push({ isDisabled: isItemDisabled });
        return isToolbar
            ? <CompositeItem {...rovingItemProps} ref={ref} render={button}/>
            : React.cloneElement(button as React.ReactElement<{ ref?: React.Ref<HTMLElement> }>, {
                    ...rovingItemProps,
                    ref,
                });
    };

    const chips = shownFilters.map((filter) => {
        const isFilterDisabled = isDisabled || Boolean(filter.isDisabled);
        const name = withName(labels.filterName, filter.label);
        const edit = control(`chip:${filter.key}`, isFilterDisabled, (
            <Button
                isDisabled={isFilterDisabled}
                aria-expanded={openKey === filter.key}
                aria-haspopup="dialog"
                className={clsx('moonstone-collectionBar_chipButton', styles['moonstone-collectionBar_chipButton'])}
                iconEnd={<ChevronDown/>}
                label={hasValue(filter) ? <><strong>{name}</strong> {filter.valueLabel}</> : filter.label}
                variant="outlined"
                onClick={() => toggleSelector(filter)}
            />
        ), setChipRef(filter.key));

        let clear: React.ReactElement = null;
        if (hasValue(filter)) {
            const clearLabel = withName(labels.clearFilter, filter.label);
            clear = (
                <Tooltip className={clsx('moonstone-collectionBar_chipClearTooltip', styles['moonstone-collectionBar_chipClearTooltip'])} label={clearLabel}>
                    {control(`clear:${filter.key}`, isFilterDisabled, (
                        <Button
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
            >
                {shownEdit}
                {clear}
            </span>
        );
    });

    let addButton: React.ReactElement = null;
    if (addableFilters.length > 0) {
        const isAddDisabled = isDisabled || filtersToAdd.length === 0;
        addButton = control('add', isAddDisabled, (
            <Button
                isDisabled={isAddDisabled}
                aria-expanded={isAddMenuOpen}
                aria-haspopup="menu"
                className={clsx('moonstone-collectionBar_addFilter', styles['moonstone-collectionBar_addFilter'])}
                color="accent"
                icon={<Add/>}
                label={labels.addFilter}
                variant="ghost"
                onClick={() => {
                    closeSelector(false);
                    setIsAddMenuOpen(!isAddMenuOpen);
                }}
            />
        ), addFilterRef);
    }

    let clearAllButton: React.ReactElement = null;
    if (hasClearAll) {
        clearAllButton = control('clearAll', isDisabled, (
            <Button
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
                    {control('columns', isDisabled, (
                        <Button
                            isDisabled={isDisabled}
                            aria-expanded={isColumnMenuOpen}
                            aria-haspopup="menu"
                            aria-label={labels.columnButton}
                            className={clsx('moonstone-collectionBar_columnButton', styles['moonstone-collectionBar_columnButton'])}
                            icon={<ViewColumn/>}
                            variant="ghost"
                            onClick={() => {
                                closeSelector(false);
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
        const sectionColumns = columns.filter(column => visibleColumns.includes(column.key) === isVisible);
        if (sectionColumns.length === 0) {
            return [];
        }

        return [
            <MenuItem key={isVisible ? 'visible' : 'hidden'} label={title} variant="title"/>,
            ...sectionColumns.map(column => (
                <MenuItem
                    aria-checked={isVisible}
                    data-column={column.key}
                    iconStart={isVisible ? <CheckboxChecked color="blue"/> : <CheckboxUnchecked/>}
                    key={column.key}
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
