import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Chip} from '~/main';

import {PickerSelectionItem} from './index';

describe('PickerSelectionItem', () => {
    it('should display additional class names', () => {
        render(<PickerSelectionItem className="extra"/>);
        expect(screen.getByRole('listitem')).toHaveClass('extra');
    });

    it('should display title', () => {
        render(<PickerSelectionItem title="this title"/>);
        expect(screen.queryByText('this title')).toBeInTheDocument();
    });

    it('should display subtitle', () => {
        render(<PickerSelectionItem subtitle="this subtitle"/>);
        expect(screen.queryByText('this subtitle')).toBeInTheDocument();
    });

    it('should display description', () => {
        render(<PickerSelectionItem description="this description"/>);
        expect(screen.queryByText('this description')).toBeInTheDocument();
    });

    it('should display the image', () => {
        render(<PickerSelectionItem image="image.png"/>);
        expect(screen.getByRole('img', {src: 'image.png'})).toBeInTheDocument();
    });

    it('should display the icon when no image is set', () => {
        const {container} = render(<PickerSelectionItem/>);
        expect(container.querySelector('.moonstone-icon')).toBeInTheDocument();
    });

    it('should display handleDrag icon when isDraggable', () => {
        const {container} = render(<PickerSelectionItem isDraggable="true"/>);
        expect(container.querySelector('.moonstone-icon_gray')).toBeInTheDocument();
    });

    it('should display chips', () => {
        render(<PickerSelectionItem chips={[<Chip key="chip" label="chip"/>]}/>);
        expect(screen.queryByText('chip')).toBeInTheDocument();
    });

    it('should call onClick when clicked', async () => {
        const user = userEvent.setup();
        const onClick = jest.fn();

        render(<PickerSelectionItem onClick={onClick}/>);
        await user.click(screen.getByRole('listitem'));

        expect(onClick).toHaveBeenCalled();
    });
});
