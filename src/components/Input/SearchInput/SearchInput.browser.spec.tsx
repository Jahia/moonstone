import { render, screen } from '@testing-library/react';
import { userEvent } from '@vitest/browser/context';

import { SearchInput } from './index';

describe('SearchInput keyboard', () => {
    it('reaches the search box with Tab', async () => {
        render(
            <>
                <button type="button">before</button>
                <SearchInput/>
            </>,
        );
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('searchbox')).toHaveFocus();
    });

    it('updates the value and calls onChange when typing', async () => {
        const onChange = vi.fn();
        render(<SearchInput onChange={onChange}/>);
        screen.getByRole('searchbox').focus();
        await userEvent.keyboard('abc');
        expect(screen.getByRole('searchbox')).toHaveValue('abc');
        expect(onChange).toHaveBeenCalledTimes(3);
    });

    it('lets the consumer trigger the search with Enter through onKeyUp', async () => {
        const onKeyUp = vi.fn();
        render(<SearchInput defaultValue="abc" onKeyUp={onKeyUp}/>);
        screen.getByRole('searchbox').focus();
        await userEvent.keyboard('{Enter}');
        expect(onKeyUp).toHaveBeenCalledTimes(1);
        expect(onKeyUp.mock.calls[0][0].key).toBe('Enter');
    });

    it('reaches the clear button with Tab after the search box', async () => {
        render(<SearchInput defaultValue="abc"/>);
        screen.getByRole('searchbox').focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('button', { name: 'Reset' })).toHaveFocus();
    });

    it.fails('clears with Enter on the clear button and returns focus to the search box', async () => {
        render(<SearchInput defaultValue="abc"/>);
        screen.getByRole('button', { name: 'Reset' }).focus();
        await userEvent.keyboard('{Enter}');
        expect(screen.getByRole('searchbox')).toHaveValue('');
        expect(screen.getByRole('searchbox')).toHaveFocus();
    });

    it.fails('clears with Space on the clear button and returns focus to the search box', async () => {
        const onClear = vi.fn();
        render(<SearchInput defaultValue="abc" onClear={onClear}/>);
        screen.getByRole('button', { name: 'Reset' }).focus();
        await userEvent.keyboard(' ');
        expect(onClear).toHaveBeenCalledTimes(1);
        expect(screen.getByRole('searchbox')).toHaveFocus();
    });
});
