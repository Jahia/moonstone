import { render, screen } from '@testing-library/react';
import { userEvent } from 'vitest/browser';

import { Switch } from './index';

const getSwitch = () => screen.getByRole('switch');

describe('Switch keyboard', () => {
    it('reaches the switch with Tab', async () => {
        render(
            <>
                <button type="button">before</button>
                <Switch value="a"/>
            </>,
        );
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(getSwitch()).toHaveFocus();
    });

    it('turns on with Space and calls onChange once', async () => {
        const onChange = vi.fn();
        render(<Switch value="a" onChange={onChange}/>);
        getSwitch().focus();
        await userEvent.keyboard(' ');
        expect(getSwitch()).toBeChecked();
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith(expect.anything(), 'a', true);
    });

    it('turns off with Space when on', async () => {
        const onChange = vi.fn();
        render(<Switch defaultChecked value="a" onChange={onChange}/>);
        getSwitch().focus();
        await userEvent.keyboard(' ');
        expect(getSwitch()).not.toBeChecked();
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith(expect.anything(), 'a', false);
    });

    it('does not toggle with Enter, as a native checkbox', async () => {
        const onChange = vi.fn();
        render(<Switch value="a" onChange={onChange}/>);
        getSwitch().focus();
        await userEvent.keyboard('{Enter}');
        expect(getSwitch()).not.toBeChecked();
        expect(onChange).not.toHaveBeenCalled();
    });

    it('exposes its state through the native checked state', async () => {
        render(<Switch value="a"/>);
        expect(getSwitch()).not.toBeChecked();
        getSwitch().focus();
        await userEvent.keyboard(' ');
        expect(getSwitch()).toBeChecked();
    });

    it('skips a disabled switch in the tab sequence', async () => {
        render(
            <>
                <button type="button">before</button>
                <Switch isDisabled value="a"/>
                <button type="button">after</button>
            </>,
        );
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(screen.getByRole('button', { name: 'after' })).toHaveFocus();
    });
});
