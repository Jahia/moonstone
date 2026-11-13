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

    it('turns on with Enter and calls onChange once', async () => {
        const onChange = vi.fn();
        render(<Switch value="a" onChange={onChange}/>);
        getSwitch().focus();
        await userEvent.keyboard('{Enter}');
        expect(getSwitch()).toBeChecked();
        expect(onChange).toHaveBeenCalledTimes(1);
    });

    it('exposes its state through the native checked state', async () => {
        render(<Switch value="a"/>);
        expect(getSwitch()).not.toBeChecked();
        getSwitch().focus();
        await userEvent.keyboard(' ');
        expect(getSwitch()).toBeChecked();
    });

    it('toggles once when Enter is held', async () => {
        const onChange = vi.fn();
        render(<Switch value="a" onChange={onChange}/>);
        getSwitch().focus();
        await userEvent.keyboard('{Enter>3/}');
        expect(onChange).toHaveBeenCalledTimes(1);
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

describe('Switch pointer', () => {
    it('turns on with a click 1px inside the 24px target around its track', async () => {
        render(<div style={{ padding: 8 }}><Switch aria-label="Notifications" value="a"/></div>);
        const { height } = getSwitch().getBoundingClientRect();
        await userEvent.click(getSwitch(), { position: { x: 1, y: ((height - 24) / 2) + 1 }, force: true });
        expect(getSwitch()).toBeChecked();
    });
});
