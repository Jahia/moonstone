import { Composite, CompositeItem } from '@floating-ui/react';
import clsx from 'clsx';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import { FilterSelector } from './FilterSelector';
import { Button } from '~/components/Button';
import { Menu, MenuItem } from '~/components/Menu';
import { Tooltip } from '~/components/Tooltip';
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

const columnMenuAnchorOrigin = {
    horizontal: 'right',
    vertical: 'bottom',
} as const;

const columnMenuTransformOrigin = {
    horizontal: 'right',
    vertical: 'top',
} as const;

const withName = (label: string, name: string) => label.split('{{name}}').join(name);

const hasValue = (filter: CollectionBarFilter) => Boolean(filter.valueLabel);

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
    const labels = {
        ...defaultI18n,
        ...i18n,
    };
    // The filters that Add filter put in the bar, in the order of their chips
    const [addedKeys, setAddedKeys] = useState<string[]>([]);
    const [openKey, setOpenKey] = useState<string | null>(null);
    const [isAddMenuOpen, setIsAddMenuOpen] = useState(false);
    const [isColumnMenuOpen, setIsColumnMenuOpen] = useState(false);
    const rovingTabIndex = useRovingTabIndex();

    const toolbarRef = useRef<HTMLDivElement>(null);
    const chipRefs = useRef(new Map<string, HTMLElement>());
    // The chip that takes the focus once the render after a close or a clear is done; null for the first control
    const focusRequest = useRef<{ key: string | null } | null>(null);
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

    // A chip that leaves the bar gives the focus to Add filter, else to the first control
    useEffect(() => {
        if (!focusRequest.current) {
            return;
        }

        const { key } = focusRequest.current;
        focusRequest.current = null;
        const chip = key === null ? null : chipRefs.current.get(key);
        const addFilter = addFilterRef.current?.hasAttribute('disabled') ? null : addFilterRef.current;
        const firstItem = toolbarRef.current?.querySelector<HTMLElement>('[data-roving-item]:not([disabled])');
        (chip ?? addFilter ?? firstItem)?.focus();
    });

    const getChip = useCallback(
        () => toolbarRef.current?.querySelector<HTMLElement>(`[data-filter="${CSS.escape(openKey ?? '')}"]`) ?? null,
        [openKey],
    );

    const setChipRef = (key: string) => (element: HTMLElement | null) => {
        if (element) {
            chipRefs.current.set(key, element);
        } else {
            chipRefs.current.delete(key);
        }
    };

    const closeSelector = () => {
        setOpenKey(null);
        openFilter?.onClose?.();
        focusRequest.current = { key: openFilter?.key ?? null };
    };

    const toggleSelector = (filter: CollectionBarFilter) => {
        if (openKey === filter.key) {
            closeSelector();
        } else {
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

    const clearFilter = (filter: CollectionBarFilter) => {
        filter.onClear();
        focusRequest.current = { key: filter.key };
    };

    const clearAll = () => {
        onClearAll();
        setAddedKeys([]);
        focusRequest.current = { key: null };
    };

    const toggleColumn = (key: string, isVisible: boolean) => {
        const next = isVisible ? visibleColumns.filter(visible => visible !== key) : [...visibleColumns, key];
        onVisibleColumnsChange(columns.map(column => column.key).filter(column => next.includes(column)));
    };

    // ---
    // Items of the toolbar, in the order of the arrow keys
    // ---
    const itemKeys: string[] = [];
    const itemStates: Array<{ isDisabled: boolean }> = [];
    const register = (key: string, isItemDisabled: boolean) => {
        itemKeys.push(key);
        itemStates.push({ isDisabled: isItemDisabled });
    };

    const chips = shownFilters.map((filter) => {
        const isFilterDisabled = isDisabled || Boolean(filter.isDisabled);
        const name = withName(labels.filterName, filter.label);
        register(`chip:${filter.key}`, isFilterDisabled);
        const edit = (
            <CompositeItem
                {...rovingItemProps}
                ref={setChipRef(filter.key)}
                render={(
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
                )}
            />
        );

        let clear: React.ReactElement = null;
        if (hasValue(filter)) {
            register(`clear:${filter.key}`, isFilterDisabled);
            clear = (
                <CompositeItem
                    {...rovingItemProps}
                    render={(
                        <Button
                            isDisabled={isFilterDisabled}
                            aria-label={withName(labels.clearFilter, filter.label)}
                            className={clsx('moonstone-collectionBar_chipClear', styles['moonstone-collectionBar_chipClear'])}
                            icon={<Close/>}
                            variant="outlined"
                            onClick={() => clearFilter(filter)}
                        />
                    )}
                />
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
                {/* The tooltip shows the full text of a value that ends with an ellipsis, on hover and on focus */}
                {hasValue(filter) ? <Tooltip label={`${name} ${filter.valueLabel}`}>{edit}</Tooltip> : edit}
                {clear}
            </span>
        );
    });

    let addButton: React.ReactElement = null;
    if (addableFilters.length > 0) {
        const isAddDisabled = isDisabled || filtersToAdd.length === 0;
        register('add', isAddDisabled);
        addButton = (
            <CompositeItem
                {...rovingItemProps}
                ref={addFilterRef}
                render={(
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
                            setOpenKey(null);
                            setIsAddMenuOpen(!isAddMenuOpen);
                        }}
                    />
                )}
            />
        );
    }

    let clearAllButton: React.ReactElement = null;
    if (onClearAll && filters.some(hasValue)) {
        register('clearAll', isDisabled);
        clearAllButton = (
            <CompositeItem
                {...rovingItemProps}
                render={<Button isDisabled={isDisabled} label={labels.clearAll} variant="ghost" onClick={clearAll}/>}
            />
        );
    }

    let columnButton: React.ReactElement = null;
    if (columns) {
        register('columns', isDisabled);
        columnButton = (
            <div className={clsx('moonstone-collectionBar_end', styles['moonstone-collectionBar_end'])}>
                <Tooltip label={labels.columnButton}>
                    <CompositeItem
                        {...rovingItemProps}
                        ref={columnButtonRef}
                        render={(
                            <Button
                                isDisabled={isDisabled}
                                aria-expanded={isColumnMenuOpen}
                                aria-haspopup="menu"
                                aria-label={labels.columnButton}
                                icon={<ViewColumn/>}
                                variant="ghost"
                                onClick={() => {
                                    setOpenKey(null);
                                    setIsColumnMenuOpen(!isColumnMenuOpen);
                                }}
                            />
                        )}
                    />
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

    return (
        <div
            className={clsx(['moonstone-collectionBar', styles['moonstone-collectionBar']], className)}
            {...props}
        >
            <Composite
                {...rovingTabIndex.getCompositeProps(getInitialIndex(itemStates), itemKeys)}
                orientation="horizontal"
                ref={toolbarRef}
                render={compositeProps => (
                    <div
                        {...compositeProps}
                        aria-label={labels.toolbarLabel}
                        className={clsx('moonstone-collectionBar_toolbar', styles['moonstone-collectionBar_toolbar'])}
                        role="toolbar"
                        {...mergeHandlers({
                            onKeyDown: rovingTabIndex.onKeyDown(compositeProps.onKeyDown),
                            onBlur: rovingTabIndex.onBlur,
                        })}
                    />
                )}
            >
                {chips}
                {addButton}
                {clearAllButton}
                {columnButton}
            </Composite>
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
                    onClose={() => setIsAddMenuOpen(false)}
                >
                    {filtersToAdd.map(filter => (
                        <MenuItem iconStart={filter.iconStart} key={filter.key} label={filter.label} onClick={() => addFilter(filter)}/>
                    ))}
                </Menu>
            )}
            {isColumnMenuOpen && columnItems.length > 0 && (
                <Menu
                    hasSearch
                    isDisplayed
                    anchorEl={columnButtonRef}
                    anchorElOrigin={columnMenuAnchorOrigin}
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
