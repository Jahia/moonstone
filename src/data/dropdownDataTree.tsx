import type {TreeViewData} from '~/components/TreeView/TreeView.types';

export const dropdownDataTree: TreeViewData[] = [
    {id: 'A1', label: 'A-1 level1', value: 'a1'},
    {id: 'A2', label: 'A-2 level1', value: 'a2', children: [{id: 'B1', label: 'B1 level2', value: 'b1'}]},
    {id: 'A3', label: 'A-3 level1 (disabled)', value: 'a3', isDisabled: true, children: [{id: 'B2', label: 'B2 level2', value: 'b2'}]}
];
