import { useListItem } from '@floating-ui/react';
import React, { createContext, useContext, useId } from 'react';

type FieldContextProps = {
    labelId: string;
    controlId: string;
    descriptionId?: string;
    hasError?: boolean;
};

export const FieldContext = createContext<FieldContextProps | undefined>(undefined);

// The ARIA attributes that link a control to the label, the helper and the error of the Field around it.
// Spread them after the props of the consumer: its values win, and its aria-describedby is joined to the helper and the error
export const useFieldAria = (props: React.AriaAttributes = {}) => {
    const field = useContext(FieldContext);
    if (!field) {
        return {};
    }

    return {
        'aria-labelledby': props['aria-labelledby'] ?? (props['aria-label'] ? undefined : field.labelId),
        'aria-describedby': [props['aria-describedby'], field.descriptionId].filter(Boolean).join(' ') || undefined,
        'aria-invalid': props['aria-invalid'] ?? (field.hasError || undefined),
    };
};

// The first control without an id takes the one the label points to, the next ones a unique id
export const useFieldControlId = (id?: string) => {
    const field = useContext(FieldContext);
    const uniqueId = useId();
    const { ref, index } = useListItem();
    if (id || !field) {
        return { id };
    }

    return {
        id: index > 0 ? uniqueId : field.controlId,
        ref,
    };
};

// Wraps an input that is part of a control but is not the control of the Field, such as the search box of a menu
export const WithoutField = ({ children }: { readonly children: React.ReactNode }) => (
    <FieldContext.Provider value={undefined}>{children}</FieldContext.Provider>
);
