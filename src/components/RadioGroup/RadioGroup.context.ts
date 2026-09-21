import { createContext } from 'react';

import type { RadioGroupContextProps } from './RadioGroup.types';

export const RadioGroupContext = createContext<RadioGroupContextProps | undefined>(undefined);
