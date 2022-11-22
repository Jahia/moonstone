import React from 'react';
import {render, screen} from '@testing-library/react';
import {RadioItem} from './index';
import {RadioGroup} from '../RadioGroup';

describe('radio', () => {
    it('should display additional class names', () => {
        const className = 'test';
        const {container} = render(<RadioGroup name="test-name" value="test-value"><RadioItem aria-label="radio" className={className}/></RadioGroup>);
        expect(container.getElementsByClassName(className)).toBeTruthy();
    });

    it('should be disabled when isDisabled is set', () => {
        render(<RadioGroup name="test-name" value="test-value"><RadioItem isDisabled aria-label="radio"/></RadioGroup>);
        expect(screen.getByRole('radio')).toBeDisabled();
    });

    it('should be read-only when isReadOnly is set', () => {
        render(<RadioGroup name="test-name" value="test-value"><RadioItem isReadOnly aria-label="radio"/></RadioGroup>);
        expect(screen.getByRole('radio')).toHaveAttribute('aria-readonly', 'true');
    });
});
