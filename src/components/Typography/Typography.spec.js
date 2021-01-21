import React from 'react';
import {shallow} from 'component-test-utils-react';
import {Typography} from './index.ts';
import {variants, weights} from '~/shared-types/typography.types';

describe('Typography', () => {
    it('should display a text children', () => {
        const wrapper = shallow(<Typography>Content children</Typography>);
        expect(wrapper.html()).toContain('Content children');
    });

    it('should display a body variant by default', () => {
        const wrapper = shallow(<Typography>Content children</Typography>);
        expect(wrapper.props.className).toContain('typography moonstone-variant_body');
    });

    it('should display the specified variant', () => {
        variants.forEach(variant => {
            const wrapper = shallow(<Typography variant={variant}>Content children</Typography>);
            expect(wrapper.props.className).toContain(`moonstone-variant_${variant}`);
        });
    });

    it('should use the default weight', () => {
        const wrapper = shallow(<Typography>Test</Typography>);
        expect(wrapper.props.className).toContain('moonstone-weight_default');
    });

    it('should use the specified weight', () => {
        weights.forEach(weight => {
            const wrapper = shallow(<Typography weight={weight}>Test</Typography>);
            expect(wrapper.props.className).toContain(`moonstone-weight_${weight}`);
        });
    });

    it('should display a text in italic', () => {
        const wrapper = shallow(<Typography isItalic>Test</Typography>);
        expect(wrapper.props.className).toContain('moonstone-italic');
    });

    it('should not display a text in italic', () => {
        const wrapper = shallow(<Typography>Test</Typography>);
        expect(wrapper.props.className).not.toContain('italic');
    });

    it('should display a text in upper case', () => {
        const wrapper = shallow(<Typography isUpperCase>Test</Typography>);
        expect(wrapper.props.className).toContain('moonstone-upperCase');
    });

    it('should not display a text in upper case', () => {
        const wrapper = shallow(<Typography>Test</Typography>);
        expect(wrapper.props.className).not.toContain('moonstone-upperCase');
    });

    it('should display a text with a line-through', () => {
        const wrapper = shallow(<Typography hasLineThrough>Test</Typography>);
        expect(wrapper.props.className).toContain('moonstone-lineThrough');
    });

    it('should not display a text with a line-through', () => {
        const wrapper = shallow(<Typography>Test</Typography>);
        expect(wrapper.props.className).not.toContain('moonstone-lineThrough');
    });

    it('should display a tag html p by default', () => {
        const wrapper = shallow(<Typography>Content children</Typography>);
        expect(wrapper.html()).toContain('p');
    });

    it('should display a tag html h1', () => {
        const wrapper = shallow(<Typography component="h1">Content children</Typography>);
        expect(wrapper.html()).toContain('h1');
    });

    it('should add extra props', () => {
        const wrapper = shallow(
            <Typography onClick={() => 'test'}>Content children</Typography>
        );
        expect(wrapper.html()).toContain('onClick');
    });

    it('should add extra className', () => {
        const wrapper = shallow(
            <Typography className="yoloooo">Content children</Typography>
        );
        expect(wrapper.props.className).toContain('yoloooo');
    });

    it('should not bind isHtml prop to the html component', () => {
        const wrapper = shallow(
            <Typography isHtml><div>string</div></Typography>
        );
        expect(wrapper.html()).not.toContain('isHtml');
    });

    it('should not validate propTypes when on production environment', () => {
        // eslint-disable-next-line
        // tslint:disable-next-line
        global.console.originalError = console.error;
        global.console.error = jest.fn();

        jest.resetModules();
        process.env.NODE_ENV = 'production';
        const TypographyComponent = require('./Typography');

        shallow(
            <TypographyComponent.Typography isHtml>{true}</TypographyComponent.Typography>
        );

        expect(global.console.error).not.toHaveBeenCalled();

        global.console.error = global.console.originalError;
        delete global.console.originalError;
    });
});
