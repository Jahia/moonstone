import React from 'react';
import {shallow} from 'component-test-utils-react';
import {TabItem, tabItemColors, tabItemSizes, tabItemVariants} from './index';
import Love from '~/icons/Love';

describe('TabItem', () => {
    it('should render', () => {
        const tabItem = shallow(<TabItem onClick={() => {}}/>);
        expect(tabItem.html()).toEqual('<button class="tab-item size_default variant_ghost color_default icon-tab-item" disabled="false" onClick="[onClick]"><></></button>');
    });

    it('should have the specified label', () => {
        const label = 'TabItem Toto';
        const tabItem = shallow(<TabItem label={label} onClick={() => {}}/>);
        expect(tabItem.html()).toContain(label);
    });

    it('should display the icon', () => {
        const tabItem = shallow(<TabItem icon={<Love/>} onClick={() => {}}/>);
        expect(tabItem.querySelector('SvgLove').exists()).toBeTruthy();
    });

    it('should have the specified label and an icon', () => {
        const label = 'tabItem Toto';
        const tabItem = shallow(<TabItem label={label} icon={<Love/>} onClick={() => {}}/>);
        expect(tabItem.html()).toContain(label);
        expect(tabItem.querySelector('SvgLove').exists()).toBeTruthy();
    });

    it('should use the variant ghost', () => {
        const tabItem1 = shallow(<TabItem onClick={() => {}}/>);
        expect(tabItem1.querySelector('.variant_ghost').exists()).toBeTruthy();

        const tabItem2 = shallow(<TabItem variant="ghost" onClick={() => {}}/>);
        expect(tabItem2.querySelector('.variant_ghost').exists()).toBeTruthy();
    });

    it('should use the specified variant', () => {
        tabItemVariants.forEach(variant => {
            const tabItem = shallow(<TabItem variant={variant} onClick={() => {}}/>);
            expect(tabItem.querySelector(`.variant_${variant}`).exists()).toBeTruthy();
        });
    });

    it('should use the reverse mode', () => {
        const tabItem = shallow(<TabItem isReversed onClick={() => {}}/>);
        expect(tabItem.querySelector('.reverse').exists()).toBeTruthy();
    });

    it('should be disabled', () => {
        const tabItem = shallow(<TabItem isDisabled onClick={() => {}}/>);
        expect(tabItem.html().indexOf('disabled') !== -1).toBeTruthy();
    });

    it('should be selected', () => {
        const tabItem = shallow(<TabItem isSelected onClick={() => {}}/>);
        expect(tabItem.props.isSelected).toBeTruthy();
    });

    it('should not be selected', () => {
        const tabItem = shallow(<TabItem isSelected={false} onClick={() => {}}/>);
        expect(tabItem.props.isSelected).toBeFalsy();
    });

    it('should use the color default', () => {
        const tabItem1 = shallow(<TabItem onClick={() => {}}/>);
        expect(tabItem1.querySelector('.color_default').exists()).toBeTruthy();

        const tabItem2 = shallow(<TabItem color="default" onClick={() => {}}/>);
        expect(tabItem2.querySelector('.color_default').exists()).toBeTruthy();
    });

    it('should use the specified color', () => {
        tabItemColors.forEach(color => {
            const tabItem = shallow(<TabItem color={color} onClick={() => {}}/>);
            expect(tabItem.querySelector(`.color_${color}`).exists()).toBeTruthy();
        });
    });

    it('should use the default size', () => {
        const tabItem1 = shallow(<TabItem onClick={() => {}}/>);
        expect(tabItem1.querySelector('.size_default').exists()).toBeTruthy();

        const tabItem2 = shallow(<TabItem size="default" onClick={() => {}}/>);
        expect(tabItem2.querySelector('.size_default').exists()).toBeTruthy();
    });

    it('should use the specified size', () => {
        tabItemSizes.forEach(size => {
            const tabItem = shallow(<TabItem size={size} onClick={() => {}}/>);
            expect(tabItem.querySelector(`.size_${size}`).exists()).toBeTruthy();
        });
    });

    it('should have extra attribute', () => {
        const tabItem = shallow(<TabItem data-custom="test" onClick={() => {}}/>);
        expect(tabItem.html().indexOf('data-custom="test"') !== -1).toBeTruthy();
    });

    it('should have extra CSS class', () => {
        const tabItem = shallow(<TabItem className="toto" onClick={() => {}}/>);
        expect(tabItem.querySelector('.toto').exists()).toBeTruthy();
    });
});
