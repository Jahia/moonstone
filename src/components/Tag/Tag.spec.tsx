import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Tag} from './Tag';

const requiredProps = {
    label: 'label',
    value: 'test',
    onClick: vi.fn()
};

describe('Tag', () => {
    it('should display additional className', () => {
        render(<Tag {...requiredProps} data-testid="moonstone-paper" className="extra"/>);
        expect(screen.getByTestId('moonstone-paper')).toHaveClass('extra');
    });

    it('should call the onClick function', async () => {
        const user = userEvent.setup();
        const onClick = vi.fn();

        render(<Tag {...requiredProps} onClick={onClick}/>);
        await user.click(screen.getByText(requiredProps.label));

        expect(onClick).toHaveBeenCalled();
    });
});
