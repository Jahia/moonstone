import {createContext} from 'react';
import {RadioGroupContextProps} from './RadioGroup.types';

export const RadioGroupContext = createContext<RadioGroupContextProps | undefined>(undefined);
