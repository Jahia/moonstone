import React from 'react';
import {BreadcrumbItem} from '~/components';
import {shallow} from 'component-test-utils-react';

describe('BreadcrumbItem', () => {
    it('should display additional className', () => {
        const wrapper = shallow(<BreadcrumbItem className="extra" onClick={() => {}}/>);
        expect(wrapper.querySelector('.extra').exists()).toBeTruthy();
    });

    it('should display additional attributes', () => {
        const wrapper = shallow(<BreadcrumbItem data-custom="test" onClick={() => {}}/>);
        expect(wrapper.querySelector('[data-custom="test"]').exists()).toBeTruthy();
    });

    it('should enforce the right button\'s variant', () => {
        const wrapper = shallow(<BreadcrumbItem variant="outlined" onClick={() => {}}/>);
        expect(wrapper.html()).toContain('ghost');
    });

    it('should enforce the right button\'s size', () => {
        const wrapper = shallow(<BreadcrumbItem size="big" onClick={() => {}}/>);
        expect(wrapper.html()).toContain('small');
    });
});
