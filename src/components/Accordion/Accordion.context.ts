import {createContext} from 'react';
import {AccordionContextType} from './AccordionItem/AccordionItem.types';

const intialState: AccordionContextType = {
    isReversed: false
};

export const AccordionContext = createContext<AccordionContextType>(intialState);
