import React from 'react';
import {shallow} from 'component-test-utils-react';
import {ImgWrapper} from './ImgWrapper';

describe('ImgWrapper', () => {
    it('should render', () => {
        const img = shallow(<ImgWrapper src="https://toto.jahia.com" alt="toto face"/>);
        expect(img.html()).toBe('<img src="https://toto.jahia.com" alt="toto face" class=" moonstone-icon moonstone-icon_default"/>');
    });
});
