import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Chip} from '~/main';

import {CardSelector} from './index';

describe('CardSelector', () => {
    it('should display additional class names', () => {
        render(<CardSelector data-testid="card-selector" className="extra"/>);
        expect(screen.getByTestId('card-selector')).toHaveClass('extra');
    });

    it('should display displayName', () => {
        render(<CardSelector displayName="this displayName"/>);
        expect(screen.queryByText('this displayName')).toBeInTheDocument();
    });

    it('should display systemName', () => {
        render(<CardSelector systemName="this systemName"/>);
        expect(screen.queryByText('(this systemName)')).toBeInTheDocument();
    });

    it('should display information', () => {
        render(<CardSelector information="this information"/>);
        expect(screen.queryByText('this information')).toBeInTheDocument();
    });

    it('should display the image with thumbnailURL', () => {
        render(<CardSelector thumbnailURL="thumbnail.png"/>);
        expect(screen.getByRole('img', {src: 'thumbnail.png'})).toBeInTheDocument();
    });

    it('should display img as icon when thumbnailType is icon', () => {
        const {container} = render(<CardSelector thumbnailType="icon" thumbnailURL="thumbnail.png"/>);
        expect(container.querySelector('.moonstone-cardSelector_thumbnail_icon')).toBeInTheDocument();
    });

    it('should display img as img when thumbnailType is preview', () => {
        const {container} = render(<CardSelector thumbnailType="preview" thumbnailURL="thumbnail.png"/>);
        expect(container.querySelector('.moonstone-cardSelector_thumbnail_preview')).toBeInTheDocument();
    });

    it('should use thumbnailAlt as img alt attribute', () => {
        render(<CardSelector thumbnailAlt="thumbnail-alt" thumbnailURL="thumbnail.png"/>);
        expect(screen.getByRole('img', {alt: 'thumbnail-alt'})).toBeInTheDocument();
    });

    it('should have attribute draggable when isDraggable', () => {
        render(<CardSelector isDraggable data-testid="card-selector"/>);
        expect(screen.getByTestId('card-selector')).toHaveAttribute('draggable', 'true');
    });

    it('should display chips', () => {
        render(<CardSelector chips={[<Chip key="chip" label="chip"/>]}/>);
        expect(screen.queryByText('chip')).toBeInTheDocument();
    });

    it('should display cardActions', () => {
        render(<CardSelector cardAction={<Chip key="chip" label="action"/>}/>);
        expect(screen.queryByText('action')).toBeInTheDocument();
    });

    it('should call onClick when clicked', async () => {
        const user = userEvent.setup();
        const onClick = jest.fn();

        render(<CardSelector data-testid="card-selector" onClick={onClick}/>);
        await user.click(screen.getByTestId('card-selector'));

        expect(onClick).toHaveBeenCalled();
    });

    it('should be disabled', () => {
        render(<CardSelector isDisabled data-testid="card-selector"/>);
        expect(screen.getByTestId('card-selector')).toHaveClass('moonstone-cardSelector_disabled');
    });

    it('should be disabled when isReadOnly', () => {
        render(<CardSelector isReadOnly data-testid="card-selector"/>);
        expect(screen.getByTestId('card-selector')).toHaveClass('moonstone-cardSelector_disabled');
    });

    it('should not call onClick when disabled', async () => {
        const user = userEvent.setup();
        const onClick = jest.fn();

        render(<CardSelector isDisabled data-testid="card-selector" onClick={onClick}/>);
        await user.click(screen.getByTestId('card-selector'));

        expect(onClick).not.toHaveBeenCalled();
    });

    it('should display errorCardSelector if hasError', () => {
        render(<CardSelector hasError data-testid="card-selector"/>);
        expect(screen.getByTestId('card-selector')).toHaveClass('moonstone-cardSelector_error');
    });

    it('should be disabled if hasError', () => {
        render(<CardSelector isDisabled hasError data-testid="card-selector"/>);
        expect(screen.getByTestId('card-selector')).toHaveClass('moonstone-cardSelector_disabled');
    });

    it('should be disabled when isReadOnly if hasError', () => {
        render(<CardSelector isReadOnly hasError data-testid="card-selector"/>);
        expect(screen.getByTestId('card-selector')).toHaveClass('moonstone-cardSelector_disabled');
    });
});
