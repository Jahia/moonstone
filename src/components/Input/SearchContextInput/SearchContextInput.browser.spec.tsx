import { render, screen } from '@testing-library/react';
import { userEvent } from 'vitest/browser';

import { SearchContextInput } from './index';
import { Dropdown } from '~/components';

const contexts = [
    { label: 'Global users', value: 'globalUser' },
    { label: 'Media', value: 'media' },
    { label: 'Site', value: 'site' },
];

const renderInput = () => {
    render(
        <>
            <button type="button">before</button>
            <SearchContextInput
                defaultValue="abc"
                searchContext={<Dropdown data={contexts} label="Global users" value="globalUser" onChange={() => undefined}/>}
            />
        </>,
    );
};

const getTrigger = () => screen.getByRole('listbox', { name: 'Global users' });

describe('SearchContextInput keyboard', () => {
    it('reaches the context selector then the search box with Tab', async () => {
        renderInput();
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(getTrigger()).toHaveFocus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('searchbox')).toHaveFocus();
    });

    it('reaches the clear button with Tab after the search box', async () => {
        renderInput();
        screen.getByRole('searchbox').focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('button', { name: 'Reset' })).toHaveFocus();
    });
});
