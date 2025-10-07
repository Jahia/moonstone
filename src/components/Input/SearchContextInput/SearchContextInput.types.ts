import React from 'react';

import type {BaseInputProps} from '../BaseInput/BaseInput.types';
import type {DropdownProps} from '~/components/Dropdown/Dropdown.types';

export type SearchContextInputProps = Omit<BaseInputProps, 'isShowClearButton' | 'icon' | 'role' | 'variant' | 'size' | 'prefixComponents' | 'filterFunction' | 'allowDecimal' | 'allowNegative'> & {
    /**
     * Slot to display a dropdown to manage search context
     */
     searchContext: React.ReactElement<DropdownProps>;
}
