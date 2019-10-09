import React from 'react';
import {shallow} from 'component-test-utils-react';
import {PrimaryNav} from './index';

describe('PrimaryNav', () => {
    it('should work', () => {
        const wrapper = shallow(<PrimaryNav/>);
        expect(wrapper.html());
    });
});
