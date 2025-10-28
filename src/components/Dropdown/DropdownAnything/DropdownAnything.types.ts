import {BaseDropdownProps} from '../Dropdown.types';

export type DropdownAnythingProps = Omit<BaseDropdownProps,
'values' | 'data' | 'treeData'
| 'hasSearch' | 'autoAddSearchLimit' |
'searchEmptyText' | 'imageSize' | 'onChange'> & {
    value?: string;
    children: React.ReactElement | React.ReactElement[];
}
