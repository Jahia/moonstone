import React from 'react';
import {shallow} from 'component-test-utils-react';
import {Icon} from './index';

jest.mock('../../icons/icons-loader', () => {});

describe('Icon', () => {
    it('should add extra props', () => {
        const wrapper = shallow(<Icon name="toto" onClick={() => {}}/>);
        expect(wrapper.html()).toContain('onClick');
    });

    it('should add extra className', () => {
        const wrapper = shallow(<Icon className="yoloooo" name="toto"/>);
        expect(wrapper.props.className).toContain('yoloooo');
    });

    it('should use the name', () => {
        const wrapper = shallow(<Icon name="toto" className="yoloooo"/>);
        expect(wrapper.querySelector('use').props.xlinkHref).toBe('#toto');
    });
});
