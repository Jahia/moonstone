import {createContext} from 'react';
import {PrimaryNavContextProps} from './PrimaryNav.types';

export const PrimaryNavContext = createContext<Partial<PrimaryNavContextProps>>({});
