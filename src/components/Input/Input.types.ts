import React from 'react';
import type {BaseInputProps} from './BaseInput/BaseInput.types'

export type InputProps = {
    /**
     * Variant of the input to use
     * @depracted
     */
     variant?: 'text' | 'search';
} & BaseInputProps
