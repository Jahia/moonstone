import React from 'react';
import {Badge} from './index';
import {shallow} from 'component-test-utils-react';

describe('Badge', () => {
    it('should display additional className', () => {
        const wrapper = shallow(<Badge label="3" type="round" className="extra"/>);
        expect(wrapper.html()).toContain('extra');
    });

    it('should display additional attributes', () => {
        const wrapper = shallow(<Badge label="3" type="round" data-custom="test"/>);
        expect(wrapper.html()).toContain('data-custom="test"');
    });

    it('should display a label', () => {
        const wrapper = shallow(<Badge label="3"/>);
        expect(wrapper.html()).toContain('3');
    });

    it('should display a diamond Badge', () => {
        const wrapper = shallow(<Badge label="3" type="diamond"/>);
        expect(wrapper.html()).toContain('diamond');
    });

    it('should display a rounded Badge', () => {
        const wrapper = shallow(<Badge label="3" type="round"/>);
        expect(wrapper.html()).toContain('round');
    });

    it('should have accent color', () => {
        const wrapper = shallow(<Badge label="3" type="round" color="accent"/>);
        expect(wrapper.html()).toContain('color_accent');
    });

    it('should have danger color', () => {
        const wrapper = shallow(<Badge label="3" type="round" color="danger"/>);
        expect(wrapper.html()).toContain('color_danger');
    });

    it('should have success color', () => {
        const wrapper = shallow(<Badge label="3" type="round" color="success"/>);
        expect(wrapper.html()).toContain('color_success');
    });

    it('should display nothing when no label is provided', () => {
        const wrapper = shallow(<Badge/>);
        expect(wrapper.html()).toEqual('');
    });

    it('should display nothing when label is an empty string', () => {
        const wrapper = shallow(<Badge label=""/>);
        expect(wrapper.html()).toEqual('');
    });
});
