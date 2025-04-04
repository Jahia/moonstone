import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Button} from '~/components';
import {Tooltip} from './index';

describe('Tooltip', () => {
    it('should not display if not hovered', () => {
        render(<Tooltip label="Tooltip" data-testid="moonstone-tooltip"><Button label="Button"/></Tooltip>);
        expect(screen.queryByText('Tooltip')).not.toBeInTheDocument();
    });

    it('should not render if no children', () => {
        render(<Tooltip label="Tooltip" data-testid="moonstone-tooltip"/>);
        expect(screen.queryByTestId('moonstone-tooltip')).not.toBeInTheDocument();
    });

    it('should not render if no label', () => {
        render(<Tooltip data-testid="moonstone-tooltip"><Button label="Button"/></Tooltip>);
        expect(screen.queryByTestId('moonstone-tooltip')).not.toBeInTheDocument();
    });

    it('should display', async () => {
        const user = userEvent.setup();
        render(<Tooltip label="Tooltip" data-testid="moonstone-tooltip"><Button label="Button"/></Tooltip>);
        await user.hover(screen.getByText('Button'));
        expect(screen.getByText('Tooltip')).toBeInTheDocument();
    });

    it('should display if button is disabled', async () => {
        const user = userEvent.setup();
        render(<Tooltip label="Tooltip" data-testid="moonstone-tooltip"><Button isDisabled label="Button"/></Tooltip>);
        await user.hover(screen.getByText('Button'));
        expect(screen.getByText('Tooltip')).toBeInTheDocument();
    });
});
