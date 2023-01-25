import React, {useState} from 'react';
import {ControlledAccordion} from './ControlledAccordion';
import {UncontrolledAccordionProps} from './Accordion.types';

export const UncontrolledAccordion: React.FC<UncontrolledAccordionProps> = ({defaultOpenedItem, children, ...props}) => {
    const [openedItem, setOpenedItem] = useState(defaultOpenedItem);

    const onSetOpenedItem = (id: string) => {
        setOpenedItem(prevState => {
            return prevState === id ? null : id;
        });
    };

    return (
        <ControlledAccordion openedItem={openedItem} onSetOpenedItem={onSetOpenedItem} {...props}>
            {children}
        </ControlledAccordion>
    );
};
