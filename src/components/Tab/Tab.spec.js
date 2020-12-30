import React from 'react';
import {shallow} from 'component-test-utils-react';
import {Tab} from './index';

describe('Tab', () => {
    it('should render the children', () => {
        const tab = shallow(<Tab>toto</Tab>);
        expect(tab.html()).toContain('toto');
    });

    it('should pass props to the element', () => {
        const tab = shallow(<Tab title="tabulation">toto</Tab>);
        expect(tab.html()).toContain('title="tabulation"');
    });

    it('should pass className to the element', () => {
        const tab = shallow(<Tab className="customization">toto</Tab>);
        expect(tab.html()).toContain('customization');
    });

    it('should not display the menu when children is empty', () => {
        const tab = shallow(<Tab className="customization">{[]}</Tab>);
        expect(tab.html()).toContain('');
    });
});
