import React from 'react';
import {Breadcrumb, BreadcrumbItem} from '~/components';
import {shallow} from 'component-test-utils-react';

describe('Breadcrumb', () => {
    it('should display additional className', () => {
        const wrapper = shallow(
            <Breadcrumb className="extra">
                <BreadcrumbItem label="item 1" onClick={() => {}}/>
            </Breadcrumb>
        );
        expect(wrapper.querySelector('.extra').exists()).toBeTruthy();
    });

    it('should display additional attributes', () => {
        const wrapper = shallow(
            <Breadcrumb data-custom="test">
                <BreadcrumbItem label="item 1" onClick={() => {}}/>
            </Breadcrumb>
        );
        expect(wrapper.querySelector('[data-custom="test"]').exists()).toBeTruthy();
    });

    it('should display nothing when the component has no children', () => {
        const wrapper = shallow(<Breadcrumb/>);
        expect(wrapper.html()).toEqual('');
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
