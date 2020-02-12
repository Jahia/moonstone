import {createContext} from 'react';

const intialState = {
    currentItem: null,
    isReversed: false
};
export const AccordionContext = createContext(intialState);
