import React from 'react';
import {Chip} from './index';
import {shallow} from 'component-test-utils-react';

describe('Chip', () => {
    it('should display a label', () => {
        const wrapper = shallow(<Chip label="MyChip"/>);
        expect(wrapper.html()).toContain('MyChip');
    });

    it('should display an icon', () => {
        const Icon = () => <svg/>;
        const wrapper = shallow(<Chip icon={<Icon/>}/>);
        expect(wrapper.html()).toContain('Icon');
    });

    it('should display both an icon and a label', () => {
        const Icon = () => <svg/>;
        const wrapper = shallow(<Chip icon={<Icon/>} label="MyChip"/>);
        expect(wrapper.html()).toContain('Icon');
        expect(wrapper.html()).toContain('MyChip');
    });

    it('should have an icon whose size is always small', () => {
        const Icon = () => <svg/>;
        const wrapper = shallow(<Chip icon={<Icon size="big"/>}/>);
        expect(wrapper.html()).toContain('<Icon size="small"/>');
    });

    it('should render custom attributes', () => {
        const wrapper = shallow(<Chip label="test" role="myRole"/>);
        expect(wrapper.querySelector('[role="myRole"]').exists()).toBeTruthy();
    });

    it('should add extra className', () => {
        const wrapper = shallow(<Chip label="test" className="stuff"/>);
        expect(wrapper.props.className).toContain('stuff');
    });
});
