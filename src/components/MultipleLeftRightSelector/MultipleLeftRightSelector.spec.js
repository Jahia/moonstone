import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {MultipleLeftRightSelector} from './index';

describe('MultipleLeftRightSelector', () => {
    const options = [{label: 'One', value: '1'}, {label: 'Two', value: '2'}, {label: 'Three', value: '3'}];

    it('should display empty list', () => {
        const {container} = render(<MultipleLeftRightSelector onChange={() => ({})}/>);
        expect(container.querySelectorAll('li')).toHaveLength(0);
    });

    it('should display options in left list', () => {
        const {container} = render(<MultipleLeftRightSelector options={options} onChange={() => ({})}/>);
        expect(container.querySelectorAll('li[role="left-list"]')).toHaveLength(options.length);
    });

    it('should display selection in right list', () => {
        const selection = ['1', '3'];
        const {container} = render(<MultipleLeftRightSelector options={options} arrayValue={selection} onChange={() => ({})}/>);
        expect(container.querySelectorAll('li[role="left-list"]')).toHaveLength(options.length - selection.length);
        expect(container.querySelectorAll('li[role="right-list"]')).toHaveLength(selection.length);
    });

    it('should display in readonly mode', () => {
        const selection = ['1', '3'];
        const {container} = render(<MultipleLeftRightSelector readOnly options={options} arrayValue={selection} onChange={() => ({})}/>);
        expect(container.querySelectorAll('li[role="left-list"]')).toHaveLength(options.length - selection.length);
        expect(container.querySelectorAll('li[role="right-list"]')).toHaveLength(selection.length);

        expect(container.querySelector('button[role="add-all"]')).toBeDisabled();
        expect(container.querySelector('button[role="remove-all"]')).toBeDisabled();

        container.querySelectorAll('li[role="left-list"]').forEach(el => {
            expect(el.querySelectorAll('svg')).toHaveLength(0);
        });

        container.querySelectorAll('li[role="right-list"]').forEach(el => {
            expect(el.querySelectorAll('svg')).toHaveLength(0);
        });
    });

    it('should display selection in right list', () => {
        const mockOnChange = jest.fn(v => console.log(v));
        const selection = ['1', '3'];
        const {container} = render(<MultipleLeftRightSelector options={options} arrayValue={selection} onChange={mockOnChange}/>);
        expect(container.querySelectorAll('li[role="left-list"]')).toHaveLength(options.length - selection.length);
        expect(container.querySelectorAll('li[role="right-list"]')).toHaveLength(selection.length);
    });

    it('should pass all items when addAll button clicked', () => {
        const mockOnChange = jest.fn(v => console.log(v));
        const selection = ['1', '3'];
        const {container} = render(<MultipleLeftRightSelector options={options} arrayValue={selection} onChange={mockOnChange}/>);

        const button = container.querySelector('button[title="Add all"]');

        fireEvent.click(button);

        expect(mockOnChange).toHaveBeenCalledTimes(1);
        expect(mockOnChange.mock.calls[0][0]).toHaveLength(3);
        expect(mockOnChange.mock.calls[0][0]).toContain('3');
    });

    it('should filter items', () => {
        const mockOnChange = jest.fn(v => console.log(v));
        const {container} = render(<MultipleLeftRightSelector options={options} onChange={mockOnChange}/>);
        expect(container.querySelectorAll('li[role="left-list"]')).toHaveLength(options.length);

        const search = container.querySelector('input[role="search"]');

        fireEvent.change(search, {target: {value: 'On'}});

        expect(container.querySelectorAll('li[role="left-list"]')).toHaveLength(1);
    });
});
