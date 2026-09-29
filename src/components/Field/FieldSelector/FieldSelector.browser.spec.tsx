import { render, screen, within } from '@testing-library/react';
import { userEvent } from '@vitest/browser/context';

import { FieldSelector } from './index';
import { Button } from '~/components';
import { Dropdown } from '~/components/Dropdown';
import { Close, MoreVert } from '~/icons';

const options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
];

const renderField = () => {
    const onRemove = vi.fn();
    render(
        <>
            <button type="button">before</button>
            <FieldSelector
                buttons={(
                    <>
                        <Button aria-label="More" icon={<MoreVert/>}/>
                        <Button aria-label="Remove" icon={<Close/>} onClick={onRemove}/>
                    </>
                )}
                selector={<Dropdown data={options} placeholder="Choose" value="" onChange={() => undefined}/>}
            />
        </>,
    );
    return { onRemove };
};

const getSelector = () => screen.getByRole('listbox', { name: 'Choose' });
const findOption = (name: string) => screen.findByRole('list').then(list => within(list).getByRole('option', { name }));

describe('FieldSelector keyboard', () => {
    it('reaches the selector control with Tab', async () => {
        renderField();
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(getSelector()).toHaveFocus();
    });

    it('opens the selector with Enter', async () => {
        renderField();
        getSelector().focus();
        await userEvent.keyboard('{Enter}');
        expect(await findOption('Option 2')).toBeVisible();
    });

    it.fails('opens the selector with Space', async () => {
        renderField();
        getSelector().focus();
        await userEvent.keyboard(' ');
        expect(await findOption('Option 2')).toBeVisible();
    });

    it.fails('opens the selector with ArrowDown', async () => {
        renderField();
        getSelector().focus();
        await userEvent.keyboard('{ArrowDown}');
        expect(await findOption('Option 2')).toBeVisible();
    });

    it('reaches the action buttons with Tab after the selector', async () => {
        renderField();
        getSelector().focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('button', { name: 'More' })).toHaveFocus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('button', { name: 'Remove' })).toHaveFocus();
    });

    it('activates an action button with Enter', async () => {
        const { onRemove } = renderField();
        screen.getByRole('button', { name: 'Remove' }).focus();
        await userEvent.keyboard('{Enter}');
        expect(onRemove).toHaveBeenCalledTimes(1);
    });

    it('activates an action button with Space', async () => {
        const { onRemove } = renderField();
        screen.getByRole('button', { name: 'Remove' }).focus();
        await userEvent.keyboard(' ');
        expect(onRemove).toHaveBeenCalledTimes(1);
    });
});
