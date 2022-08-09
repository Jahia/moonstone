import clsx from 'clsx';

import type {DropdownDataOption, DropdownData} from './Dropdown.types';
import type {TreeViewData} from '~/components/TreeView/TreeView.types';

type Data = DropdownDataOption[] | DropdownData[] | TreeViewData[] | []
type ListData = DropdownDataOption[] | DropdownData[] | [];
type GroupedData = DropdownData[];
type setOpenedBySearchProps = React.Dispatch<React.SetStateAction<string[]>>

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
const filterNode = (data: TreeViewData, searchedValue: string, setOpenedBySearch: setOpenedBySearchProps): TreeViewData => {
    const match = isLabelMatchSearch(data.label, searchedValue);
    const filteredChildren: TreeViewData[] = [];

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
const filterNodes = (data: TreeViewData[], searchedValue: string, setOpenedBySearch: setOpenedBySearchProps): TreeViewData[] => {
    const result: TreeViewData[] = [];

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
            return filterNodes(data as TreeViewData[], searchedValue, setOpenedBySearch);
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

// Search function
export const isLabelMatchSearch = (label: string, searchedValue: string) => {
    if (label !== undefined) {
        return label.toLowerCase().includes(searchedValue.toLowerCase().trim());
    }

    return false;
};
