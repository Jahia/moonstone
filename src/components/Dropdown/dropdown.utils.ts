import clsx from 'clsx';

import type {DropdownDataOption, DropdownData, DropdownDataTree} from './BaseDropdown/BaseDropdown.types';

type Data = DropdownDataOption[] | DropdownData[] | DropdownDataTree[] | []
type ListData = DropdownDataOption[] | DropdownData[] | [];
type GroupedData = DropdownData[];
type setOpenedBySearchProps = React.Dispatch<React.SetStateAction<string[]>>
type SelectedNodeKeys<T> = T extends DropdownDataTree[] ? 'label' | 'value' | 'id' : 'label' | 'value'
type SelectedNodeItem<T> = {[key in SelectedNodeKeys<T>]: string }

// Search function
const isLabelMatchSearch = (label: string, searchedValue: string) => {
    if (label !== undefined) {
        return label.toLowerCase().includes(searchedValue.toLowerCase().trim());
    }

    return false;
};

// Filter flat dropdown data
const filterList = (data: DropdownDataOption[], searchedValue: string) => {
    return data.filter((option: DropdownDataOption) => isLabelMatchSearch(option.label, searchedValue));
};

// Filter grouped dropdown data
const filterGroupedData = (data: GroupedData, searchedValue: string) => {
    const result: DropdownData[] = [];

    data.map(item => {
        const filterResult = filterList(item.options, searchedValue);

        if (filterResult.length > 0) {
            result.push({
                ...item,
                options: filterResult
            } as DropdownData);
        }

        return false;
    });

    return result;
};

// Filter tree dropdown data used with filterNodes
const filterNode = (data: DropdownDataTree, searchedValue: string, setOpenedBySearch: setOpenedBySearchProps): DropdownDataTree => {
    const match = isLabelMatchSearch(data.label, searchedValue);
    const filteredChildren: DropdownDataTree[] = [];

    if (data.children) {
        const filterResult = filterNodes(data.children, searchedValue, setOpenedBySearch);
        if (filterResult.length > 0) {
            filteredChildren.push(...filterResult);
            setOpenedBySearch(previousOpenedBySearch => [...previousOpenedBySearch, data.id]);
        }
    }

    if (match) {
        return data;
    }

    if (filteredChildren.length > 0) {
        return {
            ...data,
            treeItemProps: {className: clsx({'moonstone-disabled': !match})},
            children: filteredChildren
        };
    }
};

// Filter tree dropdown
const filterNodes = (data: DropdownDataTree[], searchedValue: string, setOpenedBySearch: setOpenedBySearchProps): DropdownDataTree[] => {
    const result: DropdownDataTree[] = [];

    data.forEach(node => {
        const filterResult = filterNode(node, searchedValue, setOpenedBySearch);
        if (filterResult) {
            result.push(filterResult);
        }
    });

    return result;
};

// Generic function to filter all dropdown types
export const filterData = (data: Data, searchedValue: string, isTree?: boolean, setOpenedBySearch?: setOpenedBySearchProps): Data => {
    if (searchedValue !== '') {
        if (isGrouped(data)) {
            return filterGroupedData(data, searchedValue);
        }

        if (isTree) {
            return filterNodes(data as DropdownDataTree[], searchedValue, setOpenedBySearch);
        }

        return filterList(data as DropdownDataOption[], searchedValue);
    }

    return data;
};

// Define if the dropdown data has group level and used as type guard for typescript
export const isGrouped = (data: ListData): data is DropdownData[] => {
    if (data.length > 0) {
        return Object.prototype.hasOwnProperty.call(data[0], 'options');
    }

    return false;
};

// Get selected items by values, usefull to get label or id of selected items
export const getSelectedItemsByValues = (data: Data, selectedValues: string[], isTree: boolean) => {
    const result: SelectedNodeItem<Data>[] = [];
    if (selectedValues.length === 0) {
        return result;
    }

    for (const item of data) {
        if ('value' in item && selectedValues.includes(item.value)) {
            const r: SelectedNodeItem<Data> = {
                label: item.label,
                value: item.value,
                ...('id' in item && {id: item.id})
            };

            result.push(r);
        }

        // For DropdownGrouped
        if ('options' in item) {
            const optionsResult = getSelectedItemsByValues(item.options, selectedValues, isTree);
            if (optionsResult) {
                result.push(...optionsResult);
            }
        }

        // For DropdownTree
        if (isTree) {
            if ('children' in item) {
                const desiredNodeId = getSelectedItemsByValues(item.children, selectedValues, isTree);

                if (desiredNodeId) {
                    result.push(...desiredNodeId);
                }
            }
        }
    }

    return result;
};

// Get selected ids from selectedNodes used by DropdownMenuTree
export const getSelectedNodesId = (selectedNodes: {[key in 'label' | 'value' | 'id']: string }[]) => {
    return selectedNodes.map(node => node.id);
};
