import React from 'react';
import {shallow} from 'component-test-utils-react';
import {SvgWrapper} from './SvgWrapper';

describe('ImgWrapper', () => {
    it('should render', () => {
        const svgString = '<svg viewBox="0 0 24 24" fill="none"><path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4l2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z" fill="currentColor"/></svg>';
        const img = shallow(<SvgWrapper svg={svgString}/>);
        expect(img.html()).toBe('<svg viewBox="0 0 24 24" fill="none" class=" moonstone-icon moonstone-icon_default"><path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4l2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z" fill="currentColor"></path></svg>');
    });
});
