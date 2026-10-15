import { createContext, createElement, isValidElement, useContext } from 'react';

type FieldContextProps = {
    labelId: string;
    descriptionId?: string;
    hasError?: boolean;
};

export const FieldContext = createContext<FieldContextProps | undefined>(undefined);

// Links a control to the label, the helper and the error of the Field around it; a name the consumer sets wins
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

// Hides the Field from an input that is not its control, such as the search box of a menu or the AM/PM selector of a time
// The key of the node is kept, for a list such as the prefixComponents of an input
export const withoutField = (node: React.ReactNode) => createElement(FieldContext.Provider, {
    key: isValidElement(node) ? node.key : undefined,
    value: undefined,
}, node);
