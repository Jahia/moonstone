import React from 'react';
import {shallow} from 'component-test-utils-react';
import {GlobalStyle} from './index';

describe('GlobalStyle', () => {
    it('should not render anything', () => {
        const wrapper = shallow(<GlobalStyle/>);
        expect(wrapper.html()).toEqual('</>');
    });
});
