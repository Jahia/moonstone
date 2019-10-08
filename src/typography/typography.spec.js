import React from 'react';
import {Typography} from './index';
import {shallow} from 'component-test-utils-react';

describe('Typography', () => {
    it('should display a text children', () => {
        const wrapper = shallow(<Typography>Content children</Typography>);
        expect(wrapper.html()).toContain('Content children');
    });

    it('should display a classname page', () => {
        const wrapper = shallow(
            <Typography variant="page">Content children</Typography>
        );
        expect(wrapper.props.className).toContain('typography_page');
    });

    it('should display a tag html p by default', () => {
        const wrapper = shallow(<Typography>Content children</Typography>);
        expect(wrapper.html()).toContain('p');
    });

    it('should display a regular variant by default', () => {
        const wrapper = shallow(<Typography>Content children</Typography>);
        expect(wrapper.props.className).toContain('typography_regular');
    });

    it('should display a tag html h1', () => {
        const wrapper = shallow(
            <Typography component="h1">Content children</Typography>
        );
        expect(wrapper.html()).toContain('h1');
    });

    it('should add extra props ', () => {
        const wrapper = shallow(
            <Typography onClick={() => {}}>Content children</Typography>
        );
        expect(wrapper.html()).toContain('onClick');
    });

    it('should add extra className ', () => {
        const wrapper = shallow(
            <Typography className="yoloooo">Content children</Typography>
        );
        expect(wrapper.props.className).toContain('yoloooo');
    });
});
