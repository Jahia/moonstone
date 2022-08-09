import type {DropdownDataTree} from '~/components/Dropdown/Dropdown.types';

export const dropdownDataTree: DropdownDataTree[] = [
    {id: 'A1', label: 'A-1 level1', value: 'a1'},
    {id: 'A2', label: 'A-2 level1', value: 'a2', children: [{id: 'B1', label: 'B1 level2', value: 'b1'}]},
    {id: 'A3', label: 'A-3 level1', value: 'a3', isDisabled: true, children: [{id: 'B3', label: 'B3 level2', value: 'b3'}]}
];
