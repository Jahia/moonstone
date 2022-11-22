import React from 'react';
import {render, screen} from '@testing-library/react';
import {Radio} from './index';

describe('radio', () => {
    it('should display additional class names', () => {
        const className = 'test';
        const {container} = render(<Radio aria-label="radio" className={className}/>);
        expect(container.getElementsByClassName(className)).toBeTruthy();
    });

    it('should initially be checked off when the defaultSelected prop is set', () => {
        render(<Radio defaultChecked aria-label="radio"/>);
        expect(screen.getByRole('radio')).toBeChecked();
    });

    it('should be disabled when isDisabled is set', () => {
        render(<Radio isDisabled aria-label="radio"/>);
        expect(screen.getByRole('radio')).toBeDisabled();
    });

    it('should be read-only when isReadOnly is set', () => {
        render(<Radio isReadOnly aria-label="radio"/>);
        expect(screen.getByRole('radio')).toHaveAttribute('aria-readonly', 'true');
    });
});
