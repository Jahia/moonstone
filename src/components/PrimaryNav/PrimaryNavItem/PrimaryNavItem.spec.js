import React from 'react';
import {shallow} from 'component-test-utils-react';
import {PrimaryNavItem} from './index';

describe('NavItem', () => {
    it('should display a text children', () => {
        const wrapper = shallow(<PrimaryNavItem label="Content children" onClick={() => {}}/>,
            {
                blackList: true
            }
        );

        expect(wrapper.html()).toContain('Content children');
    });

    it('should add extra props', () => {
        const wrapper = shallow(
            <PrimaryNavItem data-custom="test" onClick={() => {}}>Content children</PrimaryNavItem>,
            {
                blackList: true
            }
        );

        expect(wrapper.html()).toContain('data-custom="test"');
    });

    it('should add extra className', () => {
        const wrapper = shallow(
            <PrimaryNavItem className="yoloooo" label="Content children" onClick={() => {}}/>,
            {
                blackList: true
            }
        );

        expect(wrapper.props.className).toContain('yoloooo');
    });

    it('should display the icon', () => {
        const Icon = () => 'hello';
        const wrapper = shallow(
            <PrimaryNavItem icon={<Icon/>} className="yoloooo" label="Content children" onClick={() => {}}/>,
            {
                blackList: true
            }
        );
        expect(wrapper.querySelector('Icon').exists()).toBe(true);
    });

    it('should set selected the item when give selected property', () => {
        const Icon = () => <svg/>;
        const wrapper = shallow(
            <PrimaryNavItem isSelected icon={<Icon/>} label="Content children" onClick={() => {}}/>,
            {
                blackList: true
            }
        );

        expect(wrapper.html()).toContain('primaryNavItem selected');
    });

    it('should not set selected the item when not giving selected property', () => {
        const Icon = () => <svg/>;
        const wrapper = shallow(
            <PrimaryNavItem icon={<Icon/>} label="Content children" onClick={() => {}}/>,
            {
                blackList: true
            }
        );

        expect(wrapper.html()).not.toContain('primaryNavItem selected');
    });

    it('should display a link when give a url props', () => {
        const Icon = () => <svg/>;
        const wrapper = shallow(
            <PrimaryNavItem isSelected icon={<Icon/>} label="Content children" url="toto.com" onClick={() => {}}/>,
            {
                blackList: true
            }
        );

        expect(wrapper.querySelector('a').exists()).toBe(true);
    });

    it('should display subtitle when give a subtitle props', () => {
        const Icon = () => <svg/>;
        const wrapper = shallow(
            <PrimaryNavItem isSelected icon={<Icon/>} label="Content children" subtitle="I'm a subtitle" onClick={() => {}}/>,
            {
                blackList: true
            }
        );

        expect(wrapper.html()).toContain('I\'m a subtitle');
    });

    it('should display button', () => {
        const Icon = () => <svg/>;
        const wrapper = shallow(
            <PrimaryNavItem isSelected icon={<Icon/>} button={<div>hello</div>} label="Content children" subtitle="I'm a subtitle" onClick={() => {}}/>,
            {
                blackList: true
            }
        );

        expect(wrapper.html()).toContain('<div>hello</div>');
    });
});
