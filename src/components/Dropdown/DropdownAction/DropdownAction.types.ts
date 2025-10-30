import {BaseDropdownProps} from '../Dropdown.types';
import {ButtonSize} from '~/components/Button/Button.types';

export type DropdownActionProps = Omit<BaseDropdownProps,
'onClear'| 'hasSearch' | 'autoAddSearchLimit'
| 'searchEmptyText' | 'imageSize' | 'onChange'
| 'label' | 'placeholder' | 'size'> & {
    label?: string;
    size?: ButtonSize;
    children: React.ReactElement | React.ReactElement[];
}
