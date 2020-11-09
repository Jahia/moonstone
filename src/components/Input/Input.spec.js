import React from 'react';
import {shallow} from 'component-test-utils-react';
import {Input} from './index';
import {Love} from '~/icons';

describe('Input', () => {
    it('should render', () => {
        const container = shallow(<Input onChange={() => 'test!'}/>);
        expect(container.html()).toEqual(
            '<div class="moonstone-input">' +
            '<input class="moonstone-input-element" type="text" value="" id="undefined" placeholder="undefined" disabled="false" readOnly="false" onChange="[onChange]" onBlur="undefined" onFocus="undefined"/>' +
            '</div>'
        );
    });

    it('should have specified id', () => {
        const id = 'test-id';
        const input = shallow(<Input id={id}/>);
        expect(input.html()).toContain(id);
    });

    it('should have specified value', () => {
        const value = 'test value';
        const input = shallow(<Input value={value}/>);
        expect(input.html()).toContain(value);
    });

    it('should have specified placeholder', () => {
        const placeholder = 'test placeholder';
        const input = shallow(<Input placeholder={placeholder}/>);
        expect(input.html()).toContain(placeholder);
    });

    it('should display size class for big input', () => {
        const input = shallow(<Input size="big"/>);
        expect(input.querySelector('.moonstone-size_big').exists()).toBeTruthy();
    });

    it('should have an extra css class', () => {
        const className = 'test-class';
        const input = shallow(<Input className={className}/>);
        expect(input.querySelector(`.${className}`).exists()).toBeTruthy();
    });

    it('should be disabled', () => {
        const input = shallow(<Input isDisabled/>);
        expect(input.html().indexOf('disabled') !== -1).toBeTruthy();
    });

    it('should be read only', () => {
        const input = shallow(<Input isReadOnly/>);
        expect(input.html().indexOf('readOnly') !== -1).toBeTruthy();
    });

    it('should display the specified icon', () => {
        const icon = <Love/>;
        const input = shallow(<Input icon={icon}/>);
        expect(input.querySelector('SvgLove').exists()).toBeTruthy();
    });

    it('should display the cancel icon when the input is filled', () => {
        const input = shallow(<Input value="testing" onClear={() => ''}/>);
        expect(input.querySelector('SvgCancel').exists()).toBeTruthy();
    });

    it('should not display the cancel icon when the input is empty', () => {
        const input = shallow(<Input onClear={() => ''}/>);
        expect(input.querySelector('SvgCancel').exists()).toBeFalsy();
    });

    it('should display the search variant', () => {
        const input = shallow(<Input variant="search"/>);
        expect(input.querySelector('SvgSearch').exists()).toBeTruthy();
    });
});
