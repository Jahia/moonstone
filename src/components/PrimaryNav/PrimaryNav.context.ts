import {createContext} from 'react';
import type {PrimaryNavContextProps} from './PrimaryNav.types';

export const PrimaryNavContext = createContext<Partial<PrimaryNavContextProps>>({});
