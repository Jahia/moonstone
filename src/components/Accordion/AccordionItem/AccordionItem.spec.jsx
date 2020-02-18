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

    it('should display additional className', () => {
        const wrapper = shallow(
            <AccordionItem
                id="007"
                label="my label label"
                className="extra"
            >
                content here
            </AccordionItem>
        );

        expect(wrapper.html()).toContain('extra');
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
                            currentItem: 'not correspond',
                            isReversed: true
                        }
                    }]
                }
            }
        );

        expect(wrapper.html()).toContain('accordionItem_reversed');
    });

    it('should not display children when id in context not correspond', () => {
        const handleOnclick = jest.fn();
        const wrapper = shallow(
            <AccordionItem
                id="007"
                label="my label label"
                onClick={handleOnclick}
            >
                content here
            </AccordionItem>
            , {
                externals: {
                    contexts: [{
                        id: AccordionContext,
                        value: {
                            onSetOpenedItemId: jest.fn(),
                            currentItem: 'not correspond'
                        }
                    }]
                }
            }
        );
        expect(wrapper.html()).not.toContain('content here');
    });

    it('should display children when id in context correspond', () => {
        const handleOnClick = jest.fn();
        const wrapper = shallow(
            <AccordionItem
                id="007"
                label="my label label"
                onClick={handleOnClick}
            >
                content here
            </AccordionItem>
            , {
                externals: {
                    contexts: [{
                        id: AccordionContext,
                        value: {
                            setOpenedItemId: jest.fn(),
                            currentItem: '007'
                        }
                    }]
                }
            }
        );
        expect(wrapper.html()).toContain('content here');
    });
    it('should call onClick when click on item', () => {
        const handleOnClick = jest.fn();

        const wrapper = shallow(
            <AccordionItem
                id="007"
                label="my label label"
                onClick={handleOnClick}
            >
                content here
            </AccordionItem>
            , {
                externals: {
                    contexts: [{
                        id: AccordionContext,
                        value: {
                            onSetOpenedItem: jest.fn(),
                            currentItem: 'not correspond'
                        }
                    }]
                }
            }
        );

        wrapper.querySelector('header').dispatchEvent('click');

        expect(handleOnClick).toHaveBeenCalled();
    });

    it('should onClick callback return true if item has been opened', () => {
        let isOpen;
        const handleOnClick = (e, open) => {
            isOpen = open;
        };

        const wrapper = shallow(
            <AccordionItem
                id="007"
                label="my label label"
                onClick={handleOnClick}
            >
                content here
            </AccordionItem>
            , {
                externals: {
                    contexts: [{
                        id: AccordionContext,
                        value: {
                            onSetOpenedItem: jest.fn(),
                            currentItem: 'not correspond'
                        }
                    }]
                }
            }
        );

        wrapper.querySelector('header').dispatchEvent('click');

        expect(isOpen).toBe(true);
    });

    it('should onClick callback return false if item has been closed', () => {
        let isOpen;
        const handleOnClick = (e, open) => {
            isOpen = open;
        };

        const wrapper = shallow(
            <AccordionItem
                id="007"
                label="my label label"
                onClick={handleOnClick}
            >
                content here
            </AccordionItem>
            , {
                externals: {
                    contexts: [{
                        id: AccordionContext,
                        value: {
                            onSetOpenedItem: jest.fn(),
                            currentItem: '007'
                        }
                    }]
                }
            }
        );

        wrapper.querySelector('header').dispatchEvent('click');

        expect(isOpen).toBe(false);
    });

    it('should not throw error when there is no onClick defined', () => {
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
                            onSetOpenedItem: jest.fn(),
                            currentItem: '007'
                        }
                    }]
                }
            }
        );

        // No error should occur when there is no onClickToClose defined
        wrapper.querySelector('header').dispatchEvent('click');
    });
});
