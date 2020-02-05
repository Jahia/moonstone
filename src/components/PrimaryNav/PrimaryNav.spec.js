import React from 'react';
import {shallow} from 'component-test-utils-react';
import {PrimaryNav} from './index';

describe('PrimaryNav', () => {
    const props = {
        modeIcon: <img/>
    };

    it('should not be expended initialy', () => {
        const wrapper = shallow(<PrimaryNav {...props}/>, {mocks: {NavHeader: true, NavButton: true}});
        expect(wrapper.html()).not.toContain('expanded');
    });

    it('should expended when click on NavButton', () => {
        const wrapper = shallow(<PrimaryNav {...props}/>, {mocks: {NavHeader: true, NavButton: true}});
        wrapper.querySelector('NavButton button').dispatchEvent('click');
        expect(wrapper.html()).toContain('expanded');
    });

    it('should also work when doesn\'t display modeIcon', () => {
        shallow(<PrimaryNav/>, {mocks: {NavHeader: true, NavButton: true}});
    });

    it('should add extra attribute', () => {
        const wrapper = shallow(<PrimaryNav data-custom="test" {...props}/>, {mocks: {NavHeader: true, NavButton: true}});
        expect(wrapper.html()).toContain('data-custom="test"');
    });
});
