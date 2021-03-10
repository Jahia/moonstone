import {createContext} from 'react';

type AccordionContextType = {
    isReversed: boolean;
    currentItem?: string;
    onSetOpenedItem?: (id: string) => void;
}

const intialState: AccordionContextType = {
    isReversed: false,
    currentItem: '',
    onSetOpenedItem: (id) => undefined
};

export const AccordionContext = createContext<AccordionContextType>(intialState);
