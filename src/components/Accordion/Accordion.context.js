import {createContext} from 'react';

const intialState = {
    currentItemId: null,
    isReversed: false,
    isMultipleOpenable: false
};
export const AccordionContext = createContext(intialState);
