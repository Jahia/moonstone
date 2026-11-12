import type { BaseDropdownProps } from '../Dropdown.types';
import type { ButtonSize } from '~/components/Button/Button.types';

export type CustomDropdownProps = Omit<BaseDropdownProps,
    'onClear' | 'hasSearch' | 'autoAddSearchLimit'
    | 'searchEmptyText' | 'imageSize' | 'onChange'
    | 'label' | 'placeholder' | 'size'> & {
        label?: string;
        size?: ButtonSize;
        children: React.ReactElement | React.ReactElement[];
        /**
         * Called on a click of the trigger, before the menu opens. `preventDefault()` keeps the menu closed
         */
        onClick?: React.MouseEventHandler<HTMLButtonElement>;
        /**
         * Called on a key release on the trigger
         */
        onKeyUp?: React.KeyboardEventHandler<HTMLButtonElement>;
    };
