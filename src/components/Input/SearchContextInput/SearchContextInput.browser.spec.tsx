import { render, screen, within } from '@testing-library/react';
import { userEvent } from '@vitest/browser/context';

import { SearchContextInput } from './index';
import { Dropdown } from '~/components';

const contexts = [
    { label: 'Global users', value: 'globalUser' },
    { label: 'Media', value: 'media' },
    { label: 'Site', value: 'site' },
];

const renderInput = () => {
    const onContextChange = vi.fn();
    render(
        <>
            <button type="button">before</button>
            <SearchContextInput
                defaultValue="abc"
                searchContext={<Dropdown data={contexts} label="Global users" value="globalUser" onChange={onContextChange}/>}
            />
        </>,
    );
    return { onContextChange };
};

const getTrigger = () => screen.getByRole('listbox', { name: 'Global users' });
const findOption = (name: string) => screen.findByRole('list').then(list => within(list).getByRole('option', { name }));

describe('SearchContextInput keyboard', () => {
    it('reaches the context selector then the search box with Tab', async () => {
        renderInput();
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(getTrigger()).toHaveFocus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('searchbox')).toHaveFocus();
    });

    it('opens the context menu with Enter', async () => {
        renderInput();
        getTrigger().focus();
        await userEvent.keyboard('{Enter}');
        expect(await findOption('Media')).toBeVisible();
    });

    it.fails('opens the context menu with Space', async () => {
        renderInput();
        getTrigger().focus();
        await userEvent.keyboard(' ');
        expect(await findOption('Media')).toBeVisible();
    });

    it.fails('opens the context menu with ArrowDown', async () => {
        renderInput();
        getTrigger().focus();
        await userEvent.keyboard('{ArrowDown}');
        expect(await findOption('Media')).toBeVisible();
    });

    it.fails('moves focus to the selected option when the menu opens', async () => {
        renderInput();
        getTrigger().focus();
        await userEvent.keyboard('{Enter}');
        expect(await findOption('Global users')).toHaveFocus();
    });

    it('moves focus between options with ArrowDown and ArrowUp', async () => {
        renderInput();
        getTrigger().focus();
        await userEvent.keyboard('{Enter}');
        (await findOption('Media')).focus();
        await userEvent.keyboard('{ArrowDown}');
        expect(await findOption('Site')).toHaveFocus();
        await userEvent.keyboard('{ArrowUp}');
        expect(await findOption('Media')).toHaveFocus();
    });

    it('selects the focused option with Enter and closes the menu', async () => {
        const { onContextChange } = renderInput();
        getTrigger().focus();
        await userEvent.keyboard('{Enter}');
        (await findOption('Media')).focus();
        await userEvent.keyboard('{Enter}');
        expect(onContextChange).toHaveBeenCalledTimes(1);
        expect(onContextChange.mock.calls[0][1].value).toBe('media');
        expect(screen.queryByRole('list')).toBeNull();
    });

    it.fails('closes the menu with Escape and returns focus to the context selector', async () => {
        renderInput();
        getTrigger().focus();
        await userEvent.keyboard('{Enter}');
        (await findOption('Media')).focus();
        await userEvent.keyboard('{Escape}');
        expect(screen.queryByRole('list')).toBeNull();
        expect(getTrigger()).toHaveFocus();
    });

    it('reaches the clear button with Tab after the search box', async () => {
        renderInput();
        screen.getByRole('searchbox').focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('button', { name: 'Reset' })).toHaveFocus();
    });
});
