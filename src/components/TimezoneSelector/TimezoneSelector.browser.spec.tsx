import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from 'vitest/browser';

import { TimezoneSelector } from './index';

const renderSelector = () => {
    const onChange = vi.fn();
    render(
        <>
            <button type="button">before</button>
            <TimezoneSelector placeholder="Timezone" referenceDate="2026-01-15" onChange={onChange}/>
        </>,
    );
    return { onChange, trigger: screen.getByRole('listbox') };
};

const getOption = (label: RegExp) => screen.getByRole('option', { name: label });

const openWithEnter = async (trigger: HTMLElement) => {
    trigger.focus();
    await userEvent.keyboard('{Enter}');
    await screen.findByRole('list');
};

const openAndSearch = async (trigger: HTMLElement) => {
    await openWithEnter(trigger);
    await userEvent.keyboard('Sant');
    await screen.findByText(/^Santarem/);
};

describe('TimezoneSelector keyboard', () => {
    it('should reach the trigger with Tab', async () => {
        const { trigger } = renderSelector();
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(trigger).toHaveFocus();
    });

    it('should open with Enter and focus the search input', async () => {
        const { trigger } = renderSelector();
        trigger.focus();
        await userEvent.keyboard('{Enter}');
        await screen.findByRole('list');
        expect(screen.getByRole('searchbox')).toHaveFocus();
    });

    it.fails('should open with Space', async () => {
        const { trigger } = renderSelector();
        trigger.focus();
        await userEvent.keyboard(' ');
        expect(await screen.findByRole('list')).toBeInTheDocument();
    });

    it.fails('should open with ArrowDown', async () => {
        const { trigger } = renderSelector();
        trigger.focus();
        await userEvent.keyboard('{ArrowDown}');
        expect(await screen.findByRole('list')).toBeInTheDocument();
    });

    it('should filter the options when typing', async () => {
        const { trigger } = renderSelector();
        await openAndSearch(trigger);
        expect(getOption(/^Santiago/)).toBeInTheDocument();
        expect(screen.queryByText(/^Paris/)).not.toBeInTheDocument();
    });

    it.fails('should move focus to the first option with ArrowDown from the search input', async () => {
        const { trigger } = renderSelector();
        await openAndSearch(trigger);
        await userEvent.keyboard('{ArrowDown}');
        expect(getOption(/^Santarem/)).toHaveFocus();
    });

    it('should move focus between options with ArrowDown and ArrowUp', async () => {
        const { trigger } = renderSelector();
        await openAndSearch(trigger);
        getOption(/^Santarem/).focus();
        await userEvent.keyboard('{ArrowDown}');
        expect(getOption(/^Santiago/)).toHaveFocus();
        await userEvent.keyboard('{ArrowUp}');
        expect(getOption(/^Santarem/)).toHaveFocus();
    });

    it('should select the focused option with Enter and close', async () => {
        const { trigger, onChange } = renderSelector();
        await openAndSearch(trigger);
        getOption(/^Santiago/).focus();
        await userEvent.keyboard('{Enter}');
        expect(onChange).toHaveBeenCalledWith(expect.anything(), 'America/Santiago');
        await waitFor(() => expect(screen.queryByRole('list')).not.toBeInTheDocument());
    });

    it('should close with Escape and return focus to the trigger', async () => {
        const { trigger } = renderSelector();
        await openAndSearch(trigger);
        await userEvent.keyboard('{Escape}');
        await waitFor(() => expect(screen.queryByRole('list')).not.toBeInTheDocument());
        expect(trigger).toHaveFocus();
    });
});
