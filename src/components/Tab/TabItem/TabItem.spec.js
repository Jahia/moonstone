import React from 'react';
import {shallow} from 'component-test-utils-react';
import {TabItem} from './index';
import {tabItemColors, tabItemSizes, tabItemVariants} from './TabItem.types';
import {Love} from '~/icons';

describe('TabItem', () => {
    it('should render', () => {
        const tabItem = shallow(<TabItem onClick={() => null}/>);
        expect(tabItem.html()).toEqual('<button class="moonstone-tab-item moonstone-size_default moonstone-variant_ghost moonstone-color_default moonstone-icon-tab-item" disabled="false" onClick="[onClick]"><></></button>');
    });

    it('should have the specified label', () => {
        const label = 'TabItem Toto';
        const tabItem = shallow(<TabItem label={label} onClick={() => null}/>);
        expect(tabItem.html()).toContain(label);
    });

    it('should display the icon', () => {
        const tabItem = shallow(<TabItem icon={<Love/>} onClick={() => null}/>);
        expect(tabItem.querySelector('SvgLove').exists()).toBeTruthy();
    });

    it('should have the specified label and an icon', () => {
        const label = 'tabItem Toto';
        const tabItem = shallow(<TabItem label={label} icon={<Love/>} onClick={() => null}/>);
        expect(tabItem.html()).toContain(label);
        expect(tabItem.querySelector('SvgLove').exists()).toBeTruthy();
    });

    it('should use the variant ghost', () => {
        const tabItem1 = shallow(<TabItem onClick={() => null}/>);
        expect(tabItem1.querySelector('.moonstone-variant_ghost').exists()).toBeTruthy();

        const tabItem2 = shallow(<TabItem variant="ghost" onClick={() => null}/>);
        expect(tabItem2.querySelector('.moonstone-variant_ghost').exists()).toBeTruthy();
    });

    it('should use the specified variant', () => {
        tabItemVariants.forEach(variant => {
            const tabItem = shallow(<TabItem variant={variant} onClick={() => null}/>);
            expect(tabItem.querySelector(`.moonstone-variant_${variant}`).exists()).toBeTruthy();
        });
    });

    it('should use the reverse mode', () => {
        const tabItem = shallow(<TabItem isReversed onClick={() => null}/>);
        expect(tabItem.querySelector('.moonstone-reverse').exists()).toBeTruthy();
    });

    it('should be disabled', () => {
        const tabItem = shallow(<TabItem isDisabled onClick={() => null}/>);
        expect(tabItem.html().indexOf('disabled') !== -1).toBeTruthy();
    });

    it('should be selected', () => {
        const tabItem = shallow(<TabItem isSelected onClick={() => null}/>);
        expect(tabItem.props.isSelected).toBeTruthy();
    });

    it('should not be selected', () => {
        const tabItem = shallow(<TabItem isSelected={false} onClick={() => null}/>);
        expect(tabItem.props.isSelected).toBeFalsy();
    });

    it('should use the color default', () => {
        const tabItem1 = shallow(<TabItem onClick={() => null}/>);
        expect(tabItem1.querySelector('.moonstone-color_default').exists()).toBeTruthy();

        const tabItem2 = shallow(<TabItem color="default" onClick={() => null}/>);
        expect(tabItem2.querySelector('.moonstone-color_default').exists()).toBeTruthy();
    });

    it('should use the specified color', () => {
        tabItemColors.forEach(color => {
            const tabItem = shallow(<TabItem color={color} onClick={() => null}/>);
            expect(tabItem.querySelector(`.moonstone-color_${color}`).exists()).toBeTruthy();
        });
    });

    it('should use the default size', () => {
        const tabItem1 = shallow(<TabItem onClick={() => null}/>);
        expect(tabItem1.querySelector('.moonstone-size_default').exists()).toBeTruthy();

        const tabItem2 = shallow(<TabItem size="default" onClick={() => null}/>);
        expect(tabItem2.querySelector('.moonstone-size_default').exists()).toBeTruthy();
    });

    it('should use the specified size', () => {
        tabItemSizes.forEach(size => {
            const tabItem = shallow(<TabItem size={size} onClick={() => null}/>);
            expect(tabItem.querySelector(`.moonstone-size_${size}`).exists()).toBeTruthy();
        });
    });

    it('should have extra attribute', () => {
        const tabItem = shallow(<TabItem data-custom="test" onClick={() => null}/>);
        expect(tabItem.html().indexOf('data-custom="test"') !== -1).toBeTruthy();
    });

    it('should have extra CSS class', () => {
        const tabItem = shallow(<TabItem className="toto" onClick={() => null}/>);
        expect(tabItem.querySelector('.toto').exists()).toBeTruthy();
    });
});
