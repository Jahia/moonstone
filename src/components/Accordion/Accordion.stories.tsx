import {useState} from 'react';
import preview from '../../../.storybook/preview';
import {Accordion} from './index';
import {AccordionItem} from '~/components/Accordion/AccordionItem';
import markdownNotes from './Accordion.md';
import {Love, BarSquare, Bug} from '~/icons';
import type {AccordionProps} from './Accordion.types';

const accordionIds = ['01', '02', '03'];

const meta = preview.meta({
    title: 'Components/Accordion',
    component: Accordion,
    subcomponents: {AccordionItem},
    decorators: [
        StoryCmp => (
            <div
                style={{display: 'flex', flexDirection: 'column', height: '100vh'}}
            >
                <StoryCmp/>
            </div>
        )
    ],
    parameters: {
        docs: {
            IframeHeight: 800
        },
        notes: {markdown: markdownNotes},
        actions: {argTypesRegex: '^on.*'}
    }
});

const defaultChildren = [
    <AccordionItem
        key="01"
        id={accordionIds[0]}
        icon={<Love size="big"/>}
        label="test 01"
    >
        Accordion Content 01
    </AccordionItem>,
    <AccordionItem
        key="02"
        id={accordionIds[1]}
        icon={<Bug size="big"/>}
        label="test 02"
    >
        Accordion Content 02
    </AccordionItem>,
    <AccordionItem
        key="03"
        id={accordionIds[2]}
        label="test 03 (with long content)"
        icon={<BarSquare size="big"/>}
    >
        Topgallant mutiny spike pressgang interloper transom loaded to the
        gunwalls hogshead smartly Letter of Marque. Arr belaying pin brigantine
        rigging warp gibbet maroon blow the man down scurvy fathom. Smartly fire
        in the hole aye warp sheet Pirate Round spanker squiffy line holystone.
        Grog blossom marooned hempen halter fire in the hole pressgang
        square-rigged chantey deadlights no prey, no pay brig. Sheet splice the
        main brace bounty jack brigantine hogshead scurvy Plate Fleet lass warp.
        Swab crack Jennys tea cup spike Privateer interloper boom Chain Shot
        Brethren of the Coast execution dock hang the jib.
    </AccordionItem>
];

export const Default = meta.story({
    args: {
        children: defaultChildren
    }
});

export const DefaultOpened = Default.extend({
    args: {
        defaultOpenedItem: accordionIds[1]
    }
});

const controlledChildren = [
    <AccordionItem
        key="01"
        id={accordionIds[0]}
        icon={<Love size="big"/>}
        label="test 01"
    >
        Accordion Content
    </AccordionItem>,
    <AccordionItem
        key="02"
        id={accordionIds[1]}
        icon={<Bug size="big"/>}
        label="test 02 is opened by default"
    >
        Accordion Content
    </AccordionItem>,
    <AccordionItem
        key="03"
        id={accordionIds[2]}
        label="test 03 (with long content)"
        icon={<BarSquare size="big"/>}
    >
        Accordion Content
    </AccordionItem>
];

export const Controlled = meta.story({
    args: {
        children: controlledChildren
    },
    render: (args: AccordionProps) => {
        const [stateOpenedItems, setStateOpenedItem] = useState(accordionIds[1]);

        const onSetOpenedItem = (id: string | null) => {
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
                    {...args}
                    openedItem={stateOpenedItems}
                    onSetOpenedItem={onSetOpenedItem}
                >
                    {controlledChildren}
                </Accordion>
            </>
        );
    }
});

export const Reversed = Default.extend({
    args: {
        isReversed: true,
        defaultOpenedItem: accordionIds[1]
    }
});
