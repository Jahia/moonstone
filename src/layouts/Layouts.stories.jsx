import clsx from 'clsx';
import { useState } from 'react';

import {
    FakePrimaryNavigation,
    FakeSecondaryNavigation,
    lorem,
} from '~/__storybook__/FakeComponents';
import {
    Accordion,
    AccordionItem,
    Header,
    Paper,
    PrimaryNav,
    SecondaryNav,
    SecondaryNavHeader,
    TreeView,
} from '~/components';
import { treeData, treeDataNested } from '~/data';
import { layout } from '~/globals/css-utils.js';
import { Bug, Love } from '~/icons';
import { LayoutApp, LayoutContent, LayoutModule } from '~/layouts';

const accordionIds = ['01', '02', '03'];

export default {
    title: 'Layouts/Demos',
    parameters: {
        a11y: { test: 'todo' }, // axe gate: known violations, WCAG AA epic #1421
    },
};

export const Example = () => {
    const [selectedItems1, setSelectedItems1] = useState([]);
    const [selectedItems2, setSelectedItems2] = useState([]);

    const handleSelectItem1 = (node) => {
        if (selectedItems1.includes(node.id)) {
            setSelectedItems1(selectedItems1.filter(item => item !== node.id));
        } else {
            setSelectedItems1([node.id]);
        }
    };

    const handleSelectItem2 = (node) => {
        if (selectedItems2.includes(node.id)) {
            setSelectedItems2(selectedItems2.filter(item => item !== node.id));
        } else {
            setSelectedItems2([node.id]);
        }
    };

    return (
        <div style={{ transform: 'scale(1)' }}>
            <LayoutApp
                content={(
                    <LayoutModule
                        content={(
                            <LayoutContent
                                content={(
                                    <>
                                        <Paper>Content</Paper>
                                        <Paper>{lorem}</Paper>
                                    </>
                                )}
                                header={<Header title="Page title"/>}
                            />
                        )}
                        navigation={(
                            <SecondaryNav
                                header={<SecondaryNavHeader>Header</SecondaryNavHeader>}
                            >
                                <Accordion isReversed defaultOpenedItem={accordionIds[1]}>
                                    <AccordionItem
                                        icon={<Love size="big"/>}
                                        id={accordionIds[0]}
                                        label="Default tree"
                                    >
                                        <TreeView
                                            isReversed
                                            data={treeData}
                                            selectedItems={selectedItems1}
                                            onClickItem={handleSelectItem1}
                                        />
                                    </AccordionItem>
                                    <AccordionItem
                                        icon={<Bug size="big"/>}
                                        id={accordionIds[1]}
                                        label="Nested"
                                    >
                                        <TreeView
                                            isReversed
                                            data={treeDataNested}
                                            selectedItems={selectedItems2}
                                            onClickItem={handleSelectItem2}
                                        />
                                    </AccordionItem>
                                </Accordion>
                            </SecondaryNav>
                        )}
                    />
                )}
                navigation={<PrimaryNav>level 1</PrimaryNav>}
            />
        </div>
    );
};

export const ExampleLight = () => {
    const [selectedItems1, setSelectedItems1] = useState([]);
    const [selectedItems2, setSelectedItems2] = useState([]);

    const handleSelectItem1 = (node) => {
        if (selectedItems1.includes(node.id)) {
            setSelectedItems1(selectedItems1.filter(item => item !== node.id));
        } else {
            setSelectedItems1([node.id]);
        }
    };

    const handleSelectItem2 = (node) => {
        if (selectedItems2.includes(node.id)) {
            setSelectedItems2(selectedItems2.filter(item => item !== node.id));
        } else {
            setSelectedItems2([node.id]);
        }
    };

    return (
        <div style={{ transform: 'scale(1)' }}>
            <LayoutApp
                content={(
                    <LayoutModule
                        content={(
                            <LayoutContent
                                content={(
                                    <>
                                        <Paper>Content</Paper>
                                        <Paper>{lorem}</Paper>
                                    </>
                                )}
                                header={<Header title="Page title"/>}
                            />
                        )}
                        navigation={(
                            <SecondaryNav
                                isReversed={false}
                                header={<SecondaryNavHeader>Header</SecondaryNavHeader>}
                            >
                                <Accordion defaultOpenedItem={accordionIds[1]}>
                                    <AccordionItem
                                        icon={<Love size="big"/>}
                                        id={accordionIds[0]}
                                        label="Default tree"
                                    >
                                        <TreeView
                                            data={treeData}
                                            selectedItems={selectedItems1}
                                            onClickItem={handleSelectItem1}
                                        />
                                    </AccordionItem>
                                    <AccordionItem
                                        icon={<Bug size="big"/>}
                                        id={accordionIds[1]}
                                        label="Nested"
                                    >
                                        <TreeView
                                            data={treeDataNested}
                                            selectedItems={selectedItems2}
                                            onClickItem={handleSelectItem2}
                                        />
                                    </AccordionItem>
                                </Accordion>
                            </SecondaryNav>
                        )}
                    />
                )}
                navigation={<PrimaryNav>level 1</PrimaryNav>}
            />
        </div>
    );
};

export const Centered = () => (
    <div style={{ transform: 'scale(1)' }}>
        <LayoutApp
            content={(
                <LayoutModule
                    content={(
                        <LayoutContent
                            isCentered
                            content={<Paper>Content</Paper>}
                            header={<Header title="Header"/>}
                        />
                    )}
                    navigation={<FakeSecondaryNavigation/>}
                />
            )}
            navigation={<FakePrimaryNavigation/>}
        />
    </div>
);

export const WithoutLevel2 = () => (
    <div style={{ transform: 'scale(1)' }}>
        <LayoutApp
            content={(
                <LayoutModule
                    content={(
                        <LayoutContent
                            content={<Paper className={clsx('flexFluid', layout.flexFluid)}>Content</Paper>}
                            header={<Header title="Title"/>}
                        />
                    )}
                />
            )}
            navigation={<FakePrimaryNavigation/>}
        />
    </div>
);
