import React from 'react';
import {shallow} from 'component-test-utils-react';
import {SecondaryNav} from './index';

describe('SecondaryNav', () => {
    it('should display children content', () => {
        const wrapper = shallow(
            <SecondaryNav header="">
                content here
            </SecondaryNav>
        );

        expect(wrapper.html()).toContain('content here');
    });
    it('should display a string in the header', () => {
        const wrapper = shallow(<SecondaryNav header="my header">hello</SecondaryNav>);

        expect(wrapper.html()).toContain('my header');
    });

    it('should add extra attribute', () => {
        const wrapper = shallow(<SecondaryNav data-custom="test" header="my header">hello</SecondaryNav>);

        expect(wrapper.html()).toContain('data-custom="test"');
    });
});
