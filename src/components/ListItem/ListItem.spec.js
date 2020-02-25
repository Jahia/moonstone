import React from 'react';
import {shallow} from 'component-test-utils-react';
import {ListItem} from './index';

describe('ListItem', () => {
    it('should display label', () => {
        const wrapper = shallow(
            <ListItem label="Say my name"/>
        );
        expect(wrapper.html()).toContain('Say my name');
    });

    it('should add extra attribute', () => {
        const wrapper = shallow(
            <ListItem label="my label" data-custom="test"/>
        );
        expect(wrapper.html()).toContain('data-custom="test"');
    });

    it('should display iconStart', () => {
        const Icon = () => <svg/>;
        const wrapper = shallow(
            <ListItem label="Say my name" iconStart={<Icon/>}/>
        );
        expect(wrapper.html()).toContain('Icon');
    });

    it('should display iconEnd', () => {
        const Icon = () => <svg/>;
        const wrapper = shallow(
            <ListItem label="my label" iconEnd={<Icon/>}/>
        );
        expect(wrapper.html()).toContain('Icon');
    });

    it('should not be focusable if is disabled', () => {
        const wrapper = shallow(
            <ListItem isDisabled label="my label"/>
        );
        expect(wrapper.html()).not.toContain('tabIndex=null');
    });

    it('should add additional classname', () => {
        const wrapper = shallow(
            <ListItem className="hello" label="my label"/>
        );
        expect(wrapper.html()).toContain('hello');
    });

    it('should call onClick when click on an item', () => {
        const handleClick = jest.fn();
        const wrapper = shallow(
            <ListItem label="my label" onClick={handleClick}/>
        );

        wrapper.querySelector('li').dispatchEvent('click');

        expect(handleClick).toHaveBeenCalled();
    });
});
