import { createContext } from 'react';

import type { CheckboxGroupContextProps } from './CheckboxGroup.types';

export const CheckboxGroupContext = createContext<CheckboxGroupContextProps | undefined>(undefined);
