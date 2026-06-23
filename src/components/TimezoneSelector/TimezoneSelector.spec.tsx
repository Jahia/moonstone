import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {TimezoneSelector} from './index';

// `baseDate` is this spec's reference date — a winter day, so UTC offsets are deterministic
// (Paris reads +01:00) and we can assert plain, consumer-visible labels. The DST test below
// also checks a summer date.
const baseDate = '2026-01-15';

describe('TimezoneSelector', () => {
    it('should render the placeholder when no timezone is selected', () => {
        render(<TimezoneSelector placeholder="Select timezone"/>);

        expect(screen.getByRole('listbox', {name: 'Select timezone'})).toBeInTheDocument();
    });

    it('should render the selected timezone as city and utc offset', () => {
        render(<TimezoneSelector value="Europe/Paris" referenceDate={baseDate} onChange={() => undefined}/>);

        expect(screen.getByRole('listbox', {name: 'Paris (UTC +01:00)'})).toBeInTheDocument();
    });

    it('should compute the offset for the given reference date (DST-aware)', () => {
        const {rerender} = render(<TimezoneSelector value="Europe/Paris" referenceDate={baseDate} onChange={() => undefined}/>);
        expect(screen.getByRole('listbox', {name: 'Paris (UTC +01:00)'})).toBeInTheDocument();

        // A summer date flips Paris to +02:00 — the contrast case, kept inline.
        rerender(<TimezoneSelector value="Europe/Paris" referenceDate="2026-07-15" onChange={() => undefined}/>);
        expect(screen.getByRole('listbox', {name: 'Paris (UTC +02:00)'})).toBeInTheDocument();
    });

    it('should render UTC correctly when it is the selected value', () => {
        render(<TimezoneSelector value="UTC" referenceDate={baseDate} onChange={() => undefined}/>);

        expect(screen.getByRole('listbox', {name: 'UTC (UTC +00:00)'})).toBeInTheDocument();
    });

    it('should render the grouped catalog without a UTC shortcut group', async () => {
        const user = userEvent.setup();

        render(<TimezoneSelector placeholder="Select timezone" referenceDate={baseDate}/>);

        await user.click(screen.getByRole('listbox', {name: 'Select timezone'}));

        expect(screen.queryByText('UTC')).not.toBeInTheDocument();
        expect(screen.getByText('Europe')).toBeInTheDocument();
        expect(screen.getByText('America')).toBeInTheDocument();
        expect(screen.getByText('Paris (UTC +01:00)')).toBeInTheDocument();
    });

    it('should search across the full timezone universe and call onChange with the IANA id', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(<TimezoneSelector placeholder="Select timezone" referenceDate={baseDate} onChange={handleChange}/>);

        await user.click(screen.getByRole('listbox', {name: 'Select timezone'}));
        await user.type(screen.getByRole('searchbox'), 'honolulu');
        await user.click(screen.getByText('Honolulu (UTC -10:00)'));

        expect(handleChange).toHaveBeenLastCalledWith(expect.any(Object), 'Pacific/Honolulu');
    });

    it('should update the selected timezone internally in uncontrolled mode', async () => {
        const user = userEvent.setup();

        render(<TimezoneSelector defaultValue="Europe/Paris" referenceDate={baseDate}/>);

        await user.click(screen.getByRole('listbox', {name: 'Paris (UTC +01:00)'}));
        await user.type(screen.getByRole('searchbox'), 'honolulu');
        await user.click(screen.getByText('Honolulu (UTC -10:00)'));

        expect(screen.getByRole('listbox', {name: 'Honolulu (UTC -10:00)'})).toBeInTheDocument();
    });

    it('should keep the controlled value until the parent updates it', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(<TimezoneSelector value="Europe/Paris" referenceDate={baseDate} onChange={handleChange}/>);

        await user.click(screen.getByRole('listbox', {name: 'Paris (UTC +01:00)'}));
        await user.type(screen.getByRole('searchbox'), 'honolulu');
        await user.click(screen.getByText('Honolulu (UTC -10:00)'));

        expect(handleChange).toHaveBeenLastCalledWith(expect.any(Object), 'Pacific/Honolulu');
        expect(screen.getByRole('listbox', {name: 'Paris (UTC +01:00)'})).toBeInTheDocument();
        expect(screen.queryByRole('listbox', {name: 'Honolulu (UTC -10:00)'})).not.toBeInTheDocument();
    });

    it('should support canonical timezones with three segments', async () => {
        const user = userEvent.setup();

        render(<TimezoneSelector value="America/Argentina/Buenos_Aires" referenceDate={baseDate} onChange={() => undefined}/>);

        const selected = screen.getByRole('listbox', {name: 'Buenos Aires (UTC -03:00)'});
        expect(selected).toBeInTheDocument();

        await user.click(selected);
        await user.type(screen.getByRole('searchbox'), 'Buenos');

        expect(screen.getAllByRole('option', {name: 'Buenos Aires (UTC -03:00)'}).length).toBeGreaterThan(0);
    });
});
