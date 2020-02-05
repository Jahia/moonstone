import React from 'react';
import {shallow} from 'component-test-utils-react';
import {Button} from './index';
import TestRenderer from 'react-test-renderer';

describe('Button', () => {
    it('should work', () => {
        const wrapper = shallow(<Button onClick={() => {}}/>);
        expect(wrapper.html());
    });

    it('contains label if specified', () => {
        const wrapper = shallow(<Button label="Button" onClick={() => {}}/>);
        expect(wrapper.html()).toContain('Button');
    });

    it('should display the icon', () => {
        const Icon = () => <svg/>;
        const testRenderer = TestRenderer.create(<Button icon={<Icon/>} onClick={() => {}}/>);
        expect(testRenderer.root.findByType(Icon));
    });

    it('should use the variant ghost', () => {
        const wrapper = shallow(<Button variant="ghost" onClick={() => {}}/>);
        expect(wrapper.html()).toContain('button ghost inherit');
    });

    it('should use the color reverse', () => {
        const wrapper = shallow(<Button color="reverse" onClick={() => {}}/>);
        expect(wrapper.html()).toContain('button default reverse');
    });

    it('should use the icon, variant, color', () => {
        const Icon = () => <svg/>;
        const wrapper = shallow(<Button color="reverse" icon={<Icon/>} variant="ghost" onClick={() => {}}/>);
        expect(wrapper.html()).toContain('button ghost reverse icon');
    });

    it('should add extra attribute', () => {
        const wrapper = shallow(<Button data-custom="test" onClick={() => {}}/>);
        expect(wrapper.html()).toContain('data-custom="test"');
    });
});
