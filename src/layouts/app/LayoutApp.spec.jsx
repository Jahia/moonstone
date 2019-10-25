import React from 'react';
import {shallow} from 'component-test-utils-react';
import {LayoutApp} from './index';

describe('LayoutApp', () => {
    it('should display navigation in the right slot', () => {
        const wrapper = shallow(<LayoutApp navigation="test-navigation"/>);

        expect(wrapper.html()).toContain('test-navigation');
    });
});

