import { render, screen, waitFor } from '@testing-library/react';
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
});

const renderTooltip = () => {
    render(
        <>
            <button type="button">before</button>
            <Tooltip label="Go home">
                <button type="button">Home</button>
            </Tooltip>
            <button type="button">after</button>
        </>,
    );
    return { trigger: screen.getByRole('button', { name: 'Home' }) };
};

describe('Tooltip keyboard', () => {
    it('appears when the trigger receives keyboard focus', async () => {
        const { trigger } = renderTooltip();
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(trigger).toHaveFocus();
        expect(await screen.findByRole('tooltip')).toHaveTextContent('Go home');
    });

    it('disappears when the trigger loses focus', async () => {
        renderTooltip();
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        await screen.findByRole('tooltip');
        await userEvent.keyboard('{Tab}');
        await waitFor(() => expect(screen.queryByRole('tooltip')).not.toBeInTheDocument());
    });

    it('dismisses with Escape while the trigger keeps focus', async () => {
        const { trigger } = renderTooltip();
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        await screen.findByRole('tooltip');
        await userEvent.keyboard('{Escape}');
        await waitFor(() => expect(screen.queryByRole('tooltip')).not.toBeInTheDocument());
        expect(trigger).toHaveFocus();
    });
});
