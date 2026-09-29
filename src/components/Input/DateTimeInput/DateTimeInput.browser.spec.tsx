import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@vitest/browser/context';
import { vi } from 'vitest';

import { DateTimeInput } from './index';

const renderInput = () => {
    const onChange = vi.fn();
    render(
        <>
            <DateTimeInput defaultValue="2026-03-30" locale="en" type="date" onChange={onChange}/>
            <button type="button">after</button>
        </>,
    );
    return { onChange };
};

const getField = () => screen.getByRole('textbox');
const getDay = (name: string) => screen.getByRole('button', { name: new RegExp(`^${name}`) });

describe('DateTimeInput keyboard', () => {
    it('reaches the date field with Tab', async () => {
        render(
            <>
                <button type="button">before</button>
                <DateTimeInput defaultValue="2026-03-30" locale="en" type="date"/>
            </>,
        );
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        await waitFor(() => expect(getField()).toHaveFocus());
    });

    it('opens the calendar with Enter', async () => {
        renderInput();
        getField().focus();
        await userEvent.keyboard('{Enter}');
        expect(await screen.findByRole('grid', { name: 'March 2026' })).toBeVisible();
    });

    it('opens the calendar with Space', async () => {
        renderInput();
        getField().focus();
        await userEvent.keyboard(' ');
        expect(await screen.findByRole('grid', { name: 'March 2026' })).toBeVisible();
    });

    it.fails('moves focus to the selected day when the calendar opens', async () => {
        renderInput();
        getField().focus();
        await userEvent.keyboard('{Enter}');
        await screen.findByRole('grid', { name: 'March 2026' });
        expect(getDay('Monday, March 30th, 2026')).toHaveFocus();
    });

    it('closes the calendar with Escape and keeps focus on the date field', async () => {
        renderInput();
        getField().focus();
        await userEvent.keyboard('{Enter}');
        await screen.findByRole('grid', { name: 'March 2026' });
        await userEvent.keyboard('{Escape}');
        expect(screen.queryByRole('grid')).toBeNull();
        expect(getField()).toHaveFocus();
    });

    it.fails('closes the calendar with Escape from a day and returns focus to the date field', async () => {
        renderInput();
        getField().focus();
        await userEvent.keyboard('{Enter}');
        await screen.findByRole('grid', { name: 'March 2026' });
        getDay('Monday, March 30th, 2026').focus();
        await userEvent.keyboard('{Escape}');
        expect(screen.queryByRole('grid')).toBeNull();
        expect(getField()).toHaveFocus();
    });

    it('moves between days with ArrowRight and ArrowLeft', async () => {
        renderInput();
        getField().focus();
        await userEvent.keyboard('{Enter}');
        await screen.findByRole('grid', { name: 'March 2026' });
        getDay('Monday, March 30th, 2026').focus();
        await userEvent.keyboard('{ArrowRight}');
        await waitFor(() => expect(getDay('Tuesday, March 31st, 2026')).toHaveFocus());
        await userEvent.keyboard('{ArrowLeft}');
        await userEvent.keyboard('{ArrowLeft}');
        await waitFor(() => expect(getDay('Sunday, March 29th, 2026')).toHaveFocus());
    });

    it('moves between weeks with ArrowDown and ArrowUp', async () => {
        renderInput();
        getField().focus();
        await userEvent.keyboard('{Enter}');
        await screen.findByRole('grid', { name: 'March 2026' });
        getDay('Monday, March 30th, 2026').focus();
        await userEvent.keyboard('{ArrowUp}');
        await waitFor(() => expect(getDay('Monday, March 23rd, 2026')).toHaveFocus());
        await userEvent.keyboard('{ArrowDown}');
        await userEvent.keyboard('{ArrowDown}');
        await waitFor(async () => expect(await screen.findByRole('button', { name: /^Monday, April 6th, 2026/ })).toHaveFocus());
    });

    it('selects the focused day with Enter and closes the calendar', async () => {
        const { onChange } = renderInput();
        getField().focus();
        await userEvent.keyboard('{Enter}');
        await screen.findByRole('grid', { name: 'March 2026' });
        getDay('Monday, March 30th, 2026').focus();
        await userEvent.keyboard('{ArrowRight}');
        await userEvent.keyboard('{Enter}');
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange.mock.calls[0][1].toString()).toBe('2026-03-31');
        expect(screen.queryByRole('grid')).toBeNull();
    });

    it.fails('returns focus to the date field after selecting a day with Enter', async () => {
        renderInput();
        getField().focus();
        await userEvent.keyboard('{Enter}');
        await screen.findByRole('grid', { name: 'March 2026' });
        getDay('Monday, March 30th, 2026').focus();
        await userEvent.keyboard('{ArrowRight}');
        await userEvent.keyboard('{Enter}');
        expect(screen.queryByRole('grid')).toBeNull();
        expect(getField()).toHaveFocus();
    });

    it('does not trap focus with Tab while the calendar is open', async () => {
        renderInput();
        getField().focus();
        await userEvent.keyboard('{Enter}');
        await screen.findByRole('grid', { name: 'March 2026' });
        await userEvent.keyboard('{Tab}');
        await userEvent.keyboard('{Tab}');
        await waitFor(() => expect(screen.getByRole('button', { name: 'after' })).toHaveFocus());
    });
});
