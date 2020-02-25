import React from 'react';
import {shallow} from 'component-test-utils-react';
import {Dropdown} from './index';

const data = [
    {
        label: 'option 1',
        value: '1'
    },
    {
        label: 'option 2',
        value: '2'
    },
    {
        label: 'option 3',
        value: '3',
        isDisabled: true
    }
];

describe('Dropdown', () => {
    it('should display', () => {
        const wrapper = shallow(
            <Dropdown data={data} onChange={() => {}}/>
        );
        expect(wrapper.html());
    });

    it('should add additional classname', () => {
        const wrapper = shallow(
            <Dropdown className="hello" data={data} onChange={() => {}}/>
        );
        expect(wrapper.html()).toContain('hello');
    });

    it('should add additional attributes', () => {
        const wrapper = shallow(
            <Dropdown data-custom="test" data={data} onChange={() => {}}/>
        );
        expect(wrapper.html()).toContain('data-custom="test"');
    });

    it('should add dropdown-disabled classe if the dropdowon is disabled', () => {
        const wrapper = shallow(
            <Dropdown isDisabled data={data} onChange={() => {}}/>
        );
        expect(wrapper.html()).toContain('disabled');
    });
});
