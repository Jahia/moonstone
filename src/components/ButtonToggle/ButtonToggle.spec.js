import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {ButtonToggle} from './index';
import {Apps} from '~/icons/index';

describe('ButtonToggle', () => {
    it('should render', () => {
        render(<ButtonToggle label="test me" data-testid="moonstone-button-toggle"/>);
        expect(screen.getByTestId('moonstone-button-toggle')).toBeInTheDocument();
    });

    it('should display additional className', () => {
        render(<ButtonToggle label="test me" data-testid="moonstone-button-toggle" className="test-className"/>);
        expect(screen.getByTestId('moonstone-button-toggle')).toHaveClass('test-className');
    });

    it('should have the specified label', () => {
        render(<ButtonToggle label="test me"/>);
        expect(screen.getByText('test me')).toBeInTheDocument();
    });

    it('should display the iconStart', () => {
        render(<ButtonToggle iconStart={<Apps data-testid="moonstone-button-toggleIcon"/>}/>);
        expect(screen.getByTestId('moonstone-button-toggleIcon')).toBeInTheDocument();
    });

    it('should display the iconEnd', () => {
        render(<ButtonToggle iconEnd={<Apps data-testid="moonstone-button-toggleIconEnd"/>} label="test me"/>);
        expect(screen.getByTestId('moonstone-button-toggleIconEnd')).toBeInTheDocument();
    });

    it('should not display the iconEnd when no label is provided', () => {
        render(<ButtonToggle iconEnd={<Apps data-testid="moonstone-button-toggleIconEnd"/>}/>);
        expect(screen.queryByTestId('moonstone-button-toggleIconEnd')).not.toBeInTheDocument();
    });

    it('should have the specified label when an iconStart is provided', () => {
        render(<ButtonToggle iconStart={<Apps data-testid="moonstone-button-toggleIcon"/>} label="test me"/>);
        expect(screen.getByTestId('moonstone-button-toggleIcon')).toBeInTheDocument();
        expect(screen.getByText('test me')).toBeInTheDocument();
    });

    it('should use default size', () => {
        render(<ButtonToggle data-testid="moonstone-button-toggle" label="test me"/>);
        expect(screen.getByTestId('moonstone-button-toggle')).toHaveClass('moonstone-size_default');
    });

    it('should use size big', () => {
        render(<ButtonToggle data-testid="moonstone-button-toggle" size="big" label="test me"/>);
        expect(screen.getByTestId('moonstone-button-toggle')).toHaveClass('moonstone-size_big');
    });

    it('should use the reverse mode', () => {
        render(<ButtonToggle isReversed data-testid="moonstone-button-toggle" label="test me"/>);
    });

    it('should be disabled', () => {
        render(<ButtonToggle isDisabled data-testid="moonstone-button-toggle" label="test me"/>);
        expect(screen.getByTestId('moonstone-button-toggle')).toBeDisabled();
    });

    it('should display a loader when no icon is provided', () => {
        render(<ButtonToggle isLoading data-testid="moonstone-button-toggle" label="test me"/>);
        expect(screen.getByRole('status')).toBeInTheDocument();
    });

    it('should display loader when an iconStart is provided', () => {
        render(<ButtonToggle isLoading iconStart={<Apps/>} label="test me"/>);
        expect(screen.getByRole('status')).toBeInTheDocument();
    });

    it('should prevent click when the button is loading', async () => {
        const user = userEvent.setup();
        const onClick = jest.fn();

        render(<ButtonToggle isLoading data-testid="moonstone-button-toggle" label="test me" onClick={onClick}/>);
        await user.click(screen.getByTestId('moonstone-button-toggle'));

        expect(onClick).not.toHaveBeenCalled();
    });

    it('should not display iconStart when the button is loading', () => {
        render(<ButtonToggle isLoading iconStart={<Apps data-testid="moonstone-button-toggleIcon"/>} label="test me"/>);
        expect(screen.queryByTestId('moonstone-button-toggleIcon')).not.toBeInTheDocument();
    });

    it('should call onClick function', async () => {
        const user = userEvent.setup();
        const onClick = jest.fn();

        render(<ButtonToggle data-testid="moonstone-button-toggle" label="test me" onClick={onClick}/>);
        await user.click(screen.getByTestId('moonstone-button-toggle'));

        expect(onClick).toHaveBeenCalled();
    });

    it('should display as pressed when clicked', async () => {
        const user = userEvent.setup();
        const onClick = jest.fn();

        render(<ButtonToggle data-testid="moonstone-button-toggle" label="test me" onClick={onClick}/>);
        await user.click(screen.getByTestId('moonstone-button-toggle'));

        expect(screen.getByTestId('moonstone-button-toggle')).toHaveClass('moonstone-button-toggle_pressed');
    });

    it('should display as default when clicked twice', async () => {
        const user = userEvent.setup();
        const onClick = jest.fn();

        render(<ButtonToggle data-testid="moonstone-button-toggle" label="test me" onClick={onClick}/>);
        await user.click(screen.getByTestId('moonstone-button-toggle'));
        await user.click(screen.getByTestId('moonstone-button-toggle'));

        expect(screen.getByTestId('moonstone-button-toggle')).not.toHaveClass('moonstone-button-toggle_pressed');
    });

    it('should call onChange function', async () => {
        const user = userEvent.setup();
        const handleOnChange = jest.fn();

        render(<ButtonToggle data-testid="moonstone-button-toggle" label="test me" onChange={handleOnChange}/>);
        await user.click(screen.getByTestId('moonstone-button-toggle'));

        expect(handleOnChange).toHaveBeenCalled();
    });
});
