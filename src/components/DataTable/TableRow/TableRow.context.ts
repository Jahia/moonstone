import { createContext } from 'react';

// The keys reach the focused row, not its cells: the row hides the status panel, and the status cell reads it here
export const TableRowContext = createContext<{
    isStatusDismissed: boolean;
    registerStatus: () => () => void;
} | undefined>(undefined);
