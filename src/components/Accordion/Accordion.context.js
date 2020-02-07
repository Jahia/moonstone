import {createContext} from 'react';

const intialState = {
    currentItemId: null,
    isReversed: false
};
export const AccordionContext = createContext(intialState);
