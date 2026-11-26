import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Tooltip } from './index';
import { Button } from '~/components';

const requiredProps = {
    label: 'Tooltip',
};

describe('Tooltip', () => {
    it('should not display if not hovered', () => {
        render(<Tooltip {...requiredProps} data-testid="moonstone-tooltip"><Button label="Button"/></Tooltip>);
        expect(screen.queryByText('Tooltip')).not.toBeInTheDocument();
    });

    it('should not render if no children', () => {
        // @ts-expect-error testing no children
        render(<Tooltip {...requiredProps} data-testid="moonstone-tooltip"/>);
        expect(screen.queryByTestId('moonstone-tooltip')).not.toBeInTheDocument();
    });

    it('should not render if no label', () => {
        // @ts-expect-error testing no label
        render(<Tooltip data-testid="moonstone-tooltip"><Button label="Button"/></Tooltip>);
        expect(screen.queryByTestId('moonstone-tooltip')).not.toBeInTheDocument();
    });

    it('should display', async () => {
        const user = userEvent.setup();
        render(<Tooltip {...requiredProps} data-testid="moonstone-tooltip"><Button label="Button"/></Tooltip>);
        await user.hover(screen.getByText('Button'));
        expect(screen.getByText(requiredProps.label)).toBeInTheDocument();
    });

    it('should display if button is disabled', async () => {
        const user = userEvent.setup();
        render(<Tooltip {...requiredProps} data-testid="moonstone-tooltip"><Button isDisabled label="Button"/></Tooltip>);
        await user.hover(screen.getByText('Button'));
        expect(screen.getByText(requiredProps.label)).toBeInTheDocument();
    });

    it('should give each tooltip its own id', async () => {
        const user = userEvent.setup();
        render(
            <>
                <Tooltip label="First tooltip"><Button label="First"/></Tooltip>
                <Tooltip label="Second tooltip"><Button label="Second"/></Tooltip>
            </>,
        );

        await user.hover(screen.getByRole('button', { name: 'First' }));
        const firstId = screen.getByRole('tooltip').id;
        await user.unhover(screen.getByRole('button', { name: 'First' }));
        await user.hover(screen.getByRole('button', { name: 'Second' }));

        expect(screen.getByRole('tooltip').id).not.toBe(firstId);
    });

    it('should describe the anchor with the tooltip', async () => {
        const user = userEvent.setup();
        render(<Tooltip {...requiredProps}><Button label="Button"/></Tooltip>);
        await user.hover(screen.getByRole('button'));
        expect(screen.getByRole('button')).toHaveAccessibleDescription(requiredProps.label);
    });

    it('should keep the anchor\'s own description', async () => {
        const user = userEvent.setup();
        render(
            <>
                <span id="own-description">Own description</span>
                <Tooltip {...requiredProps}><Button aria-describedby="own-description" label="Button"/></Tooltip>
            </>,
        );
        await user.hover(screen.getByRole('button'));
        expect(screen.getByRole('button')).toHaveAccessibleDescription(`Own description ${requiredProps.label}`);
    });
});
