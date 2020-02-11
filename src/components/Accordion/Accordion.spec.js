import React, {useContext} from 'react';
import {shallow} from 'component-test-utils-react';
import {Accordion} from './index';
import {AccordionItem} from './AccordionItem/';
import {AccordionContext} from './Accordion.context';

describe('Accordion', () => {
    it('should display children content', () => {
        const wrapper = shallow(
            <Accordion>
                <AccordionItem id="id" label="label">
                    content here
                </AccordionItem>
            </Accordion>
        );
        expect(wrapper.querySelector('#id').exists()).toBe(true);
    });

    it('should add reversed class when component is reversed', () => {
        const wrapper = shallow(
            <Accordion isReversed>
                <AccordionItem id="id" label="label">
                    content here
                </AccordionItem>
            </Accordion>
        );

        expect(wrapper.html()).toContain('accordion_reversed');
    });

    it('should add extra attribute on Accordion', () => {
        const wrapper = shallow(
            <Accordion data-custom="test">
                <AccordionItem id="id" label="label">
                    content here
                </AccordionItem>
            </Accordion>
        );
        expect(wrapper.html()).toContain('data-custom="test"');
    });

    it('should add extra attribute on AccordionItem', () => {
        const wrapper = shallow(
            <Accordion>
                <AccordionItem id="id" label="label" data-custom="test">
                    content here
                </AccordionItem>
            </Accordion>
        );
        expect(wrapper.html()).toContain('data-custom="test"');
    });

    describe('withAccordionItem Mock', () => {
        // eslint-disable-next-line react/prop-types
        const AccordionItemMock = ({id}) => {
            const context = useContext(AccordionContext);
            let open;

            if (context.isMultipleOpenable) {
                open = context.currentItemId ? context.currentItemId.includes(id) : false;
            } else {
                open = context.currentItemId === id;
            }

            return (
                <button type="button" id={id} onClick={() => context.setOpenedItemId(id)}>{id} - {open ? 'open' : 'close'}</button>
            );
        };

        beforeAll(() => {
            // As we are mocking, we won't be good enough for propTypes, so ignore them
            console.oldError = console.error;
            console.error = jest.fn();
        });

        afterAll(() => {
            console.error = console.oldError;
            delete console.oldError;
        });

        it('should select another item when calling setOpenedItemId', () => {
            const wrapper = shallow(
                <Accordion>
                    <AccordionItemMock id="1"/>
                    <AccordionItemMock id="2"/>
                </Accordion>
                , {
                    mocks: {
                        AccordionItemMock
                    }
                });

            wrapper.querySelector('button').dispatchEvent('click');

            expect(wrapper.html()).toContain('1 - open');
            expect(wrapper.html()).toContain('2 - close');
        });

        it('should open just one item', () => {
            const wrapper = shallow(
                <Accordion>
                    <AccordionItemMock id="1"/>
                    <AccordionItemMock id="2"/>
                </Accordion>
                , {
                    mocks: {
                        AccordionItemMock
                    }
                });

            wrapper.querySelector('#1 button').dispatchEvent('click');
            wrapper.querySelector('#2 button').dispatchEvent('click');

            expect(wrapper.html()).toContain('1 - close');
            expect(wrapper.html()).toContain('2 - open');
        });

        it('should unselect item when calling setOpenedItemId another time', () => {
            const wrapper = shallow(
                <Accordion>
                    <AccordionItemMock id="1"/>
                    <AccordionItemMock id="2"/>
                </Accordion>
                , {
                    mocks: {
                        AccordionItemMock
                    }
                });

            wrapper.querySelector('button').dispatchEvent('click');
            wrapper.querySelector('button').dispatchEvent('click');

            expect(wrapper.html()).toContain('1 - close');
            expect(wrapper.html()).toContain('2 - close');
        });

        it('should open item by default when give the props', () => {
            const wrapper = shallow(
                <Accordion defaultOpenedItemId="2">
                    <AccordionItemMock id="1"/>
                    <AccordionItemMock id="2"/>
                </Accordion>
                , {
                    mocks: {
                        AccordionItemMock: true
                    }
                });

            expect(wrapper.html()).toContain('1 - close');
            expect(wrapper.html()).toContain('2 - open');
        });

        it('should close item when calling setOpenedItemId another time when multiple openable is set to true', () => {
            const wrapper = shallow(
                <Accordion
                    isMultipleOpenable
                >
                    <AccordionItemMock id="1"/>
                    <AccordionItemMock id="2"/>
                </Accordion>
                , {
                    mocks: {
                        AccordionItemMock
                    }
                });

            wrapper.querySelector('#1 button').dispatchEvent('click');
            wrapper.querySelector('#1 button').dispatchEvent('click');

            expect(wrapper.html()).toContain('1 - close');
            expect(wrapper.html()).toContain('2 - close');
        });

        it('should open multiple items when isMultipleOpenable is true', () => {
            const wrapper = shallow(
                <Accordion
                    isMultipleOpenable
                >
                    <AccordionItemMock id="1"/>
                    <AccordionItemMock id="2"/>
                </Accordion>
                , {
                    mocks: {
                        AccordionItemMock
                    }
                });

            wrapper.querySelector('#1 button').dispatchEvent('click');
            wrapper.querySelector('#2 button').dispatchEvent('click');

            expect(wrapper.html()).toContain('1 - open');
            expect(wrapper.html()).toContain('2 - open');
        });

        it('should open default item even if multiple items is allowed', () => {
            const wrapper = shallow(
                <Accordion
                    isMultipleOpenable
                    defaultOpenedItemId={['2']}
                >
                    <AccordionItemMock id="1"/>
                    <AccordionItemMock id="2"/>
                </Accordion>
                , {
                    mocks: {
                        AccordionItemMock: true
                    }
                });

            expect(wrapper.html()).toContain('1 - close');
            expect(wrapper.html()).toContain('2 - open');
        });

        it('should control accordionItem opening', () => {
            const wrapper = shallow(
                <Accordion
                    openedItemId="2"
                >
                    <AccordionItemMock id="1"/>
                    <AccordionItemMock id="2"/>
                </Accordion>
                , {
                    mocks: {
                        AccordionItemMock
                    }
                });

            wrapper.setProps({
                openedItemId: '1'
            });

            expect(wrapper.html()).toContain('1 - close');
            expect(wrapper.html()).toContain('2 - open');
        });

        it('should control accordionItem opening if multiple items is allowed', () => {
            const wrapper = shallow(
                <Accordion
                    isMultipleOpenable
                    defaultOpenedItemId={['2']}
                >
                    <AccordionItemMock id="1"/>
                    <AccordionItemMock id="2"/>
                </Accordion>
                , {
                    mocks: {
                        AccordionItemMock: true
                    }
                });

            expect(wrapper.html()).toContain('1 - close');
            expect(wrapper.html()).toContain('2 - open');
        });
    });
});
