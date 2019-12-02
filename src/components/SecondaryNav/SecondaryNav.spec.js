import React from 'react';
import {shallow} from 'component-test-utils-react';
// Import TestRenderer from 'react-test-renderer';
import {SecondaryNav} from './index';

describe('SecondaryNav', () => {
    it('should display children content', () => {
        const wrapper = shallow(
            <SecondaryNav>
                content here
            </SecondaryNav>
        );

        expect(wrapper.html()).toContain('content here');
    });
    it('should display a string in the header', () => {
        const wrapper = shallow(<SecondaryNav header="my header"/>);

        expect(wrapper.html()).toContain('my header');
    });
});
