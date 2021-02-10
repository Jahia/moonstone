import React from 'react';
import {Badge} from './index';
import {shallow} from 'component-test-utils-react';

describe('Badge', () => {
    it('should display additional className', () => {
        const wrapper = shallow(<Badge label="3" className="extra"/>);
        expect(wrapper.html()).toContain('extra');
    });

    it('should display additional attributes', () => {
        const wrapper = shallow(<Badge label="3" data-custom="test"/>);
        expect(wrapper.html()).toContain('data-custom="test"');
    });

    it('should display a label', () => {
        const wrapper = shallow(<Badge label="3"/>);
        expect(wrapper.html()).toContain('3');
    });

    it('should have accent color', () => {
        const wrapper = shallow(<Badge label="3" color="accent"/>);
        expect(wrapper.html()).toContain('color_accent');
    });

    it('should have danger color', () => {
        const wrapper = shallow(<Badge label="3" color="danger"/>);
        expect(wrapper.html()).toContain('color_danger');
    });

    it('should have success color', () => {
        const wrapper = shallow(<Badge label="3" color="success"/>);
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
