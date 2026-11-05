import type { BaseDropdownProps } from '../Dropdown.types';
import type { ButtonSize } from '~/components/Button/Button.types';

export type CustomDropdownProps = Omit<BaseDropdownProps,
    'onClear' | 'hasSearch' | 'autoAddSearchLimit'
    | 'searchEmptyText' | 'imageSize' | 'onChange'
    | 'label' | 'placeholder' | 'size'> & {
        label?: string;
        /**
         * Size of the trigger button.
         * @default 'default'
         */
        size?: ButtonSize;
        children: React.ReactElement | React.ReactElement[];
    };
