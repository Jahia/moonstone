import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Chip } from './index';

describe('Chip', () => {
    it('should render', () => {
        render(<Chip data-testid="moonstone-chip"/>);
        expect(screen.getByTestId('moonstone-chip')).toBeInTheDocument();
    });

    it('should display additional className', () => {
        const className = 'test';

        render(<Chip className={className} data-testid="moonstone-chip"/>);
        expect(screen.getByTestId('moonstone-chip')).toHaveClass(className);
    });

    it('should display the label', () => {
        render(<Chip label="chip label"/>);
        expect(screen.getByText('chip label')).toBeInTheDocument();
    });

    it('should display the icon', () => {
        const Icon = () => <svg data-testid="moonstone-chip-icon"/>;

        render(<Chip icon={<Icon/>}/>);

        expect(screen.getByTestId('moonstone-chip-icon')).toBeInTheDocument();
    });

    it('should display both the icon and the label', () => {
        const Icon = () => <svg data-testid="moonstone-chip-icon"/>;

        render(<Chip icon={<Icon/>} label="chip label"/>);

        expect(screen.getByTestId('moonstone-chip-icon')).toBeInTheDocument();
        expect(screen.getByText('chip label')).toBeInTheDocument();
    });

    it('should be enabled by default', () => {
        render(<Chip data-testid="moonstone-chip"/>);
        expect(screen.getByTestId('moonstone-chip')).not.toHaveClass('moonstone-disabled');
    });

    it('should be disabled', () => {
        render(<Chip isDisabled data-testid="moonstone-chip"/>);
        expect(screen.getByTestId('moonstone-chip')).toHaveClass('moonstone-disabled');
    });
});

const renderChip = () => {
    const onClick = vi.fn();
    render(
        <>
            <button type="button">before</button>
            <Chip label="Published" onClick={onClick}/>
        </>,
    );
    return { onClick, chip: screen.getByText('Published').parentElement };
};

describe('Chip keyboard', () => {
    it.fails('reaches a clickable chip with Tab', async () => {
        const { chip } = renderChip();
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(chip).toHaveFocus();
    });

    it.fails('activates the focused clickable chip with Enter', async () => {
        const { onClick, chip } = renderChip();
        chip.focus();
        await userEvent.keyboard('{Enter}');
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it.fails('activates the focused clickable chip with Space', async () => {
        const { onClick, chip } = renderChip();
        chip.focus();
        await userEvent.keyboard(' ');
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});
