import React from 'react';
import {shallow} from 'component-test-utils-react';
import {PrimaryNavItemsGroup} from './index';

describe('PrimaryNavItemsGroup', () => {
    it('should work', () => {
        const wrapper = shallow(<PrimaryNavItemsGroup onClick={() => {}}/>);
        expect(wrapper.html());
    });
});
