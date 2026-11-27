import { fireEvent, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ColumnChooser } from './index';

const columns = [
    { key: 'name', label: 'Name', isLocked: true },
    { key: 'date', label: 'Date' },
    { key: 'user', label: 'User' },
    { key: 'path', label: 'Path', isHiddenByDefault: true },
];

const open = async (user: ReturnType<typeof userEvent.setup>) => {
    await user.click(screen.getByRole('button', { name: 'Choose the columns' }));
    return screen.getByRole('dialog', { name: 'Choose the columns' });
};

describe('ColumnChooser', () => {
    it('should display additional attributes on its button, and name itself after them', () => {
        render(<ColumnChooser columns={columns} data-moonstone="Foo" data-sel-role="column-chooser"/>);
        const button = screen.getByRole('button', { name: 'Choose the columns' });
        expect(button).toHaveAttribute('data-sel-role', 'column-chooser');
        expect(button).toHaveAttribute('data-moonstone', 'ColumnChooser');
    });

    it('lists the visible and the hidden columns', async () => {
        const user = userEvent.setup();
        render(<ColumnChooser columns={columns}/>);
        await open(user);

        const visible = screen.getByRole('group', { name: 'Visible columns' });
        const hidden = screen.getByRole('group', { name: 'Hidden columns' });
        expect(within(visible).getAllByRole('checkbox')).toHaveLength(3);
        expect(within(hidden).getByRole('checkbox', { name: 'Path' })).not.toBeChecked();
    });

    it('disables the checkbox of a locked column', async () => {
        const user = userEvent.setup();
        render(<ColumnChooser columns={columns}/>);
        await open(user);
        expect(screen.getByRole('checkbox', { name: 'Name' })).toBeDisabled();
    });

    it('shows a hidden column at the end of the visible columns', async () => {
        const user = userEvent.setup();
        const onChange = vi.fn();
        render(<ColumnChooser columns={columns} onChange={onChange}/>);
        await open(user);

        await user.click(screen.getByRole('checkbox', { name: 'Path' }));
        expect(onChange).toHaveBeenLastCalledWith(['name', 'date', 'user', 'path']);
        expect(screen.getByRole('checkbox', { name: 'Path' })).toBeChecked();
    });

    it('moves a visible column', async () => {
        const user = userEvent.setup();
        const onChange = vi.fn();
        render(<ColumnChooser columns={columns} value={['name', 'date', 'user']} onChange={onChange}/>);
        await open(user);

        await user.click(screen.getByRole('button', { name: 'Move up User' }));
        expect(onChange).toHaveBeenLastCalledWith(['name', 'user', 'date']);
        expect(screen.getByRole('button', { name: 'Move up Name' })).toBeDisabled();
    });

    it('moves a visible column by drag and drop', async () => {
        const user = userEvent.setup();
        const onChange = vi.fn();
        render(<ColumnChooser columns={columns} value={['name', 'date', 'user']} onChange={onChange}/>);
        await open(user);

        const rows = within(screen.getByRole('group', { name: 'Visible columns' })).getAllByRole('listitem');
        // The drag handle is hidden from assistive technologies: the move buttons are the accessible way
        // oxlint-disable-next-line testing-library/no-node-access -- the handle has no role by design
        const handle = rows[2].querySelector('[draggable="true"]');
        const dataTransfer = { setData: vi.fn(), effectAllowed: '' };
        fireEvent.dragStart(handle, { dataTransfer });
        // jsdom lays out nothing and gives the drag no pointer position, so the drop goes before the row
        fireEvent.dragOver(rows[0], { dataTransfer });
        fireEvent.drop(rows[0], { dataTransfer });

        expect(onChange).toHaveBeenLastCalledWith(['user', 'name', 'date']);
    });

    it('moves a visible column down', async () => {
        const user = userEvent.setup();
        const onChange = vi.fn();
        render(<ColumnChooser columns={columns} value={['name', 'date', 'user']} onChange={onChange}/>);
        await open(user);

        await user.click(screen.getByRole('button', { name: 'Move down Name' }));
        expect(onChange).toHaveBeenLastCalledWith(['date', 'name', 'user']);
        expect(screen.getByRole('button', { name: 'Move down User' })).toBeDisabled();
    });

    it('keeps a locked column visible when the value leaves it out', async () => {
        const user = userEvent.setup();
        render(<ColumnChooser columns={[{ key: 'name', label: 'Name', isLocked: true, isHiddenByDefault: true }, { key: 'date', label: 'Date' }]} value={['date']}/>);
        await open(user);

        expect(screen.getByRole('checkbox', { name: 'Name' })).toBeChecked();
        expect(screen.queryByRole('group', { name: 'Hidden columns' })).not.toBeInTheDocument();
    });

    it('keeps its ids apart from a column whose key matches a section', async () => {
        const user = userEvent.setup();
        const onChange = vi.fn();
        render(<ColumnChooser columns={[{ key: 'visible', label: 'Visible' }, { key: 'hidden', label: 'Hidden', isHiddenByDefault: true }]} onChange={onChange}/>);
        await open(user);

        await user.click(screen.getByRole('checkbox', { name: 'Hidden' }));
        expect(onChange).toHaveBeenLastCalledWith(['visible', 'hidden']);
        expect(screen.getByRole('checkbox', { name: 'Hidden' })).toHaveFocus();
    });

    it('resets the columns to their default', async () => {
        const user = userEvent.setup();
        const onChange = vi.fn();
        render(<ColumnChooser columns={columns} value={['date']} onChange={onChange}/>);
        await open(user);

        await user.click(screen.getByRole('button', { name: 'Reset' }));
        expect(onChange).toHaveBeenLastCalledWith(['name', 'date', 'user']);
    });

    it('filters the columns with the search', async () => {
        const user = userEvent.setup();
        render(<ColumnChooser columns={columns}/>);
        await open(user);

        await user.type(screen.getByRole('searchbox', { name: 'Search columns' }), 'pa');
        expect(screen.getAllByRole('checkbox')).toHaveLength(1);
        await user.clear(screen.getByRole('searchbox', { name: 'Search columns' }));
        await user.type(screen.getByRole('searchbox', { name: 'Search columns' }), 'zz');
        expect(screen.getByText('No column matches the search')).toBeInTheDocument();
    });

    it('closes on Escape and gives the focus back to the button', async () => {
        const user = userEvent.setup();
        render(<ColumnChooser columns={columns}/>);
        await open(user);

        await user.keyboard('{Escape}');
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Choose the columns' })).toHaveFocus();
    });
});
