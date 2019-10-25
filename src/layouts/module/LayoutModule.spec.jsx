import React from 'react';
import {shallow} from 'component-test-utils-react';
import {LayoutModule} from './index';

describe('LayoutModule', () => {
    it('should display navigation in the right slot', () => {
        const wrapper = shallow(<LayoutModule navigation="test-navigation"/>);

        expect(wrapper.html()).toContain('test-navigation');
    });
});
