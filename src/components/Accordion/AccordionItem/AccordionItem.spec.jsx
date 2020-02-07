import React from 'react';
import {shallow} from 'component-test-utils-react';
import {AccordionContext} from '~/components/Accordion';
import {AccordionItem} from './index';

describe('AccordionItem', () => {
    it('should display label', () => {
        const wrapper = shallow(
            <AccordionItem
                id="007"
                label="my label label"
            >
                content here
            </AccordionItem>
        );

        expect(wrapper.html()).toContain('my label label');
    });

    it('should display icon', () => {
        const Icon = () => <svg/>;
        const wrapper = shallow(
            <AccordionItem
                id="007"
                label="my label label"
                icon={<Icon/>}
            >
                content here
            </AccordionItem>
        );

        expect(wrapper.html()).toContain('Icon');
    });

    it('should accept reversed accordion', () => {
        const Icon = () => <svg/>;
        const wrapper = shallow(
            <AccordionItem
                id="007"
                label="my label label"
                icon={<Icon/>}
            >
                content here
            </AccordionItem>, {
                externals: {
                    contexts: [{
                        id: AccordionContext,
                        value: {
                            setOpenedItemId: jest.fn(),
                            currentItemId: 'not correspond',
                            isReversed: true
                        }
                    }]
                }
            }
        );

        expect(wrapper.html()).toContain('accordionItem_reversed');
    });

    it('should not display children when id in context not correspond', () => {
        const clickToOpenHandler = jest.fn();
        const wrapper = shallow(
            <AccordionItem
                id="007"
                label="my label label"
                onClickToOpen={clickToOpenHandler}
            >
                content here
            </AccordionItem>
            , {
                externals: {
                    contexts: [{
                        id: AccordionContext,
                        value: {
                            setOpenedItemId: jest.fn(),
                            currentItem: 'not correspond'
                        }
                    }]
                }
            }
        );
        expect(wrapper.html()).not.toContain('content here');
    });

    it('should display children when id in context correspond', () => {
        const clickToOpenHandler = jest.fn();
        const wrapper = shallow(
            <AccordionItem
                id="007"
                label="my label label"
                onClickToOpen={clickToOpenHandler}
            >
                content here
            </AccordionItem>
            , {
                externals: {
                    contexts: [{
                        id: AccordionContext,
                        value: {
                            setOpenedItemId: jest.fn(),
                            currentItemId: '007'
                        }
                    }]
                }
            }
        );
        expect(wrapper.html()).toContain('content here');
    });

    it('should call onClickToOpen when click on closed item', () => {
        const clickToOpenHandler = jest.fn();
        const wrapper = shallow(
            <AccordionItem
                id="007"
                label="my label label"
                onClickToOpen={clickToOpenHandler}
            >
                content here
            </AccordionItem>
            , {
                externals: {
                    contexts: [{
                        id: AccordionContext,
                        value: {
                            setOpenedItemId: jest.fn(),
                            currentItemId: 'not correspond'
                        }
                    }]
                }
            }
        );

        wrapper.querySelector('header').dispatchEvent('click');

        expect(clickToOpenHandler).toHaveBeenCalled();
    });

    it('should not throw error when there is no onClickToOpen defined', () => {
        const wrapper = shallow(
            <AccordionItem
                id="007"
                label="my label label"
            >
                content here
            </AccordionItem>
            , {
                externals: {
                    contexts: [{
                        id: AccordionContext,
                        value: {
                            setOpenedItemId: jest.fn(),
                            currentItemId: 'not correspond'
                        }
                    }]
                }
            }
        );

        // No error should occur when there is no onClickToOpen defined
        wrapper.querySelector('header').dispatchEvent('click');
    });

    it('should call onClickToClose when click on opened item', () => {
        const clickToCloseHandler = jest.fn();
        const wrapper = shallow(
            <AccordionItem
                id="007"
                label="my label label"
                onClickToClose={clickToCloseHandler}
            >
                content here
            </AccordionItem>
            , {
                externals: {
                    contexts: [{
                        id: AccordionContext,
                        value: {
                            setOpenedItemId: jest.fn(),
                            currentItemId: '007'
                        }
                    }]
                }
            }
        );

        wrapper.querySelector('header').dispatchEvent('click');

        expect(clickToCloseHandler).toHaveBeenCalled();
    });

    it('should not throw error when there is no onClickToClose defined', () => {
        const wrapper = shallow(
            <AccordionItem
                id="007"
                label="my label label"
            >
                content here
            </AccordionItem>
            , {
                externals: {
                    contexts: [{
                        id: AccordionContext,
                        value: {
                            setOpenedItemId: jest.fn(),
                            currentItemId: '007'
                        }
                    }]
                }
            }
        );

        // No error should occur when there is no onClickToClose defined
        wrapper.querySelector('header').dispatchEvent('click');
    });
});
