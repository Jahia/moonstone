import {render, screen, fireEvent} from '@testing-library/react';
import {ListSelector} from './index';

const requiredProps = {
    label: {
        selected: '0 item selected'
    },
    onChange: () => ({})
};

const options = [
    {label: 'One', value: '1'},
    {label: 'Two', value: '2'},
    {label: 'Three', value: '3'}
];

describe('MultipleLeftRightSelector', () => {
    it('should display empty list', () => {
        const {container} = render(<ListSelector {...requiredProps}/>);
        expect(container.querySelectorAll('li')).toHaveLength(0);
    });

    it('should display options in left list', () => {
        const {container} = render(
            <ListSelector {...requiredProps} options={options}/>
        );
        expect(container.querySelectorAll('li[role="left-list"]')).toHaveLength(
            options.length
        );
    });

    it('should display selection in right list', () => {
        const selection = ['1', '3'];
        const {container} = render(
            <ListSelector
                {...requiredProps}
                options={options}
                values={selection}
            />
        );
        expect(container.querySelectorAll('li[role="left-list"]')).toHaveLength(
            options.length - selection.length
        );
        expect(
            container.querySelectorAll('li[role="right-list"]')
        ).toHaveLength(selection.length);
    });

    it('should display in readonly mode', () => {
        const selection = ['1', '3'];
        const {container} = render(
            <ListSelector
                {...requiredProps}
                isReadOnly
                options={options}
                values={selection}
            />
        );
        expect(container.querySelectorAll('li[role="left-list"]')).toHaveLength(
            options.length - selection.length
        );
        expect(
            container.querySelectorAll('li[role="right-list"]')
        ).toHaveLength(selection.length);

        expect(
            container.querySelector('button[role="add-all"]')
        ).toBeDisabled();
        expect(
            container.querySelector('button[role="remove-all"]')
        ).toBeDisabled();

        container.querySelectorAll('li[role="left-list"]').forEach(el => {
            expect(el.querySelectorAll('svg')).toHaveLength(0);
        });

        container.querySelectorAll('li[role="right-list"]').forEach(el => {
            expect(el.querySelectorAll('svg')).toHaveLength(0);
        });
    });

    it('should display selection in right list', () => {
        const mockOnChange = vi.fn(v => console.log(v));
        const selection = ['1', '3'];
        const {container} = render(
            <ListSelector
                {...requiredProps}
                options={options}
                values={selection}
                onChange={mockOnChange}
            />
        );
        expect(container.querySelectorAll('li[role="left-list"]')).toHaveLength(
            options.length - selection.length
        );
        expect(
            container.querySelectorAll('li[role="right-list"]')
        ).toHaveLength(selection.length);
    });

    it('should pass all items when addAll button clicked', () => {
        const mockOnChange = vi.fn(v => console.log(v));
        const selection = ['1', '3'];
        const {container} = render(
            <ListSelector
                {...requiredProps}
                options={options}
                values={selection}
                onChange={mockOnChange}
            />
        );

        const button = container.querySelector('button[title="Add all"]');

        fireEvent.click(button);

        expect(mockOnChange).toHaveBeenCalledTimes(1);
        expect(mockOnChange.mock.calls[0][0]).toHaveLength(3);
        expect(mockOnChange.mock.calls[0][0]).toContain('3');
    });

    it('should filter items', () => {
        const mockOnChange = vi.fn(v => console.log(v));
        const {container} = render(
            <ListSelector {...requiredProps} options={options} onChange={mockOnChange}/>
        );
        expect(container.querySelectorAll('li[role="left-list"]')).toHaveLength(
            options.length
        );

        const search = container.querySelector('input[role="searchbox"]');

        fireEvent.change(search, {target: {value: 'On'}});

        expect(container.querySelectorAll('li[role="left-list"]')).toHaveLength(
            1
        );
    });

    it('should display label for the list on the right', () => {
        render(
            <ListSelector
                options={options}
                label={{...requiredProps.label, rightListTitle: 'test right'}}
                onChange={requiredProps.onChange}
            />
        );

        expect(screen.getByText('test right')).toBeInTheDocument();
    });

    it('should display label for the list on the left', () => {
        render(
            <ListSelector
                options={options}
                label={{...requiredProps.label, leftListTitle: 'test left'}}
                onChange={requiredProps.onChange}
            />
        );

        expect(screen.getByText('test left')).toBeInTheDocument();
    });
});
