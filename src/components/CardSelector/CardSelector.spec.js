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

    it('should display the image when thumbnail is a url', () => {
        render(<CardSelector thumbnail="thumbnail.png"/>);
        expect(screen.getByRole('img', {src: 'thumbnail.png'})).toBeInTheDocument();
    });

    it('should display the icon when thumbnail is an icon name', () => {
        const {container} = render(<CardSelector thumbnail="File"/>);
        expect(container.querySelector('.moonstone-icon')).toBeInTheDocument();
    });

    it('should display handleDrag icon when isDraggable', () => {
        const {container} = render(<CardSelector isDraggable="true"/>);
        expect(container.querySelector('.moonstone-icon_gray')).toBeInTheDocument();
    });

    it('should display chips', () => {
        render(<CardSelector chips={[<Chip key="chip" label="chip"/>]}/>);
        expect(screen.queryByText('chip')).toBeInTheDocument();
    });

    it('should call onClick when clicked', async () => {
        const user = userEvent.setup();
        const onClick = jest.fn();

        render(<CardSelector data-testid="card-selector" onClick={onClick}/>);
        await user.click(screen.getByTestId('card-selector'));

        expect(onClick).toHaveBeenCalled();
    });
});
