import React from 'react';
import {shallow} from 'component-test-utils-react';
import {Button, buttonColors, buttonSizes, buttonVariants} from './index';
import Love from '~/icons/Love';

describe('Button', () => {
    it('should render', () => {
        const button = shallow(<Button onClick={() => {}}/>);
        expect(button.html()).toEqual('<button class="moonstone-button size_default variant_default color_default icon-button" type="button" disabled="false" onClick="[onClick]"></button>');
    });

    it('should have the specified label', () => {
        const label = 'Button Toto';
        const button = shallow(<Button label={label} onClick={() => {}}/>);
        expect(button.html()).toContain(label);
    });

    it('should display the icon', () => {
        const button = shallow(<Button icon={<Love/>} onClick={() => {}}/>);
        expect(button.querySelector('SvgLove').exists()).toBeTruthy();
    });

    it('should have the specified label and an icon', () => {
        const label = 'Button Toto';
        const button = shallow(<Button label={label} icon={<Love/>} onClick={() => {}}/>);
        expect(button.html()).toContain(label);
        expect(button.querySelector('SvgLove').exists()).toBeTruthy();
    });

    it('should use the variant default', () => {
        const button1 = shallow(<Button onClick={() => {}}/>);
        expect(button1.querySelector('.variant_default').exists()).toBeTruthy();
        expect(button1.querySelector('.variant_outlined').exists()).toBeFalsy();
        expect(button1.querySelector('.variant_ghost').exists()).toBeFalsy();

        const button2 = shallow(<Button variant="default" onClick={() => {}}/>);
        expect(button2.querySelector('.variant_default').exists()).toBeTruthy();
        expect(button2.querySelector('.variant_outlined').exists()).toBeFalsy();
        expect(button2.querySelector('.variant_ghost').exists()).toBeFalsy();
    });

    it('should use the specified variant', () => {
        buttonVariants.forEach(variant => {
            const button = shallow(<Button variant={variant} onClick={() => {}}/>);
            expect(button.querySelector(`.variant_${variant}`).exists()).toBeTruthy();
        });
    });

    it('should use the reverse mode', () => {
        const button = shallow(<Button isReversed onClick={() => {}}/>);
        expect(button.querySelector('.reverse').exists()).toBeTruthy();
    });

    it('should be disabled', () => {
        const button = shallow(<Button isDisabled onClick={() => {}}/>);
        expect(button.html().indexOf('disabled') !== -1).toBeTruthy();
    });

    it('should use the color default', () => {
        const button1 = shallow(<Button onClick={() => {}}/>);
        expect(button1.querySelector('.color_default').exists()).toBeTruthy();
        expect(button1.querySelector('.color_accent').exists()).toBeFalsy();
        expect(button1.querySelector('.color_success').exists()).toBeFalsy();
        expect(button1.querySelector('.color_warning').exists()).toBeFalsy();
        expect(button1.querySelector('.color_danger').exists()).toBeFalsy();

        const button2 = shallow(<Button color="default" onClick={() => {}}/>);
        expect(button2.querySelector('.color_default').exists()).toBeTruthy();
        expect(button2.querySelector('.color_accent').exists()).toBeFalsy();
        expect(button2.querySelector('.color_success').exists()).toBeFalsy();
        expect(button2.querySelector('.color_warning').exists()).toBeFalsy();
        expect(button2.querySelector('.color_danger').exists()).toBeFalsy();
    });

    it('should use the specified color', () => {
        buttonColors.forEach(color => {
            const button = shallow(<Button color={color} onClick={() => {}}/>);
            expect(button.querySelector(`.color_${color}`).exists()).toBeTruthy();
        });
    });

    it('should use the default size', () => {
        const button1 = shallow(<Button onClick={() => {}}/>);
        expect(button1.querySelector('.size_default').exists()).toBeTruthy();
        expect(button1.querySelector('.size_small').exists()).toBeFalsy();
        expect(button1.querySelector('.size_big').exists()).toBeFalsy();

        const button2 = shallow(<Button size="default" onClick={() => {}}/>);
        expect(button2.querySelector('.size_default').exists()).toBeTruthy();
        expect(button2.querySelector('.size_small').exists()).toBeFalsy();
        expect(button2.querySelector('.size_big').exists()).toBeFalsy();
    });

    it('should use the specified size', () => {
        buttonSizes.forEach(size => {
            const button = shallow(<Button size={size} onClick={() => {}}/>);
            expect(button.querySelector(`.size_${size}`).exists()).toBeTruthy();
        });
    });

    it('should have extra attribute', () => {
        const button = shallow(<Button data-custom="test" onClick={() => {}}/>);
        expect(button.html().indexOf('data-custom="test"') !== -1).toBeTruthy();
    });

    it('should have extra CSS class', () => {
        const button = shallow(<Button className="toto" onClick={() => {}}/>);
        expect(button.querySelector('.toto').exists()).toBeTruthy();
    });
});
