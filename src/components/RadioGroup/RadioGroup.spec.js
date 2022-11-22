import React from 'react';
import {render, screen} from '@testing-library/react';
import {RadioGroup} from './index';
import {RadioItem} from './RadioItem';

describe('RadioGroup', () => {
    it('should render the children', () => {
        const className = 'children-custom';
        const {container} = render(<RadioGroup name="test-name" value="test-value"><RadioItem aria-label="radio" className={className}/></RadioGroup>);
        expect(container.getElementsByClassName(className)).toBeTruthy();
    });

    it('should pass props to the element', () => {
        render(<RadioGroup data-testid="radioGroupTestId" name="test-name" value="test-value" title="test-radioGroup"><RadioItem aria-label="radio"/></RadioGroup>);
        expect(screen.getByTestId('radioGroupTestId')).toHaveAttribute('title', 'test-radioGroup');
    });

    it('should pass className to the element', () => {
        const className = 'customization';
        const {container} = render(<RadioGroup name="test-name" value="test-value" className={className}><RadioItem aria-label="radio"/></RadioGroup>);
        expect(container.getElementsByClassName(className)).toBeTruthy();
    });

    it('should not display the RadioGroup when children is empty', () => {
        const {container} = render(<RadioGroup className="customization">{[]}</RadioGroup>);
        expect(container).toBeEmpty();
    });
});
