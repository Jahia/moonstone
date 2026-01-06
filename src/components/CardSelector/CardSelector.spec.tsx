import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Chip} from '~/index';
import {Love} from '~/icons';

import {CardSelector} from './index';

const requiredProps = {
    id: 'card-selector',
    displayName: 'card name'
};

describe('CardSelector', () => {
    it('should display additional class names', () => {
        render(<CardSelector {...requiredProps} data-testid="card-selector" className="extra"/>);
        expect(screen.getByTestId('card-selector')).toHaveClass('extra');
    });

    it('should display displayName', () => {
        render(<CardSelector {...requiredProps}/>);
        expect(screen.queryByText(requiredProps.displayName)).toBeInTheDocument();
    });

    it('should display systemName', () => {
        render(<CardSelector {...requiredProps} systemName="this systemName"/>);
        expect(screen.queryByText('(this systemName)')).toBeInTheDocument();
    });

    it('should display information', () => {
        render(<CardSelector {...requiredProps} information="this information"/>);
        expect(screen.queryByText('this information')).toBeInTheDocument();
    });

    it('should display the image with thumbnail', () => {
        const {container} = render(<CardSelector {...requiredProps} thumbnail="thumbnail.png"/>);
        expect(
            container.querySelector('img[src="thumbnail.png"]')
        ).toBeInTheDocument();
    });

    it('should display the icon passed with thumbnail', () => {
        const {container} = render(
            <CardSelector {...requiredProps} thumbnail={<Love id="thumbnail-icon"/>}/>
        );
        expect(
            container.querySelector('#thumbnail-icon')
        ).toBeInTheDocument();
    });

    it('should display img as icon when thumbnailType is icon', () => {
        const {container} = render(
            <CardSelector {...requiredProps} thumbnailType="icon" thumbnail="thumbnail.png"/>
        );
        expect(
            container.querySelector('.moonstone-thumbnail_icon')
        ).toBeInTheDocument();
    });

    it('should display img as img when thumbnailType is preview', () => {
        const {container} = render(
            <CardSelector
                {...requiredProps}
                thumbnailType="preview"
                thumbnail="thumbnail.png"
            />
        );
        expect(
            container.querySelector('.moonstone-thumbnail_preview')
        ).toBeInTheDocument();
    });

    it('should use thumbnailAlt as img alt attribute', () => {
        render(
            <CardSelector
                {...requiredProps}
                thumbnailAlt="thumbnail-alt"
                thumbnail="thumbnail.png"
            />
        );
        expect(
            screen.getByAltText('thumbnail-alt')
        ).toBeInTheDocument();
    });

    it('should display chips', () => {
        render(<CardSelector {...requiredProps} chips={[<Chip key="chip" label="chip"/>]}/>);
        expect(screen.queryByText('chip')).toBeInTheDocument();
    });

    it('should display cardActions', () => {
        render(
            <CardSelector {...requiredProps} cardAction={<Chip key="chip" label="action"/>}/>
        );
        expect(screen.queryByText('action')).toBeInTheDocument();
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
            'moonstone-cardSelector_disabled'
        );
    });

    it('should be disabled when isReadOnly', () => {
        render(<CardSelector {...requiredProps} isReadOnly data-testid="card-selector"/>);
        expect(screen.getByTestId('card-selector')).toHaveClass(
            'moonstone-cardSelector_disabled'
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
            />
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
                errorMessage="error message"
                data-testid="card-selector"
                onClick={onClick}
            />
        );
        await user.click(screen.getByTestId('card-selector'));

        expect(onClick).toHaveBeenCalled();
    });

    it('should display errorCardSelector if hasError', () => {
        render(<CardSelector {...requiredProps} hasError errorMessage="error message" data-testid="card-selector"/>);
        expect(screen.getByTestId('card-selector')).toHaveClass(
            'moonstone-cardSelector_error'
        );
    });

    it('should be disabled even if hasError', () => {
        render(
            <CardSelector {...requiredProps} isDisabled hasError errorMessage="error message" data-testid="card-selector"/>
        );
        expect(screen.getByTestId('card-selector')).toHaveClass(
            'moonstone-cardSelector_disabled'
        );
    });

    it('should be disabled when isReadOnly even if hasError', () => {
        render(
            <CardSelector {...requiredProps} isReadOnly hasError errorMessage="error message" data-testid="card-selector"/>
        );
        expect(screen.getByTestId('card-selector')).toHaveClass(
            'moonstone-cardSelector_disabled'
        );
    });
});
