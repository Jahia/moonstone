import React from 'react';
import {Badge} from './index';
import {shallow} from 'component-test-utils-react';

describe('Badge', () => {
    it('should display a label', () => {
        const wrapper = shallow(<Badge label="3" size="small" type="round" color="danger"/>);
        expect(wrapper.html()).toContain('3');
    });
});
