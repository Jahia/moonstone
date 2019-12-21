import React from 'react';
import {shallow} from 'component-test-utils-react';
import {PrimaryNavItemsGroup} from './index';
import {PrimaryNavContext} from '../index';

describe('PrimaryNavItemsGroup', () => {
    it('should render nothing when it\'s not expended', () => {
        const wrapper = shallow(
            <PrimaryNavItemsGroup isDisplayedWhenCollapsed={false}>
                <>test</>
                <>2</>
            </PrimaryNavItemsGroup>, {
                externals: {
                    contexts: [{
                        id: PrimaryNavContext,
                        value: {
                            isExpanded: false
                        }
                    }]
                }
            });

        expect(wrapper.html()).toBe('');
    });

    it('should render something when it\'s expended but not isDisplayedWhenCollapsed', () => {
        const wrapper = shallow(
            <PrimaryNavItemsGroup>
                <>test</>
                <>2</>
            </PrimaryNavItemsGroup>, {
                externals: {
                    contexts: [{
                        id: PrimaryNavContext,
                        value: {
                            isExpanded: true
                        }
                    }]
                }
            });

        expect(wrapper.html()).not.toBe('');
    });

    it('should render something when it\'s expended and isDisplayedWhenCollapsed', () => {
        const wrapper = shallow(
            <PrimaryNavItemsGroup isDisplayedWhenCollapsed>
                <>test</>
                <>2</>
            </PrimaryNavItemsGroup>, {
                externals: {
                    contexts: [{
                        id: PrimaryNavContext,
                        value: {
                            isExpanded: true
                        }
                    }]
                }
            });

        expect(wrapper.html()).not.toBe('');
    });

    it('should render children when it\'s expended and isDisplayedWhenCollapsed', () => {
        const wrapper = shallow(
            <PrimaryNavItemsGroup>
                <>test</>
                <>2</>
            </PrimaryNavItemsGroup>, {
                externals: {
                    contexts: [{
                        id: PrimaryNavContext,
                        value: {
                            isExpanded: true
                        }
                    }]
                }
            });

        expect(wrapper.html()).toContain('test');
    });
});
