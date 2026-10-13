import { createContext } from 'react';

// Id of the ModalHeader title, which names the modal
export const ModalContext = createContext<string | undefined>(undefined);
