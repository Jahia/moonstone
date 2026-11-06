import { render, screen } from '@testing-library/react';

import { Pill } from './index';

// The 2.21.1 fix was lost once on main (app-shell#410)
describe('Pill styles', () => {
    it('does not stretch to the width of its container', () => {
        render(<Pill data-testid="pill">Say my name</Pill>);
        expect(getComputedStyle(screen.getByTestId('pill')).display).toBe('inline-flex');
    });
});
