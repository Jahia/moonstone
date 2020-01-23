import React from 'react';
import {shallow} from 'component-test-utils-react';
import {ListItem} from './index';

describe('ListItem', () => {
    it('should display children content', () => {
        const wrapper = shallow(
            <ListItem label="Say my name"/>
        );
        expect(wrapper.html()).toContain('Say my name');
    });
});
