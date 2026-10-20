import React, { createContext, useContext } from 'react';

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

// The id a labelable control (input, textarea) takes when the consumer passes none, so that a click on the label focuses it
export const useFieldControlId = (id?: string) => {
    const field = useContext(FieldContext);
    return id ?? field?.controlId;
};

// Wraps an input that is part of a control but is not the control of the Field, such as the search box of a menu
export const WithoutField = ({ children }: { readonly children: React.ReactNode }) => (
    <FieldContext.Provider value={undefined}>{children}</FieldContext.Provider>
);
