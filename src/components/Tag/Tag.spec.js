import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Tag} from './Tag';

describe('Tag', () => {
    it('should display additional className', () => {
        render(<Tag data-testid="moonstone-paper" className="extra"/>);
        expect(screen.getByTestId('moonstone-paper')).toHaveClass('extra');
    });

    it('should call the onClick function', async () => {
        const user = userEvent.setup();
        const onClick = jest.fn();

        render(<Tag label="tag" onClick={onClick}/>);
        await user.click(screen.getByText('tag'));

        expect(onClick).toHaveBeenCalled();
    });
});
