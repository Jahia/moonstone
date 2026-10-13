import { createContext } from 'react';

import type { ModalContextProps } from './Modal.types';

export const ModalContext = createContext<ModalContextProps | undefined>(undefined);
