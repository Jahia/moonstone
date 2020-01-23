import React from 'react';
import {shallow} from 'component-test-utils-react';
import {Menu} from './index';

describe('Menu', () => {
    it('should display children content', () => {
        const wrapper = shallow(
            <Menu isDisplay>Here my content</Menu>
        );
        expect(wrapper.html()).toContain('Here my content');
    });
});
