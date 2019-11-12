import React from 'react';
import {shallow} from 'component-test-utils-react';
import TestRenderer from 'react-test-renderer';
import {PrimaryNavItem} from './index';

describe('NavItem', () => {
    it('should display a text children', () => {
        const wrapper = shallow(<PrimaryNavItem label="Content children" onClick={() => {}}/>);

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
            <PrimaryNavItem className="yoloooo" label="Content children" onClick={() => {}}/>
        );

        expect(wrapper.props.className).toContain('yoloooo');
    });

    it('should display the icon', () => {
        const Icon = () => <svg/>;
        const testRenderer = TestRenderer.create(<PrimaryNavItem icon={<Icon/>} label="Content children" onClick={() => {}}/>);
        expect(testRenderer.root.findByType(Icon));
    });

    it('should set selected the item when give selected property', () => {
        const Icon = () => <svg/>;
        const wrapper = shallow(
            <PrimaryNavItem isSelected icon={<Icon/>} label="Content children" onClick={() => {}}/>
        );

        expect(wrapper.html()).toContain('primaryNavItem selected');
    });

    it('should not set selected the item when not giving selected property', () => {
        const Icon = () => <svg/>;
        const wrapper = shallow(
            <PrimaryNavItem icon={<Icon/>} label="Content children" onClick={() => {}}/>
        );

        expect(wrapper.html()).not.toContain('primaryNavItem selected');
    });
});
