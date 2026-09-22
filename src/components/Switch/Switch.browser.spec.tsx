import { render, screen } from '@testing-library/react';
import { userEvent } from '@vitest/browser/context';

import { Switch } from './index';

const getSwitch = () => screen.queryByRole('switch') ?? screen.getByRole('checkbox');

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

    it('turns on with Enter and calls onChange once', async () => {
        const onChange = vi.fn();
        render(<Switch value="a" onChange={onChange}/>);
        getSwitch().focus();
        await userEvent.keyboard('{Enter}');
        expect(getSwitch()).toBeChecked();
        expect(onChange).toHaveBeenCalledTimes(1);
    });

    it('exposes its state through aria-checked', async () => {
        render(<Switch value="a"/>);
        expect(getSwitch()).toHaveAttribute('aria-checked', 'false');
        getSwitch().focus();
        await userEvent.keyboard(' ');
        expect(getSwitch()).toHaveAttribute('aria-checked', 'true');
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
