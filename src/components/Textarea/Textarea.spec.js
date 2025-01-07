import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Textarea} from './index';

describe('Textarea', () => {
    it('should render', () => {
        render(<Textarea data-testid="moonstone-textarea"/>);
        expect(screen.getByTestId('moonstone-textarea')).toBeInTheDocument();
    });

    it('should display additional className', () => {
        const {container} = render(<Textarea className="test-class"/>);
        expect(container.querySelector('.test-class')).toBeInTheDocument();
    });

    it('should display additional attributes', () => {
        const {container} = render(<Textarea data-test="test"/>);
        expect(container.querySelector('[data-test="test"]')).toBeInTheDocument();
    });

    it('should have specified id', () => {
        const {container} = render(<Textarea id="test-id"/>);
        expect(container.querySelector('#test-id')).toBeInTheDocument();
    });

    it('should have specified placeholder', () => {
        render(<Textarea placeholder="test-placeholder"/>);
        expect(screen.getByPlaceholderText('test-placeholder')).toBeInTheDocument();
    });

    it('should be disabled', () => {
        render(<Textarea isDisabled data-testid="moonstone-textarea"/>);
        expect(screen.getByTestId('moonstone-textarea')).toBeDisabled();
    });

    it('should be read only', () => {
        render(<Textarea isReadOnly data-testid="moonstone-textarea"/>);
        expect(screen.getByTestId('moonstone-textarea')).toHaveAttribute('readonly');
    });

    it('should work when no value or defaultValue is specified', async () => {
        const user = userEvent.setup();

        render(<Textarea data-testid="moonstone-textarea"/>);
        await user.type(screen.getByTestId('moonstone-textarea'), 'type a value');

        expect(screen.getByDisplayValue('type a value')).toBeInTheDocument();
    });
});

describe('UncontrolledTextarea', () => {
    it('should have specified defaultValue', () => {
        render(<Textarea defaultValue="test-default-value"/>);
        expect(screen.getByDisplayValue('test-default-value')).toBeInTheDocument();
    });

    it('should not update when value is specified', async () => {
        const user = userEvent.setup();
        render(<Textarea data-testid="moonstone-textarea" value="test-value"/>);
        await user.type(screen.getByTestId('moonstone-textarea'), '-updated');
        expect(screen.queryByDisplayValue('test-value-updated')).not.toBeInTheDocument();
    });

    it('should update specified defaultValue', async () => {
        const user = userEvent.setup();
        render(<Textarea data-testid="moonstone-textarea" defaultValue="test-default-value"/>);
        await user.type(screen.getByTestId('moonstone-textarea'), '-updated');
        expect(screen.getByDisplayValue('test-default-value-updated')).toBeInTheDocument();
    });

    it('should call specified onChange function', async () => {
        const user = userEvent.setup();
        const handleChange = jest.fn();

        render(<Textarea data-testid="moonstone-textarea" defaultValue="test-default-value" onChange={handleChange}/>);
        await user.type(screen.getByTestId('moonstone-textarea'), '1');

        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    describe('ControlledTextarea', () => {
        it('should display specified value', () => {
            render(<Textarea value="test-value" onChange={() => null}/>);
            expect(screen.getByDisplayValue('test-value')).toBeInTheDocument();
        });

        it('should call specified onChange function', async () => {
            const user = userEvent.setup();
            const handleChange = jest.fn();

            render(<Textarea data-testid="moonstone-textarea" value="test-value" onChange={handleChange}/>);
            await user.type(screen.getByTestId('moonstone-textarea'), '1');

            expect(handleChange).toHaveBeenCalledTimes(1);
        });
    });
});
