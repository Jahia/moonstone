import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { CardSelector } from './index';
import { Chip } from '~/components/Chip';
import { Love } from '~/icons';

const requiredProps = {
    id: 'card-selector',
    displayName: 'card name',
};

describe('CardSelector', () => {
    it('should display additional class names', () => {
        render(<CardSelector {...requiredProps} className="extra" data-testid="card-selector"/>);
        expect(screen.getByTestId('card-selector')).toHaveClass('extra');
    });

    it('should display displayName', () => {
        render(<CardSelector {...requiredProps}/>);
        expect(screen.getByText(requiredProps.displayName)).toBeInTheDocument();
    });

    it('should display systemName', () => {
        render(<CardSelector {...requiredProps} systemName="this systemName"/>);
        expect(screen.getByText('(this systemName)')).toBeInTheDocument();
    });

    it('should display information', () => {
        render(<CardSelector {...requiredProps} information="this information"/>);
        expect(screen.getByText('this information')).toBeInTheDocument();
    });

    it('should display the image with thumbnail', () => {
        const { container } = render(<CardSelector {...requiredProps} thumbnail="thumbnail.png"/>);
        expect(
            container.querySelector('img[src="thumbnail.png"]'),
        ).toBeInTheDocument();
    });

    it('should display the icon passed with thumbnail', () => {
        const { container } = render(
            <CardSelector {...requiredProps} thumbnail={<Love id="thumbnail-icon"/>}/>,
        );
        expect(
            container.querySelector('#thumbnail-icon'),
        ).toBeInTheDocument();
    });

    it('should display img as icon when thumbnailType is icon', () => {
        const { container } = render(
            <CardSelector {...requiredProps} thumbnail="thumbnail.png" thumbnailType="icon"/>,
        );
        expect(
            container.querySelector('.moonstone-thumbnail_icon'),
        ).toBeInTheDocument();
    });

    it('should display img as img when thumbnailType is preview', () => {
        const { container } = render(
            <CardSelector
                {...requiredProps}
                thumbnail="thumbnail.png"
                thumbnailType="preview"
            />,
        );
        expect(
            container.querySelector('.moonstone-thumbnail_preview'),
        ).toBeInTheDocument();
    });

    it('should use thumbnailAlt as img alt attribute', () => {
        render(
            <CardSelector
                {...requiredProps}
                thumbnail="thumbnail.png"
                thumbnailAlt="thumbnail-alt"
            />,
        );
        expect(
            screen.getByAltText('thumbnail-alt'),
        ).toBeInTheDocument();
    });

    it('should display chips', () => {
        render(<CardSelector {...requiredProps} chips={[<Chip key="chip" label="chip"/>]}/>);
        expect(screen.getByText('chip')).toBeInTheDocument();
    });

    it('should display cardActions', () => {
        render(
            <CardSelector {...requiredProps} cardAction={<Chip key="chip" label="action"/>}/>,
        );
        expect(screen.getByText('action')).toBeInTheDocument();
    });

    it('should call onClick when clicked', async () => {
        const user = userEvent.setup();
        const onClick = vi.fn();

        render(<CardSelector {...requiredProps} data-testid="card-selector" onClick={onClick}/>);
        await user.click(screen.getByTestId('card-selector'));

        expect(onClick).toHaveBeenCalled();
    });

    it('should be disabled', () => {
        render(<CardSelector {...requiredProps} isDisabled data-testid="card-selector"/>);
        expect(screen.getByTestId('card-selector')).toHaveClass(
            'moonstone-cardSelector_disabled',
        );
    });

    it('should be disabled when isReadOnly', () => {
        render(<CardSelector {...requiredProps} isReadOnly data-testid="card-selector"/>);
        expect(screen.getByTestId('card-selector')).toHaveClass(
            'moonstone-cardSelector_disabled',
        );
    });

    it('should not call onClick when disabled', async () => {
        const user = userEvent.setup();
        const onClick = vi.fn();

        render(
            <CardSelector
                {...requiredProps}
                isDisabled
                data-testid="card-selector"
                onClick={onClick}
            />,
        );
        await user.click(screen.getByTestId('card-selector'));

        expect(onClick).not.toHaveBeenCalled();
    });

    it('should call onClick when hasError', async () => {
        const user = userEvent.setup();
        const onClick = vi.fn();

        render(
            <CardSelector
                {...requiredProps}
                hasError
                data-testid="card-selector"
                errorMessage="error message"
                onClick={onClick}
            />,
        );
        await user.click(screen.getByTestId('card-selector'));

        expect(onClick).toHaveBeenCalled();
    });

    it('should display errorCardSelector if hasError', () => {
        render(<CardSelector {...requiredProps} hasError data-testid="card-selector" errorMessage="error message"/>);
        expect(screen.getByTestId('card-selector')).toHaveClass(
            'moonstone-cardSelector_error',
        );
    });

    it('should be disabled even if hasError', () => {
        render(
            <CardSelector
                {...requiredProps}
                hasError
                isDisabled
                data-testid="card-selector"
                errorMessage="error message"
            />,
        );
        expect(screen.getByTestId('card-selector')).toHaveClass(
            'moonstone-cardSelector_disabled',
        );
    });

    it('should be disabled when isReadOnly even if hasError', () => {
        render(
            <CardSelector
                {...requiredProps}
                hasError
                isReadOnly
                data-testid="card-selector"
                errorMessage="error message"
            />,
        );
        expect(screen.getByTestId('card-selector')).toHaveClass(
            'moonstone-cardSelector_disabled',
        );
    });
});

const renderCard = (props = {}) => {
    const onClick = vi.fn();
    render(
        <>
            <button type="button">before</button>
            <CardSelector
                displayName="Item name"
                id="card"
                systemName="item-name"
                onClick={onClick}
                {...props}
            />
            <button type="button">after</button>
        </>,
    );
    return { onClick };
};

describe('CardSelector keyboard', () => {
    it('reaches the card with Tab', async () => {
        renderCard();
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('button', { name: 'Item name' })).toHaveFocus();
    });

    it('activates the focused card with Enter', async () => {
        const { onClick } = renderCard();
        screen.getByRole('button', { name: 'Item name' }).focus();
        await userEvent.keyboard('{Enter}');
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('activates the focused card with Space', async () => {
        const { onClick } = renderCard();
        screen.getByRole('button', { name: 'Item name' }).focus();
        await userEvent.keyboard(' ');
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it.fails('keeps focus on the card after it is activated with the keyboard', async () => {
        renderCard();
        const card = screen.getByRole('button', { name: 'Item name' });
        card.focus();
        await userEvent.keyboard('{Enter}');
        expect(card).toHaveFocus();
    });

    it('activates the error card with Enter', async () => {
        const { onClick } = renderCard({ hasError: true, errorMessage: 'Broken reference' });
        screen.getByRole('button', { name: 'Broken reference' }).focus();
        await userEvent.keyboard('{Enter}');
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('skips a disabled card in the tab sequence and does not activate it', async () => {
        const { onClick } = renderCard({ isDisabled: true });
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('button', { name: 'after' })).toHaveFocus();
        screen.getByRole('button', { name: 'Item name' }).focus();
        await userEvent.keyboard('{Enter} ');
        expect(onClick).not.toHaveBeenCalled();
    });

    it('skips a read-only card in the tab sequence', async () => {
        renderCard({ isReadOnly: true });
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('button', { name: 'after' })).toHaveFocus();
    });
});
