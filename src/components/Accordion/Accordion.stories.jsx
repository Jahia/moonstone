import React, {useState} from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';
import markdownNotes from './Accordion.md';

import {Accordion} from './index';
import {AccordionItem} from '~/components/Accordion/AccordionItem';
import Love from '~/tokens/icons/asset/Love.svg';
import BarSquare from '~/tokens/icons/asset/BarSquare.svg';
import Bug from '~/tokens/icons/asset/Bug.svg';

const accordionIds = ['01', '02', '03'];

storiesOf('Components|Accordion', module)
    .addParameters({
        component: Accordion,
        notes: {markdown: markdownNotes}
    })
    .addDecorator(withKnobs)
    .add('default', () => (
        <Accordion>
            <AccordionItem
                id={accordionIds[0]}
                icon={<Love/>}
                label="test 01"
                onClick={action(`click on AccordionItem with id : ${accordionIds[0]}`)}
            >
                Accordion Content
            </AccordionItem>
            <AccordionItem
                id={accordionIds[1]}
                icon={<Bug/>}
                label="test 02"
                onClick={action(`click on AccordionItem with id : ${accordionIds[1]}`)}
            >
                Accordion Content
            </AccordionItem>
            <AccordionItem
                id={accordionIds[2]}
                label="test 03 (with long content)"
                icon={<BarSquare/>}
                onClick={action(`click on AccordionItem with id : ${accordionIds[2]}`)}
            >
                Topgallant mutiny spike pressgang interloper transom loaded to the gunwalls hogshead smartly Letter of
                Marque. Arr belaying pin brigantine rigging warp gibbet maroon blow the man down scurvy fathom. Smartly
                fire in the hole aye warp sheet Pirate Round spanker squiffy line holystone.
                Grog blossom marooned hempen halter fire in the hole pressgang square-rigged chantey deadlights no prey,
                no pay brig. Sheet splice the main brace bounty jack brigantine hogshead scurvy Plate Fleet lass warp.
                Swab crack Jennys tea cup spike Privateer interloper boom Chain Shot Brethren of the Coast execution
                dock hang the jib.
                Snow nipper skysail gally barkadeer red ensign heave down weigh anchor brig me. Smartly run a rig
                measured fer yer chains Brethren of the Coast marooned ye ballast mizzenmast Sail ho knave. Bucko
                gangway reef sails belay landlubber or just lubber poop deck draft interloper main sheet ho.
                Snow nipper skysail gally barkadeer red ensign heave down weigh anchor brig me. Smartly run a rig
                measured fer yer chains Brethren of the Coast marooned ye ballast mizzenmast Sail ho knave. Bucko
                gangway reef sails belay landlubber or just lubber poop deck draft interloper main sheet ho.
                Snow nipper skysail gally barkadeer red ensign heave down weigh anchor brig me. Smartly run a rig
                measured fer yer chains Brethren of the Coast marooned ye ballast mizzenmast Sail ho knave. Bucko
                gangway reef sails belay landlubber or just lubber poop deck draft interloper main sheet ho.
                Snow nipper skysail gally barkadeer red ensign heave down weigh anchor brig me. Smartly run a rig
                measured fer yer chains Brethren of the Coast marooned ye ballast mizzenmast Sail ho knave. Bucko
                gangway reef sails belay landlubber or just lubber poop deck draft interloper main sheet ho.
                Snow nipper skysail gally barkadeer red ensign heave down weigh anchor brig me. Smartly run a rig
                measured fer yer chains Brethren of the Coast marooned ye ballast mizzenmast Sail ho knave. Bucko
                gangway reef sails belay landlubber or just lubber poop deck draft interloper main sheet ho.
                Snow nipper skysail gally barkadeer red ensign heave down weigh anchor brig me. Smartly run a rig
                measured fer yer chains Brethren of the Coast marooned ye ballast mizzenmast Sail ho knave. Bucko
                gangway reef sails belay landlubber or just lubber poop deck draft interloper main sheet ho.
                Snow nipper skysail gally barkadeer red ensign heave down weigh anchor brig me. Smartly run a rig
                measured fer yer chains Brethren of the Coast marooned ye ballast mizzenmast Sail ho knave. Bucko
                gangway reef sails belay landlubber or just lubber poop deck draft interloper main sheet ho.
                Snow nipper skysail gally barkadeer red ensign heave down weigh anchor brig me. Smartly run a rig
                measured fer yer chains Brethren of the Coast marooned ye ballast mizzenmast Sail ho knave. Bucko
                gangway reef sails belay landlubber or just lubber poop deck draft interloper main sheet ho.
                Snow nipper skysail gally barkadeer red ensign heave down weigh anchor brig me. Smartly run a rig
                measured fer yer chains Brethren of the Coast marooned ye ballast mizzenmast Sail ho knave. Bucko
                gangway reef sails belay landlubber or just lubber poop deck draft interloper main sheet ho.
                Snow nipper skysail gally barkadeer red ensign heave down weigh anchor brig me. Smartly run a rig
                measured fer yer chains Brethren of the Coast marooned ye ballast mizzenmast Sail ho knave. Bucko
                gangway reef sails belay landlubber or just lubber poop deck draft interloper main sheet ho.
                Snow nipper skysail gally barkadeer red ensign heave down weigh anchor brig me. Smartly run a rig
                measured fer yer chains Brethren of the Coast marooned ye ballast mizzenmast Sail ho knave. Bucko
                gangway reef sails belay landlubber or just lubber poop deck draft interloper main sheet ho.
                Snow nipper skysail gally barkadeer red ensign heave down weigh anchor brig me. Smartly run a rig
                measured fer yer chains Brethren of the Coast marooned ye ballast mizzenmast Sail ho knave. Bucko
                gangway reef sails belay landlubber or just lubber poop deck draft interloper main sheet ho.
                Snow nipper skysail gally barkadeer red ensign heave down weigh anchor brig me. Smartly run a rig
                measured fer yer chains Brethren of the Coast marooned ye ballast mizzenmast Sail ho knave. Bucko
                gangway reef sails belay landlubber or just lubber poop deck draft interloper main sheet ho.
                Snow nipper skysail gally barkadeer red ensign heave down weigh anchor brig me. Smartly run a rig
                measured fer yer chains Brethren of the Coast marooned ye ballast mizzenmast Sail ho knave. Bucko
                gangway reef sails belay landlubber or just lubber poop deck draft interloper main sheet ho.
                Snow nipper skysail gally barkadeer red ensign heave down weigh anchor brig me. Smartly run a rig
                measured fer yer chains Brethren of the Coast marooned ye ballast mizzenmast Sail ho knave. Bucko
                gangway reef sails belay landlubber or just lubber poop deck draft interloper main sheet ho.
                Snow nipper skysail gally barkadeer red ensign heave down weigh anchor brig me. Smartly run a rig
                measured fer yer chains Brethren of the Coast marooned ye ballast mizzenmast Sail ho knave. Bucko
                gangway reef sails belay landlubber or just lubber poop deck draft interloper main sheet ho.
                Snow nipper skysail gally barkadeer red ensign heave down weigh anchor brig me. Smartly run a rig
                measured fer yer chains Brethren of the Coast marooned ye ballast mizzenmast Sail ho knave. Bucko
                gangway reef sails belay landlubber or just lubber poop deck draft interloper main sheet ho.
                Snow nipper skysail gally barkadeer red ensign heave down weigh anchor brig me. Smartly run a rig
                measured fer yer chains Brethren of the Coast marooned ye ballast mizzenmast Sail ho knave. Bucko
                gangway reef sails belay landlubber or just lubber poop deck draft interloper main sheet ho.
                Snow nipper skysail gally barkadeer red ensign heave down weigh anchor brig me. Smartly run a rig
                measured fer yer chains Brethren of the Coast marooned ye ballast mizzenmast Sail ho knave. Bucko
                gangway reef sails belay landlubber or just lubber poop deck draft interloper main sheet ho.
            </AccordionItem>
        </Accordion>
    ))
    .add('open', () => (
        <Accordion
            isMultipleOpenable
            defaultOpenedItemId={['01', '02']}
        >
            <AccordionItem
                id={accordionIds[0]}
                icon={<Love/>}
                label="test 01"
                onClick={action(`click on AccordionItem with id : ${accordionIds[0]}`)}
            >
                Accordion Content
            </AccordionItem>
            <AccordionItem
                id={accordionIds[1]}
                icon={<Bug/>}
                label="test 02 is opened by default"
                onClick={action(`click on AccordionItem with id : ${accordionIds[1]}`)}
            >
                Accordion Content
            </AccordionItem>
            <AccordionItem
                id={accordionIds[2]}
                label="test 03 (with long content)"
                icon={<BarSquare/>}
                onClick={action(`click on AccordionItem with id : ${accordionIds[2]}`)}
            >
                Accordion Content
            </AccordionItem>
        </Accordion>
    ))
    .add('Mulitple', () => {
        return (
            <>
                <Accordion
                    isMultipleOpenable
                    defaultOpenedItemId={[accordionIds[1]]}
                >
                    <AccordionItem
                        id={accordionIds[0]}
                        icon={<Love/>}
                        label="test 01"
                        onClick={action(`click on AccordionItem with id : ${accordionIds[0]}`)}
                    >
                        Accordion Content
                    </AccordionItem>
                    <AccordionItem
                        id={accordionIds[1]}
                        icon={<Bug/>}
                        label="test 02 is opened by default"
                        onClick={action(`click on AccordionItem with id : ${accordionIds[1]}`)}
                    >
                        Accordion Content
                    </AccordionItem>
                    <AccordionItem
                        id={accordionIds[2]}
                        label="test 03 (with long content)"
                        icon={<BarSquare/>}
                        onClick={action(`click on AccordionItem with id : ${accordionIds[2]}`)}
                    >
                        Accordion Content
                    </AccordionItem>
                </Accordion>
            </>
        );
    })
    .add('Programmatic', () => {
        const [openedItems, setOpenedItems] = useState(null);

        const openAccordion = id => {
            setOpenedItems(id);
        };

        return (
            <>
                <span>
                    <button type="button" onClick={() => openAccordion(['01'])}>Open First</button>
                    <button type="button" onClick={() => openAccordion(['02'])}>Open Second</button>
                    <button type="button" onClick={() => openAccordion(['03'])}>Open Third</button>
                    <button type="button" onClick={() => openAccordion([])}>Close</button>
                </span>
                <Accordion
                    defaultOpenedItemId={[accordionIds[1]]}
                    openedItemId={openedItems}
                >
                    <AccordionItem
                        id={accordionIds[0]}
                        icon={<Love/>}
                        label="test 01"
                        onClick={action(`click on AccordionItem with id : ${accordionIds[0]}`)}
                    >
                        Accordion Content
                    </AccordionItem>
                    <AccordionItem
                        id={accordionIds[1]}
                        icon={<Bug/>}
                        label="test 02 is opened by default"
                        onClick={action(`click on AccordionItem with id : ${accordionIds[1]}`)}
                    >
                        Accordion Content
                    </AccordionItem>
                    <AccordionItem
                        id={accordionIds[2]}
                        label="test 03 (with long content)"
                        icon={<BarSquare/>}
                        onClick={action(`click on AccordionItem with id : ${accordionIds[2]}`)}
                    >
                        Accordion Content
                    </AccordionItem>
                </Accordion>
            </>
        );
    })
    .add('reversed', () => (
        <div style={{flex: '1', display: 'flex', backgroundColor: '#293136'}}>
            <Accordion isReversed>
                <AccordionItem
                    id={accordionIds[0]}
                    icon={<Love/>}
                    label="test 01"
                    onClick={action(`click on AccordionItem with id : ${accordionIds[0]}`)}
                >
                    Accordion Content
                </AccordionItem>
                <AccordionItem
                    id={accordionIds[1]}
                    icon={<Bug/>}
                    label="test 02 is opened by default"
                    onClick={action(`click on AccordionItem with id : ${accordionIds[1]}`)}
                >
                    Accordion Content
                </AccordionItem>
                <AccordionItem
                    id={accordionIds[2]}
                    label="test 03 (with long content)"
                    icon={<BarSquare/>}
                    onClick={action(`click on AccordionItem with id : ${accordionIds[2]}`)}
                >
                    Accordion Content
                </AccordionItem>
            </Accordion>
        </div>
    ));
