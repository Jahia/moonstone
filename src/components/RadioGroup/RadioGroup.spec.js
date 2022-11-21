import React from 'react';
import {shallow} from 'component-test-utils-react';
import {RadioGroup} from './index';

describe('RadioGroup', () => {
    it('should render the children', () => {
        const radioGroup = shallow(<RadioGroup>toto</RadioGroup>);
        expect(radioGroup.html()).toContain('toto');
    });

    it('should pass props to the element', () => {
        const radioGroup = shallow(<RadioGroup title="radioGroup">toto</RadioGroup>);
        expect(radioGroup.html()).toContain('title="radioGroup"');
    });

    it('should pass className to the element', () => {
        const radioGroup = shallow(<RadioGroup className="customization">toto</RadioGroup>);
        expect(radioGroup.html()).toContain('customization');
    });

    it('should not display the menu when children is empty', () => {
        const radioGroup = shallow(<RadioGroup className="customization">{[]}</RadioGroup>);
        expect(radioGroup.html()).toContain('');
    });
});
