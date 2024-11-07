import React from 'react';

import type {BaseInputProps} from '../BaseInput/BaseInput.types';
import type {AccordionItemProps} from '~/components/Accordion/AccordionItem/AccordionItem.types';

export type SearchContextInputProps = Omit<BaseInputProps, 'isShowClearButton' | 'icon' | 'role' | 'size' | 'prefixComponents'> & {
    /**
     * Slot to display a dropdown to manage search context
     */
     searchContext: React.ReactElement<AccordionItemProps>;
}
