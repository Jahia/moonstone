import {createContext} from 'react';

const state = {
    currentItem: null,
    isReversed: false,
    setCurrentItem: () => {}
};
const AccordionContext = createContext(state);

export {AccordionContext};
