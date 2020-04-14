import React, {useContext} from 'react';
import {shallow} from 'component-test-utils-react';
import {Accordion} from './index';
import {ControlledAccordion} from './ControlledAccordion';
import {UncontrolledAccordion} from './UncontrolledAccordion';
import {AccordionItem} from './AccordionItem/';
import {AccordionContext} from './Accordion.context';

describe('Accordion', () => {
    it('should display children content', () => {
        const wrapper = shallow(
            <ControlledAccordion>
                <AccordionItem id="id" label="label">
                    content here
                </AccordionItem>
            </ControlledAccordion>
        );
        expect(wrapper.querySelector('#id').exists()).toBe(true);
    });

    it('should add reversed class when component is reversed', () => {
        const wrapper = shallow(
            <ControlledAccordion isReversed>
                <AccordionItem id="id" label="label">
                    content here
                </AccordionItem>
            </ControlledAccordion>
        );

        expect(wrapper.html()).toContain('reversed');
    });

    it('should add extra attribute on Accordion', () => {
        const wrapper = shallow(
            <ControlledAccordion data-custom="test">
                <AccordionItem id="id" label="label">
                    content here
                </AccordionItem>
            </ControlledAccordion>
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
            const open = context.currentItem === id;

            return (
                <button type="button" id={id} onClick={() => context.onSetOpenedItem(id)}>{id} - {open ? 'open' : 'close'}</button>
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

        it('should select another item when calling onSetOpenedItem', () => {
            const wrapper = shallow(
                <UncontrolledAccordion>
                    <AccordionItemMock id="1"/>
                    <AccordionItemMock id="2"/>
                </UncontrolledAccordion>
                , {
                    mocks: {
                        AccordionItemMock: true,
                        ControlledAccordion: true
                    }
                });

            wrapper.querySelector('button').dispatchEvent('click');

            expect(wrapper.html()).toContain('1 - open');
            expect(wrapper.html()).toContain('2 - close');
        });

        it('should open just one item', () => {
            const wrapper = shallow(
                <UncontrolledAccordion>
                    <AccordionItemMock id="1"/>
                    <AccordionItemMock id="2"/>
                </UncontrolledAccordion>
                , {
                    mocks: {
                        AccordionItemMock: true,
                        ControlledAccordion: true
                    }
                });

            wrapper.querySelector('#1 button').dispatchEvent('click');
            wrapper.querySelector('#2 button').dispatchEvent('click');

            expect(wrapper.html()).toContain('1 - close');
            expect(wrapper.html()).toContain('2 - open');
        });

        it('should unselect item when calling onSetOpenedItem another time', () => {
            const wrapper = shallow(
                <UncontrolledAccordion>
                    <AccordionItemMock id="1"/>
                    <AccordionItemMock id="2"/>
                </UncontrolledAccordion>
                , {
                    mocks: {
                        AccordionItemMock: true,
                        ControlledAccordion: true
                    }
                });

            wrapper.querySelector('button').dispatchEvent('click');
            wrapper.querySelector('button').dispatchEvent('click');

            expect(wrapper.html()).toContain('1 - close');
            expect(wrapper.html()).toContain('2 - close');
        });

        it('should open item by default when give the props', () => {
            const wrapper = shallow(
                <UncontrolledAccordion defaultOpenedItem="2">
                    <AccordionItemMock id="1"/>
                    <AccordionItemMock id="2"/>
                </UncontrolledAccordion>
                , {
                    mocks: {
                        AccordionItemMock: true,
                        ControlledAccordion: true
                    }
                });

            expect(wrapper.html()).toContain('1 - close');
            expect(wrapper.html()).toContain('2 - open');
        });
    });
});
