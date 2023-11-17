import {createContext} from 'react';
import {CheckboxGroupContextProps} from './CheckboxGroup.types';

export const CheckboxGroupContext = createContext<CheckboxGroupContextProps | undefined>(undefined);
