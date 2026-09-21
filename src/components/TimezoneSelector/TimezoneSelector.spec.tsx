import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TimezoneSelector } from './index';

// `baseDate` is this spec's reference date — a winter day, so UTC offsets are deterministic
// (Paris reads +01:00) and we can assert plain, consumer-visible labels. The DST test below
// also checks a summer date.
const baseDate = '2026-01-15';

describe('TimezoneSelector', () => {
    it('should render the placeholder when no timezone is selected', () => {
        render(<TimezoneSelector placeholder="Select timezone"/>);

        expect(screen.getByRole('listbox', { name: 'Select timezone' })).toBeInTheDocument();
    });

    it('should render the selected timezone as city and utc offset', () => {
        render(<TimezoneSelector referenceDate={baseDate} value="Europe/Paris" onChange={() => undefined}/>);

        expect(screen.getByRole('listbox', { name: 'Paris (UTC +01:00)' })).toBeInTheDocument();
    });

    it('should compute the offset for the given reference date (DST-aware)', () => {
        const { rerender } = render(<TimezoneSelector referenceDate={baseDate} value="Europe/Paris" onChange={() => undefined}/>);
        expect(screen.getByRole('listbox', { name: 'Paris (UTC +01:00)' })).toBeInTheDocument();

        // A summer date flips Paris to +02:00 — the contrast case, kept inline.
        rerender(<TimezoneSelector referenceDate="2026-07-15" value="Europe/Paris" onChange={() => undefined}/>);
        expect(screen.getByRole('listbox', { name: 'Paris (UTC +02:00)' })).toBeInTheDocument();
    });

    it('should render UTC correctly when it is the selected value', () => {
        render(<TimezoneSelector referenceDate={baseDate} value="UTC" onChange={() => undefined}/>);

        expect(screen.getByRole('listbox', { name: 'UTC (UTC +00:00)' })).toBeInTheDocument();
    });

    it('should render the grouped catalog without a UTC shortcut group', async () => {
        const user = userEvent.setup();

        render(<TimezoneSelector placeholder="Select timezone" referenceDate={baseDate}/>);

        await user.click(screen.getByRole('listbox', { name: 'Select timezone' }));

        expect(screen.queryByText('UTC')).not.toBeInTheDocument();
        expect(screen.getByText('Europe')).toBeInTheDocument();
        expect(screen.getByText('America')).toBeInTheDocument();
        expect(screen.getByText('Paris (UTC +01:00)')).toBeInTheDocument();
    });

    it('should not open when isReadOnly (rendered as disabled)', async () => {
        const user = userEvent.setup();

        render(<TimezoneSelector isReadOnly placeholder="Select timezone" referenceDate={baseDate}/>);

        await user.click(screen.getByRole('listbox', { name: 'Select timezone' }));

        expect(screen.queryByRole('searchbox')).not.toBeInTheDocument();
    });

    it('should search across the full timezone universe and call onChange with the IANA id', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(<TimezoneSelector placeholder="Select timezone" referenceDate={baseDate} onChange={handleChange}/>);

        await user.click(screen.getByRole('listbox', { name: 'Select timezone' }));
        await user.type(screen.getByRole('searchbox'), 'honolulu');
        await user.click(screen.getByText('Honolulu (UTC -10:00)'));

        expect(handleChange).toHaveBeenLastCalledWith(expect.any(Object), 'Pacific/Honolulu');
    });

    it('should update the selected timezone internally in uncontrolled mode', async () => {
        const user = userEvent.setup();

        render(<TimezoneSelector defaultValue="Europe/Paris" referenceDate={baseDate}/>);

        await user.click(screen.getByRole('listbox', { name: 'Paris (UTC +01:00)' }));
        await user.type(screen.getByRole('searchbox'), 'honolulu');
        await user.click(screen.getByText('Honolulu (UTC -10:00)'));

        expect(screen.getByRole('listbox', { name: 'Honolulu (UTC -10:00)' })).toBeInTheDocument();
    });

    it('should keep the controlled value until the parent updates it', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(<TimezoneSelector referenceDate={baseDate} value="Europe/Paris" onChange={handleChange}/>);

        await user.click(screen.getByRole('listbox', { name: 'Paris (UTC +01:00)' }));
        await user.type(screen.getByRole('searchbox'), 'honolulu');
        await user.click(screen.getByText('Honolulu (UTC -10:00)'));

        expect(handleChange).toHaveBeenLastCalledWith(expect.any(Object), 'Pacific/Honolulu');
        expect(screen.getByRole('listbox', { name: 'Paris (UTC +01:00)' })).toBeInTheDocument();
        expect(screen.queryByRole('listbox', { name: 'Honolulu (UTC -10:00)' })).not.toBeInTheDocument();
    });

    it('should support canonical timezones with three segments', async () => {
        const user = userEvent.setup();

        render(<TimezoneSelector referenceDate={baseDate} value="America/Argentina/Buenos_Aires" onChange={() => undefined}/>);

        const selected = screen.getByRole('listbox', { name: 'Buenos Aires (UTC -03:00)' });
        expect(selected).toBeInTheDocument();

        await user.click(selected);
        await user.type(screen.getByRole('searchbox'), 'Buenos');

        expect(screen.getAllByRole('option', { name: 'Buenos Aires (UTC -03:00)' }).length).toBeGreaterThan(0);
    });
});

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

const getOption = (label: RegExp) => screen.getByText(label).closest('li');

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
    it('reaches the trigger with Tab', async () => {
        const { trigger } = renderSelector();
        screen.getByRole('button', { name: 'before' }).focus();
        await userEvent.keyboard('{Tab}');
        expect(trigger).toHaveFocus();
    });

    it('opens with Enter and focuses the search input', async () => {
        const { trigger } = renderSelector();
        trigger.focus();
        await userEvent.keyboard('{Enter}');
        await screen.findByRole('list');
        expect(screen.getByRole('searchbox')).toHaveFocus();
    });

    it.fails('opens with Space', async () => {
        const { trigger } = renderSelector();
        trigger.focus();
        await userEvent.keyboard(' ');
        expect(await screen.findByRole('list')).toBeInTheDocument();
    });

    it.fails('opens with ArrowDown', async () => {
        const { trigger } = renderSelector();
        trigger.focus();
        await userEvent.keyboard('{ArrowDown}');
        expect(await screen.findByRole('list')).toBeInTheDocument();
    });

    it('filters the options when typing', async () => {
        const { trigger } = renderSelector();
        await openAndSearch(trigger);
        expect(getOption(/^Santiago/)).toBeInTheDocument();
        expect(screen.queryByText(/^Paris/)).not.toBeInTheDocument();
    });

    it.fails('moves focus to the first option with ArrowDown from the search input', async () => {
        const { trigger } = renderSelector();
        await openAndSearch(trigger);
        await userEvent.keyboard('{ArrowDown}');
        expect(getOption(/^Santarem/)).toHaveFocus();
    });

    it('moves focus between options with ArrowDown and ArrowUp', async () => {
        const { trigger } = renderSelector();
        await openAndSearch(trigger);
        getOption(/^Santarem/).focus();
        await userEvent.keyboard('{ArrowDown}');
        expect(getOption(/^Santiago/)).toHaveFocus();
        await userEvent.keyboard('{ArrowUp}');
        expect(getOption(/^Santarem/)).toHaveFocus();
    });

    it('selects the focused option with Enter and closes', async () => {
        const { trigger, onChange } = renderSelector();
        await openAndSearch(trigger);
        getOption(/^Santiago/).focus();
        await userEvent.keyboard('{Enter}');
        expect(onChange).toHaveBeenCalledWith(expect.anything(), 'America/Santiago');
        await waitFor(() => expect(screen.queryByRole('list')).not.toBeInTheDocument());
    });

    it.fails('closes with Escape and returns focus to the trigger', async () => {
        const { trigger } = renderSelector();
        await openAndSearch(trigger);
        await userEvent.keyboard('{Escape}');
        await waitFor(() => expect(screen.queryByRole('list')).not.toBeInTheDocument());
        expect(trigger).toHaveFocus();
    });
});
