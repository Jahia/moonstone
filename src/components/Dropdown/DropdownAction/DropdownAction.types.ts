import {BaseDropdownProps} from '../Dropdown.types';

export type DropdownActionProps = Omit<BaseDropdownProps,
'data' | 'treeData' | 'onClear'
| 'hasSearch' | 'autoAddSearchLimit' |
'searchEmptyText' | 'imageSize' | 'onChange'
 | 'label' | 'placeholder'> & {
    label: string;
    children: React.ReactElement | React.ReactElement[];
}
