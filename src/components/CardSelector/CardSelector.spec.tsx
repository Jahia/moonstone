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
