import React from 'react';
import {shallow} from 'component-test-utils-react';
import {PrimaryNavItemsGroup} from './index';

const children = ['test'];

describe('PrimaryNavItemsGroup', () => {
    it('should work', () => {
        const wrapper = shallow(
            <PrimaryNavItemsGroup onClick={() => {}}>
                {children}
            </PrimaryNavItemsGroup>
        );
        expect(wrapper.html());
    });
});
