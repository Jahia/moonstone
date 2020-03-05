import React from 'react';
import {Breadcrumb, BreadcrumbItem} from '~/components';
import {shallow} from 'component-test-utils-react';

describe('Breadcrumb', () => {
    it('should display additional className', () => {
        const wrapper = shallow(<Breadcrumb className="extra"/>);
        expect(wrapper.querySelector('.extra').exists()).toBeTruthy();
    });

    it('should display additional attributes', () => {
        const wrapper = shallow(<Breadcrumb data-custom="test"/>);
        expect(wrapper.querySelector('[data-custom="test"]').exists()).toBeTruthy();
    });

    it('should display items', () => {
        const wrapper = shallow(
            <Breadcrumb>
                <BreadcrumbItem label="item 1" onClick={() => {}}/>
                <BreadcrumbItem label="item 2" onClick={() => {}}/>
            </Breadcrumb>
        );
        expect(wrapper.html()).toContain('item 1');
    });
});
