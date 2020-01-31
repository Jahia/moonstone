import React from 'react';
import {shallow} from 'component-test-utils-react';
import {SecondaryNav} from './index';

describe('SecondaryNav', () => {
    it('should display children content', () => {
        const wrapper = shallow(
            <SecondaryNav header="">
                content here
            </SecondaryNav>
        );

        expect(wrapper.html()).toContain('content here');
    });
    it('should display a string in the header', () => {
        const wrapper = shallow(<SecondaryNav header="my header">hello</SecondaryNav>);

        expect(wrapper.html()).toContain('my header');
    });

    it('should add extra attribute', () => {
        const wrapper = shallow(<SecondaryNav data-custom="test" header="my header">hello</SecondaryNav>);

        expect(wrapper.html()).toContain('data-custom="test"');
    });

    it('should have .secondaryNav_hidden when the menu is hidden', () => {
        const wrapper = shallow(<SecondaryNav header="my header" isDefaultVisible={false}>hello</SecondaryNav>);

        expect(wrapper.html()).toContain('secondaryNav_hidden');
    });

    it('should not have .secondaryNav_hidden when the menu is visible', () => {
        const wrapper = shallow(<SecondaryNav header="my header">hello</SecondaryNav>);

        expect(wrapper.html()).not.toContain('secondaryNav_hidden');
    });

    it('should set width to zero when the menu is hidden', () => {
        const wrapper = shallow(<SecondaryNav isDefaultVisible={false} header="my header">hello</SecondaryNav>);

        expect(wrapper.props.size.width).toEqual(0);
    });

    it('should show the navigation by clicking on expand button when the menu is hidden', () => {
        const wrapper = shallow(<SecondaryNav isDefaultVisible={false} header="my header">hello</SecondaryNav>);

        wrapper.querySelector('.secondaryNav_buttonToggle').dispatchEvent('click');
        expect(wrapper.html()).not.toContain('secondaryNav_hidden');
    });

    it('should hide the navigation by clicking on expand button when the menu is visible', () => {
        const wrapper = shallow(<SecondaryNav header="my header">hello</SecondaryNav>);

        wrapper.querySelector('.secondaryNav_buttonToggle').dispatchEvent('click');
        expect(wrapper.html()).toContain('secondaryNav_hidden');
    });

    it('should not throw error when there is no onToggle defined', () => {
        const wrapper = shallow(
            <SecondaryNav header="my header">hello</SecondaryNav>
        );

        // No error should occur when there is no onClick defined
        wrapper.querySelector('.secondaryNav_buttonToggle').dispatchEvent('click');
    });

    it('should call onToggle when clicking on expand button', () => {
        const clickHandler = jest.fn();
        const wrapper = shallow(
            <SecondaryNav header="my header" onToggle={clickHandler}>hello</SecondaryNav>
        );

        wrapper.querySelector('.secondaryNav_buttonToggle').dispatchEvent('click');
        expect(clickHandler).toHaveBeenCalled();
    });
});
