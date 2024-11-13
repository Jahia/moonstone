import React from 'react';
import {PickerSelectionItemProps} from './PickerSelectionItem/PickerSelectionItem.types';

export type PickerSelectionProps = {
    /**
     * Additional classname
     */
    className?: string;

    /**
     * PickerSelectionItem component
     */
    children: React.ReactElement<PickerSelectionItemProps>[];
};
