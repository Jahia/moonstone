import React, { createContext, useContext } from 'react';

type FieldContextProps = {
    labelId: string;
    descriptionId?: string;
    hasError?: boolean;
};

export const FieldContext = createContext<FieldContextProps | undefined>(undefined);

// The ARIA attributes that link a control to the label, the helper and the error of the Field around it
// A control the consumer names with aria-label keeps that name
export const useFieldAria = (ariaLabel?: string) => {
    const field = useContext(FieldContext);
    if (!field) {
        return {};
    }

    return {
        'aria-labelledby': ariaLabel ? undefined : field.labelId,
        'aria-describedby': field.descriptionId,
        'aria-invalid': field.hasError || undefined,
    };
};

// Wraps an input that is part of a control but is not the control of the Field, such as the search box of a menu
export const WithoutField = ({ children }: { readonly children: React.ReactNode }) => (
    <FieldContext.Provider value={undefined}>{children}</FieldContext.Provider>
);
