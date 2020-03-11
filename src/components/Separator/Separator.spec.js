import React from 'react';
import {shallow} from 'component-test-utils-react';
import {Separator} from './index';

describe('Separator', () => {
    it('should display separator component', () => {
        const wrapper = shallow(
            <Separator/>
        );
        expect(wrapper.html());
    });

    it('should display horizontal separator by default', () => {
        const wrapper = shallow(
            <Separator size="medium"/>
        );
        expect(wrapper.html()).toContain('separator_horizontal');
    });

    it('should display vertical separator', () => {
        const wrapper = shallow(
            <Separator variant="vertical" size="medium"/>
        );
        expect(wrapper.html()).toContain('separator_vertical');
    });

    it('should set size props', () => {
        const wrapper = shallow(
            <Separator size="medium"/>
        );
        expect(wrapper.props.size).toContain('medium');
    });

    it('should set spacing props', () => {
        const wrapper = shallow(
            <Separator size="medium"/>
        );
        expect(wrapper.props.size).toContain('medium');
    });

    it('should add extra attribute', () => {
        const wrapper = shallow(
            <Separator data-custom="test" size="medium"/>
        );
        expect(wrapper.html()).toContain('data-custom="test"');
    });

    it('should add addition classname', () => {
        const wrapper = shallow(
            <Separator className="test" size="medium"/>
        );
        expect(wrapper.html()).toContain('test');
    });

    it('should have the class invisible_first-child', () => {
        const wrapper = shallow(<Separator variant="vertical" size="medium" invisible="first-child"/>);
        expect(wrapper.html()).toContain('invisible_first-child');
    });

    it('should have the class invisible_last-child', () => {
        const wrapper = shallow(<Separator variant="vertical" size="medium" invisible="last-child"/>);
        expect(wrapper.html()).toContain('invisible_last-child');
    });

    it('should have the class invisible_only-child', () => {
        const wrapper = shallow(<Separator variant="vertical" size="medium" invisible="only-child"/>);
        expect(wrapper.html()).toContain('invisible_only-child');
    });
});
