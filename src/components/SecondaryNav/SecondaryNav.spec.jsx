import React from 'react';
import {shallow} from 'component-test-utils-react';
import {SecondaryNav} from './index';

describe('SecondaryNav', () => {
    it('should display children content', () => {
        const wrapper = shallow(<SecondaryNav>test children</SecondaryNav>);

        expect(wrapper.html()).toContain('test children');
    });
});

