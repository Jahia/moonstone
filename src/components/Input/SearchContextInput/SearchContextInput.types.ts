import React from 'react';

import type {BaseInputProps} from '../BaseInput/BaseInput.types';

export type SearchContextInputProps = {
    /**
     * Slot to display a dropdown to manage search context
     */
     searchContext: React.ReactElement;
} & BaseInputProps
