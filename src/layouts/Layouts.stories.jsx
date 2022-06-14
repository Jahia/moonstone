import React, {useState} from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';

import {treeData, treeDataNested} from '~/data';
import {LayoutApp, LayoutModule, LayoutContent} from '~/layouts';
import {Header, PrimaryNav, SecondaryNav, SecondaryNavHeader, Accordion, AccordionItem, TreeView, Paper} from '~/components';
import {FakePrimaryNavigation, FakeSecondaryNavigation, lorem} from '~/__storybook__/FakeComponents';
import {Bug, Love} from '~/icons';

const accordionIds = ['01', '02', '03'];

storiesOf('Layouts/Demos', module)
    .addDecorator(withKnobs)
    .add('Example', () => {
        const [selectedItems1, setSelectedItems1] = useState([]);
        const [selectedItems2, setSelectedItems2] = useState([]);

        const handleSelectItem1 = node => {
            if (selectedItems1.includes(node.id)) {
                setSelectedItems1(selectedItems1.filter(item => item !== node.id));
            } else {
                setSelectedItems1([node.id]);
            }
        };

        const handleSelectItem2 = node => {
            if (selectedItems2.includes(node.id)) {
                setSelectedItems2(selectedItems2.filter(item => item !== node.id));
            } else {
                setSelectedItems2([node.id]);
            }
        };

        return (
            <div style={{transform: 'scale(1)'}}>
                <LayoutApp
                    navigation={
                        <PrimaryNav>
                            level 1
                        </PrimaryNav>
                    }
                    content={
                        <LayoutModule
                            navigation={
                                <SecondaryNav header={<SecondaryNavHeader>Header</SecondaryNavHeader>}>
                                    <Accordion isReversed defaultOpenedItem={accordionIds[1]}>
                                        <AccordionItem
                                            id={accordionIds[0]}
                                            icon={<Love size="big"/>}
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
                                            id={accordionIds[1]}
                                            icon={<Bug size="big"/>}
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
                            }
                            content={
                                <LayoutContent
                                    header={<Header title="Page title"/>}
                                    content={
                                        <>
                                            <Paper>Content</Paper>
                                            <Paper>{lorem}</Paper>
                                        </>
                                    }
                                />
                            }

                        />
                    }
                />
            </div>
        );
    })

    .add('Centered', () => (
        <div style={{transform: 'scale(1)'}}>
            <LayoutApp
                navigation={<FakePrimaryNavigation/>}
                content={
                    <LayoutModule
                        navigation={<FakeSecondaryNavigation/>}
                        content={
                            <LayoutContent
                                isCentered
                                header={<Header title="Header"/>}
                                content={
                                    <>
                                        <Paper>Content</Paper>
                                    </>
                                }
                            />
                        }
                    />
                }
            />
        </div>
    ))

    .add('Without level 2', () => (
        <div style={{transform: 'scale(1)'}}>
            <LayoutApp
                navigation={<FakePrimaryNavigation/>}
                content={
                    <LayoutModule
                        content={
                            <LayoutContent
                                header={<Header title="Title"/>}
                                content={<Paper className="flexFluid">Content</Paper>}
                            />
                        }
                    />
                }
            />
        </div>
    ));
