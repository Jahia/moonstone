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

    it('should have the class invisible_firstChild', () => {
        const wrapper = shallow(<Separator variant="vertical" size="medium" invisible="firstChild"/>);
        expect(wrapper.html()).toContain('invisible_firstChild');
    });

    it('should have the class invisible_lastChild', () => {
        const wrapper = shallow(<Separator variant="vertical" size="medium" invisible="lastChild"/>);
        expect(wrapper.html()).toContain('invisible_lastChild');
    });

    it('should have the class invisible_onlyChild', () => {
        const wrapper = shallow(<Separator variant="vertical" size="medium" invisible="onlyChild"/>);
        expect(wrapper.html()).toContain('invisible_onlyChild');
    });
});
