import { render, screen } from '@testing-library/react';
import { userEvent } from '@vitest/browser/context';

import { DynamicFieldset } from './index';
import { Button, Input } from '~/components';
import { MoreVert } from '~/icons';

const renderFieldset = (props = {}) => {
    const onChange = vi.fn();
    const onMore = vi.fn();
    render(
        <>
            <button type="button">before</button>
            <DynamicFieldset
                buttons={<Button aria-label="More" icon={<MoreVert/>} onClick={onMore}/>}
                id="fieldset"
                label="Options"
                onChange={onChange}
                {...props}
            >
                <Input placeholder="Field value"/>
            </DynamicFieldset>
        </>,
    );
    return { onChange, onMore };
};

const getSwitch = () => screen.queryByRole('switch') ?? screen.getByRole('checkbox');

describe('DynamicFieldset keyboard', () => {
    it('reaches the switch with Tab', async () => {
        renderFieldset();
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(getSwitch()).toHaveFocus();
    });

    it.fails('reveals the fields with Space on the switch and calls onChange', async () => {
        const { onChange } = renderFieldset();
        expect(screen.queryByRole('textbox')).toBeNull();
        getSwitch().focus();
        await userEvent.keyboard(' ');
        expect(await screen.findByRole('textbox')).toBeVisible();
        expect(onChange).toHaveBeenCalledTimes(1);
    });

    it.fails('hides the fields with Space on the switch and keeps focus on the switch', async () => {
        renderFieldset({ defaultChecked: true });
        getSwitch().focus();
        await userEvent.keyboard(' ');
        expect(screen.queryByRole('textbox')).toBeNull();
        expect(getSwitch()).toHaveFocus();
    });

    it('reaches the action button then the revealed fields with Tab after the switch', async () => {
        renderFieldset({ defaultChecked: true });
        getSwitch().focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('button', { name: 'More' })).toHaveFocus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('textbox')).toHaveFocus();
    });

    it('activates the action button with Enter', async () => {
        const { onMore } = renderFieldset();
        screen.getByRole('button', { name: 'More' }).focus();
        await userEvent.keyboard('{Enter}');
        expect(onMore).toHaveBeenCalledTimes(1);
    });

    it('activates the action button with Space', async () => {
        const { onMore } = renderFieldset();
        screen.getByRole('button', { name: 'More' }).focus();
        await userEvent.keyboard(' ');
        expect(onMore).toHaveBeenCalledTimes(1);
    });
});
