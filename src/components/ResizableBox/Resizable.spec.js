import React from 'react';
import {shallow} from 'component-test-utils-react';
import {ResizableBox} from './index';

describe('ResizableBox', () => {
    it('should display content', () => {
        const wrapper = shallow(
            <ResizableBox>My content here</ResizableBox>
        );

        expect(wrapper.html()).toContain('My content here');
    });

    it('should add extra className', () => {
        const wrapper = shallow(
            <ResizableBox className="fancy">My content here</ResizableBox>
        );

        expect(wrapper.html()).toContain('fancy');
    });

    it('should add extra attribute', () => {
        const wrapper = shallow(
            <ResizableBox data-custom="test">My content here</ResizableBox>
        );

        expect(wrapper.html()).toContain('data-custom="test"');
    });
});
