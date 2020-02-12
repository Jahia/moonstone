import React from 'react';
import {shallow} from 'component-test-utils-react';
import {Menu} from './index';

describe('Menu', () => {
    it('should not display the menu if isDisplayed is false', () => {
        const wrapper = shallow(
            <Menu isDisplayed={false}>Here my content</Menu>
        );

        expect(wrapper.html()).toEqual('');
    });
});
