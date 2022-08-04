import React from 'react';
import {shallow} from 'component-test-utils-react';
import {Button} from './index';
import {buttonColors, buttonSizes, buttonVariants} from './Button.types.ts';
import {Love} from '~/icons';

describe('Button', () => {
    it('should render', () => {
        const button = shallow(<Button onClick={() => null}/>);
        expect(button.html()).toEqual('<button class="moonstone-button moonstone-size_default moonstone-variant_default moonstone-color_default moonstone-icon-button" type="button" disabled="false" onClick="[onClick]"></button>');
    });

    it('should have the specified label', () => {
        const label = 'Button Toto';
        const button = shallow(<Button label={label} onClick={() => null}/>);
        expect(button.html()).toContain(label);
    });

    it('should display the icon', () => {
        const button = shallow(<Button icon={<Love/>} onClick={() => null}/>);
        expect(button.querySelector('SvgLove').exists()).toBeTruthy();
    });

    it('should have the specified label and an icon', () => {
        const label = 'Button Toto';
        const button = shallow(<Button label={label} icon={<Love/>} onClick={() => null}/>);
        expect(button.html()).toContain(label);
        expect(button.querySelector('SvgLove').exists()).toBeTruthy();
    });

    it('should use the variant default', () => {
        const button1 = shallow(<Button onClick={() => null}/>);
        expect(button1.querySelector('.moonstone-variant_default').exists()).toBeTruthy();
        expect(button1.querySelector('.moonstone-variant_outlined').exists()).toBeFalsy();
        expect(button1.querySelector('.moonstone-variant_ghost').exists()).toBeFalsy();

        const button2 = shallow(<Button variant="default" onClick={() => null}/>);
        expect(button2.querySelector('.moonstone-variant_default').exists()).toBeTruthy();
        expect(button2.querySelector('.moonstone-variant_outlined').exists()).toBeFalsy();
        expect(button2.querySelector('.moonstone-variant_ghost').exists()).toBeFalsy();
    });

    it('should use the specified variant', () => {
        buttonVariants.forEach(variant => {
            const button = shallow(<Button variant={variant} onClick={() => null}/>);
            expect(button.querySelector(`.moonstone-variant_${variant}`).exists()).toBeTruthy();
        });
    });

    it('should use the reverse mode', () => {
        const button = shallow(<Button isReversed onClick={() => null}/>);
        expect(button.querySelector('.moonstone-reverse').exists()).toBeTruthy();
    });

    it('should be disabled', () => {
        const button = shallow(<Button isDisabled onClick={() => null}/>);
        expect(button.html().indexOf('disabled') !== -1).toBeTruthy();
    });

    it('should use the color default', () => {
        const button1 = shallow(<Button onClick={() => null}/>);
        expect(button1.querySelector('.moonstone-color_default').exists()).toBeTruthy();
        expect(button1.querySelector('.moonstone-color_accent').exists()).toBeFalsy();
        expect(button1.querySelector('.moonstone-color_success').exists()).toBeFalsy();
        expect(button1.querySelector('.moonstone-color_warning').exists()).toBeFalsy();
        expect(button1.querySelector('.moonstone-color_danger').exists()).toBeFalsy();

        const button2 = shallow(<Button color="default" onClick={() => null}/>);
        expect(button2.querySelector('.moonstone-color_default').exists()).toBeTruthy();
        expect(button2.querySelector('.moonstone-color_accent').exists()).toBeFalsy();
        expect(button2.querySelector('.moonstone-color_success').exists()).toBeFalsy();
        expect(button2.querySelector('.moonstone-color_warning').exists()).toBeFalsy();
        expect(button2.querySelector('.moonstone-color_danger').exists()).toBeFalsy();
    });

    it('should use the specified color', () => {
        buttonColors.forEach(color => {
            const button = shallow(<Button color={color} onClick={() => null}/>);
            expect(button.querySelector(`.moonstone-color_${color}`).exists()).toBeTruthy();
        });
    });

    it('should use the default size', () => {
        const button1 = shallow(<Button onClick={() => null}/>);
        expect(button1.querySelector('.moonstone-size_default').exists()).toBeTruthy();
        expect(button1.querySelector('.moonstone-size_small').exists()).toBeFalsy();
        expect(button1.querySelector('.moonstone-size_big').exists()).toBeFalsy();

        const button2 = shallow(<Button size="default" onClick={() => null}/>);
        expect(button2.querySelector('.moonstone-size_default').exists()).toBeTruthy();
        expect(button2.querySelector('.moonstone-size_small').exists()).toBeFalsy();
        expect(button2.querySelector('.moonstone-size_big').exists()).toBeFalsy();
    });

    it('should use the specified size', () => {
        buttonSizes.forEach(size => {
            const button = shallow(<Button size={size} onClick={() => null}/>);
            expect(button.querySelector(`.moonstone-size_${size}`).exists()).toBeTruthy();
        });
    });

    it('should have extra attribute', () => {
        const button = shallow(<Button data-custom="test" onClick={() => null}/>);
        expect(button.html().indexOf('data-custom="test"') !== -1).toBeTruthy();
    });

    it('should have extra CSS class', () => {
        const button = shallow(<Button className="toto" onClick={() => null}/>);
        expect(button.querySelector('.toto').exists()).toBeTruthy();
    });
});
