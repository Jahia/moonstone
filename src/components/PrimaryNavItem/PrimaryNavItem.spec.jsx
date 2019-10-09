import React from 'react';
import {shallow} from 'component-test-utils-react';
import {PrimaryNavItem} from './index';

describe('NavItem', () => {
    it('should display a text children', () => {
        const wrapper = shallow(<PrimaryNavItem>Content children</PrimaryNavItem>);
        expect(wrapper.html()).toContain('Content children');
    });

    it('should add extra props ', () => {
        const wrapper = shallow(
            <PrimaryNavItem onClick={() => {}}>Content children</PrimaryNavItem>
        );
        expect(wrapper.html()).toContain('onClick');
    });

    it('should add extra className ', () => {
        const wrapper = shallow(
            <PrimaryNavItem className="yoloooo">Content children</PrimaryNavItem>
        );
        expect(wrapper.props.className).toContain('yoloooo');
    });

    it('should display the icon', () => {
        const Icon = () => <svg/>;
        const wrapper = shallow(
            <PrimaryNavItem icon={<Icon/>}>Content children</PrimaryNavItem>
        );

        expect(wrapper.html()).toContain('Icon');
    });

    it('should set selected the item when give selected property', () => {
        const Icon = () => <svg/>;
        const wrapper = shallow(
            <PrimaryNavItem selected icon={<Icon/>}>
                Content children
            </PrimaryNavItem>
        );

        expect(wrapper.html()).toContain('navItem selected');
    });

    it('should not set selected the item when not giving selected property', () => {
        const Icon = () => <svg/>;
        const wrapper = shallow(
            <PrimaryNavItem icon={<Icon/>}>Content children</PrimaryNavItem>
        );

        expect(wrapper.html()).not.toContain('navItem_selected');
    });
});
