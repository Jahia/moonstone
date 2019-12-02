import React from 'react';
import {shallow} from 'component-test-utils-react';
import {ResizableBox} from './index';

describe('ResizableBox', () => {
    it('should add extra className ', () => {
        const wrapper = shallow(
            <ResizableBox>My content here</ResizableBox>
        );

        expect(wrapper.html()).toContain('My content here');
    });
});
