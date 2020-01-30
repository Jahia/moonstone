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

    describe('withAccordionItem Mock', () => {
        // eslint-disable-next-line react/prop-types
        const AccordionItemMock = ({id}) => {
            const context = useContext(AccordionContext);
            const open = context.currentItem === id;
            return <button type="button" id={id} onClick={() => context.defineCurrentItem(id)}>{id} - {open ? 'open' : 'close'}</button>;
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

        it('should select another item when calling defineCurrentItem', () => {
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

        it('should unselect item when calling defineCurrentItem another time', () => {
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
                <Accordion openByDefault="2">
                    <AccordionItemMock id="1"/>
                    <AccordionItemMock id="2"/>
                </Accordion>
                , {
                    mocks: {
                        AccordionItemMock
                    }
                });

            expect(wrapper.html()).toContain('1 - close');
            expect(wrapper.html()).toContain('2 - open');
        });
    });
});