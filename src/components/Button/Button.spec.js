import React from 'react';
import {shallow} from 'component-test-utils-react';
import {Button} from './index';

describe('Button', () => {
    it('should work', () => {
        const wrapper = shallow(<Button onClick={() => {}}/>);
        expect(wrapper.html());
    });
});
