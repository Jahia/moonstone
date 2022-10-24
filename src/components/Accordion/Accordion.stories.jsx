import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
// Import markdownNotes from './Accordion.md';

import {Accordion} from './index';
import {AccordionItem} from '~/components/Accordion/AccordionItem';
import {Love, BarSquare, Bug} from '~/icons';

const accordionIds = ['01', '02', '03'];

export default {
    title: 'Components/Accordion',
    component: Accordion
};

export const Default = () => (
    <Accordion>
        <AccordionItem
            id={accordionIds[0]}
            icon={<Love size="big"/>}
            label="test 01"
            onClick={action(`click on AccordionItem with id : ${accordionIds[0]}`)}
        >
            Accordion Content
        </AccordionItem>
        <AccordionItem
            id={accordionIds[1]}
            icon={<Bug size="big"/>}
            label="test 02"
            onClick={action(`click on AccordionItem with id : ${accordionIds[1]}`)}
        >
            Accordion Content
        </AccordionItem>
        <AccordionItem
            id={accordionIds[2]}
            label="test 03 (with long content)"
            icon={<BarSquare size="big"/>}
            onClick={action(`click on AccordionItem with id : ${accordionIds[2]}`)}
        >
            Topgallant mutiny spike pressgang interloper transom loaded to the
            gunwalls hogshead smartly Letter of Marque. Arr belaying pin brigantine
            rigging warp gibbet maroon blow the man down scurvy fathom. Smartly fire
            in the hole aye warp sheet Pirate Round spanker squiffy line holystone.
            Grog blossom marooned hempen halter fire in the hole pressgang
            square-rigged chantey deadlights no prey, no pay brig. Sheet splice the
            main brace bounty jack brigantine hogshead scurvy Plate Fleet lass warp.
            Swab crack Jennys tea cup spike Privateer interloper boom Chain Shot
            Brethren of the Coast execution dock hang the jib. Snow nipper skysail
            gally barkadeer red ensign heave down weigh anchor brig me. Smartly run a
            rig measured fer yer chains Brethren of the Coast marooned ye ballast
            mizzenmast Sail ho knave. Bucko gangway reef sails belay landlubber or
            just lubber poop deck draft interloper main sheet ho. Snow nipper skysail
            gally barkadeer red ensign heave down weigh anchor brig me. Smartly run a
            rig measured fer yer chains Brethren of the Coast marooned ye ballast
            mizzenmast Sail ho knave. Bucko gangway reef sails belay landlubber or
            just lubber poop deck draft interloper main sheet ho. Snow nipper skysail
            gally barkadeer red ensign heave down weigh anchor brig me. Smartly run a
            rig measured fer yer chains Brethren of the Coast marooned ye ballast
            mizzenmast Sail ho knave. Bucko gangway reef sails belay landlubber or
            just lubber poop deck draft interloper main sheet ho. Snow nipper skysail
            gally barkadeer red ensign heave down weigh anchor brig me. Smartly run a
            rig measured fer yer chains Brethren of the Coast marooned ye ballast
            mizzenmast Sail ho knave. Bucko gangway reef sails belay landlubber or
            just lubber poop deck draft interloper main sheet ho. Snow nipper skysail
            gally barkadeer red ensign heave down weigh anchor brig me. Smartly run a
            rig measured fer yer chains Brethren of the Coast marooned ye ballast
            mizzenmast Sail ho knave. Bucko gangway reef sails belay landlubber or
            just lubber poop deck draft interloper main sheet ho. Snow nipper skysail
            gally barkadeer red ensign heave down weigh anchor brig me. Smartly run a
            rig measured fer yer chains Brethren of the Coast marooned ye ballast
            mizzenmast Sail ho knave. Bucko gangway reef sails belay landlubber or
            just lubber poop deck draft interloper main sheet ho. Snow nipper skysail
            gally barkadeer red ensign heave down weigh anchor brig me. Smartly run a
            rig measured fer yer chains Brethren of the Coast marooned ye ballast
            mizzenmast Sail ho knave. Bucko gangway reef sails belay landlubber or
            just lubber poop deck draft interloper main sheet ho. Snow nipper skysail
            gally barkadeer red ensign heave down weigh anchor brig me. Smartly run a
            rig measured fer yer chains Brethren of the Coast marooned ye ballast
            mizzenmast Sail ho knave. Bucko gangway reef sails belay landlubber or
            just lubber poop deck draft interloper main sheet ho. Snow nipper skysail
            gally barkadeer red ensign heave down weigh anchor brig me. Smartly run a
            rig measured fer yer chains Brethren of the Coast marooned ye ballast
            mizzenmast Sail ho knave. Bucko gangway reef sails belay landlubber or
            just lubber poop deck draft interloper main sheet ho. Snow nipper skysail
            gally barkadeer red ensign heave down weigh anchor brig me. Smartly run a
            rig measured fer yer chains Brethren of the Coast marooned ye ballast
            mizzenmast Sail ho knave. Bucko gangway reef sails belay landlubber or
            just lubber poop deck draft interloper main sheet ho. Snow nipper skysail
            gally barkadeer red ensign heave down weigh anchor brig me. Smartly run a
            rig measured fer yer chains Brethren of the Coast marooned ye ballast
            mizzenmast Sail ho knave. Bucko gangway reef sails belay landlubber or
            just lubber poop deck draft interloper main sheet ho. Snow nipper skysail
            gally barkadeer red ensign heave down weigh anchor brig me. Smartly run a
            rig measured fer yer chains Brethren of the Coast marooned ye ballast
            mizzenmast Sail ho knave. Bucko gangway reef sails belay landlubber or
            just lubber poop deck draft interloper main sheet ho. Snow nipper skysail
            gally barkadeer red ensign heave down weigh anchor brig me. Smartly run a
            rig measured fer yer chains Brethren of the Coast marooned ye ballast
            mizzenmast Sail ho knave. Bucko gangway reef sails belay landlubber or
            just lubber poop deck draft interloper main sheet ho. Snow nipper skysail
            gally barkadeer red ensign heave down weigh anchor brig me. Smartly run a
            rig measured fer yer chains Brethren of the Coast marooned ye ballast
            mizzenmast Sail ho knave. Bucko gangway reef sails belay landlubber or
            just lubber poop deck draft interloper main sheet ho. Snow nipper skysail
            gally barkadeer red ensign heave down weigh anchor brig me. Smartly run a
            rig measured fer yer chains Brethren of the Coast marooned ye ballast
            mizzenmast Sail ho knave. Bucko gangway reef sails belay landlubber or
            just lubber poop deck draft interloper main sheet ho. Snow nipper skysail
            gally barkadeer red ensign heave down weigh anchor brig me. Smartly run a
            rig measured fer yer chains Brethren of the Coast marooned ye ballast
            mizzenmast Sail ho knave. Bucko gangway reef sails belay landlubber or
            just lubber poop deck draft interloper main sheet ho. Snow nipper skysail
            gally barkadeer red ensign heave down weigh anchor brig me. Smartly run a
            rig measured fer yer chains Brethren of the Coast marooned ye ballast
            mizzenmast Sail ho knave. Bucko gangway reef sails belay landlubber or
            just lubber poop deck draft interloper main sheet ho. Snow nipper skysail
            gally barkadeer red ensign heave down weigh anchor brig me. Smartly run a
            rig measured fer yer chains Brethren of the Coast marooned ye ballast
            mizzenmast Sail ho knave. Bucko gangway reef sails belay landlubber or
            just lubber poop deck draft interloper main sheet ho. Snow nipper skysail
            gally barkadeer red ensign heave down weigh anchor brig me. Smartly run a
            rig measured fer yer chains Brethren of the Coast marooned ye ballast
            mizzenmast Sail ho knave. Bucko gangway reef sails belay landlubber or
            just lubber poop deck draft interloper main sheet ho.
        </AccordionItem>
    </Accordion>
);

export const Opened = () => (
    <Accordion defaultOpenedItem={accordionIds[1]}>
        <AccordionItem
            id={accordionIds[0]}
            icon={<Love size="big"/>}
            label="test 01"
            onClick={action(`click on AccordionItem with id : ${accordionIds[0]}`)}
        >
            Accordion Content
        </AccordionItem>
        <AccordionItem
            id={accordionIds[1]}
            icon={<Bug size="big"/>}
            label="test 02 is opened by default"
            onClick={action(`click on AccordionItem with id : ${accordionIds[1]}`)}
        >
            Accordion Content
        </AccordionItem>
        <AccordionItem
            id={accordionIds[2]}
            label="test 03 (with long content)"
            icon={<BarSquare size="big"/>}
            onClick={action(`click on AccordionItem with id : ${accordionIds[2]}`)}
        >
            Accordion Content
        </AccordionItem>
    </Accordion>
);

export const Controlled = () => {
    const [stateOpenedItems, setStateOpenedItem] = useState(accordionIds[1]);

    const onSetOpenedItem = id => {
        setStateOpenedItem(prevState => {
            return prevState === id ? null : id;
        });
    };

    return (
        <>
            <span>
                <button type="button" onClick={() => onSetOpenedItem('01')}>
                    Open First
                </button>
                <button type="button" onClick={() => onSetOpenedItem('02')}>
                    Open Second
                </button>
                <button type="button" onClick={() => onSetOpenedItem('03')}>
                    Open Third
                </button>
                <button type="button" onClick={() => onSetOpenedItem(null)}>
                    Close
                </button>
            </span>
            <Accordion
                openedItem={stateOpenedItems}
                onSetOpenedItem={onSetOpenedItem}
            >
                <AccordionItem
                    id={accordionIds[0]}
                    icon={<Love size="big"/>}
                    label="test 01"
                    onClick={action(`click on AccordionItem with id : ${accordionIds[0]}`)}
                >
                    Accordion Content
                </AccordionItem>
                <AccordionItem
                    id={accordionIds[1]}
                    icon={<Bug size="big"/>}
                    label="test 02 is opened by default"
                    onClick={action(`click on AccordionItem with id : ${accordionIds[1]}`)}
                >
                    Accordion Content
                </AccordionItem>
                <AccordionItem
                    id={accordionIds[2]}
                    label="test 03 (with long content)"
                    icon={<BarSquare size="big"/>}
                    onClick={action(`click on AccordionItem with id : ${accordionIds[2]}`)}
                >
                    Accordion Content
                </AccordionItem>
            </Accordion>
        </>
    );
};

export const Reversed = () => (
    <div style={{flex: '1', display: 'flex', backgroundColor: '#293136'}}>
        <Accordion isReversed defaultOpenedItem={accordionIds[1]}>
            <AccordionItem
                id={accordionIds[0]}
                icon={<Love size="big"/>}
                label="test 01"
                onClick={action(`click on AccordionItem with id : ${accordionIds[0]}`)}
            >
                Accordion Content
            </AccordionItem>
            <AccordionItem
                id={accordionIds[1]}
                icon={<Bug size="big"/>}
                label="test 02 is opened by default"
                onClick={action(`click on AccordionItem with id : ${accordionIds[1]}`)}
            >
                Accordion Content
            </AccordionItem>
            <AccordionItem
                id={accordionIds[2]}
                label="test 03 (with long content)"
                icon={<BarSquare size="big"/>}
                onClick={action(`click on AccordionItem with id : ${accordionIds[2]}`)}
            >
                Accordion Content
            </AccordionItem>
        </Accordion>
    </div>
);
