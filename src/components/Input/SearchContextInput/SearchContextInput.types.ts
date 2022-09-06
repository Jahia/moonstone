import React from 'react';
import type {DropdownProps} from '~/components/Dropdown/Dropdown.types';
import type {BaseInputProps} from '../BaseInput/BaseInput.types';

export type SearchContextInputProps = {
    /**
     * Slot to display a dropdown to manage search context
     */
     searchContext: React.ReactElement<DropdownProps>;
} & BaseInputProps
