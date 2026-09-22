import { render, screen, waitFor, within } from '@testing-library/react';
import { userEvent } from '@vitest/browser/context';

import { TimeInput } from './index';

const findOption = (name: string) => screen.findByRole('list').then(list => within(list).getByRole('option', { name }));

describe('TimeInput keyboard', () => {
    it('reaches the time field with Tab', async () => {
        render(
            <>
                <button type="button">before</button>
                <TimeInput defaultValue="12:30"/>
            </>,
        );
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        await waitFor(() => expect(screen.getByRole('textbox')).toHaveFocus());
    });

    it('steps the hour segment with ArrowUp and ArrowDown', async () => {
        const onChange = vi.fn();
        render(<TimeInput defaultValue="12:30" onChange={onChange}/>);
        screen.getByRole('textbox').focus();
        await userEvent.keyboard('{ArrowLeft}');
        await userEvent.keyboard('{ArrowUp}');
        expect(screen.getByRole('textbox')).toHaveValue('13:30');
        await userEvent.keyboard('{ArrowDown}');
        await userEvent.keyboard('{ArrowDown}');
        expect(screen.getByRole('textbox')).toHaveValue('11:30');
        expect(onChange).toHaveBeenCalledTimes(3);
        expect(onChange.mock.calls[2][1].toString()).toBe('11:30:00');
    });

    it('steps the minute segment with ArrowUp and ArrowDown', async () => {
        render(<TimeInput defaultValue="12:30"/>);
        screen.getByRole('textbox').focus();
        await userEvent.keyboard('{ArrowRight}');
        await userEvent.keyboard('{ArrowUp}');
        expect(screen.getByRole('textbox')).toHaveValue('12:31');
        await userEvent.keyboard('{ArrowDown}');
        await userEvent.keyboard('{ArrowDown}');
        expect(screen.getByRole('textbox')).toHaveValue('12:29');
    });

    it('accepts typed digits and commits the time on Tab', async () => {
        const onChange = vi.fn();
        render(<TimeInput defaultValue={null} onChange={onChange}/>);
        screen.getByRole('textbox').focus();
        await userEvent.keyboard('0930');
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('textbox')).toHaveValue('09:30');
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange.mock.calls[0][1].toString()).toBe('09:30:00');
    });

    it('reaches the AM/PM selector with Tab after the time field in 12h mode', async () => {
        render(<TimeInput defaultValue="23:56" timeFormat="12h"/>);
        screen.getByRole('textbox').focus();
        await userEvent.keyboard('{Tab}');
        await waitFor(() => expect(screen.getByRole('listbox', { name: 'PM' })).toHaveFocus());
    });

    it('opens the AM/PM selector with Enter and selects an option with Enter', async () => {
        const onChange = vi.fn();
        render(<TimeInput defaultValue="23:56" timeFormat="12h" onChange={onChange}/>);
        screen.getByRole('listbox', { name: 'PM' }).focus();
        await userEvent.keyboard('{Enter}');
        (await findOption('AM')).focus();
        await userEvent.keyboard('{Enter}');
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange.mock.calls[0][1].toString()).toBe('11:56:00');
    });

    it.fails('opens the AM/PM selector with ArrowDown', async () => {
        render(<TimeInput defaultValue="23:56" timeFormat="12h"/>);
        screen.getByRole('listbox', { name: 'PM' }).focus();
        await userEvent.keyboard('{ArrowDown}');
        expect(await findOption('AM')).toBeVisible();
    });

    it.fails('closes the AM/PM selector with Escape and returns focus to it', async () => {
        render(<TimeInput defaultValue="23:56" timeFormat="12h"/>);
        screen.getByRole('listbox', { name: 'PM' }).focus();
        await userEvent.keyboard('{Enter}');
        (await findOption('AM')).focus();
        await userEvent.keyboard('{Escape}');
        expect(screen.queryByRole('list')).toBeNull();
        expect(screen.getByRole('listbox', { name: 'PM' })).toHaveFocus();
    });
});
