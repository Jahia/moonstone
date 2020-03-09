import React from 'react';
import {shallow} from 'component-test-utils-react';
import {Tab} from './index';

describe('Tab', () => {
    it('should render', () => {
        const tab = shallow(<Tab>toto</Tab>);
        expect(tab.html()).toEqual('<div class="tab flexRow_center alignCenter">toto</div>');
    });
});
