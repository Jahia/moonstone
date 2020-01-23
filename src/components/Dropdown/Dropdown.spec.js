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
            <Dropdown data={data}/>
        );
        expect(wrapper.html());
    });
});
