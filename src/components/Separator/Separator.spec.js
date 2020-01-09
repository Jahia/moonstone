import React from 'react';
import {shallow} from 'component-test-utils-react';
import {Separator} from './index';

describe('Separator', () => {
    it('should display separator component', () => {
        const wrapper = shallow(
            <Separator/>
        );
        expect(wrapper.html());
    });

    it('should set size props', () => {
        const wrapper = shallow(
            <Separator size="medium"/>
        );
        expect(wrapper.props.size).toContain('medium');
    });

    it('should set spacing props', () => {
        const wrapper = shallow(
            <Separator size="medium"/>
        );
        expect(wrapper.props.size).toContain('medium');
    });
});
