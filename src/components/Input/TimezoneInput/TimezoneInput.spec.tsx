import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {TimezoneInput} from './index';
import {getDefaultTimezones, getTimezoneDisplayLabel} from '../shared/dateTime.utils';

describe('TimezoneInput', () => {
    const timezones = ['UTC', 'Europe/Paris', 'America/Toronto', 'Pacific/Honolulu'];
    const extendedRegionalTimezones = [
        'Africa/Cairo',
        'Africa/Johannesburg',
        'Africa/Lagos',
        'Africa/Nairobi',
        'Africa/Casablanca',
        'Australia/Sydney',
        'Australia/Melbourne',
        'Australia/Brisbane',
        'Australia/Perth',
        'Pacific/Auckland',
        'Pacific/Fiji',
        'Pacific/Guam',
        'Pacific/Tahiti'
    ];

    it('should render the placeholder when no timezone is selected', () => {
        render(
            <TimezoneInput
                allowedTimezones={timezones}
                placeholder="Select timezone"
            />
        );

        expect(screen.getByPlaceholderText('Select timezone')).toBeInTheDocument();
    });

    it('should render the selected timezone as city and utc offset', () => {
        render(
            <TimezoneInput
                value="Europe/Paris"
                allowedTimezones={timezones}
                onChange={() => undefined}
            />
        );

        expect(screen.getByDisplayValue(getTimezoneDisplayLabel('Europe/Paris'))).toBeInTheDocument();
    });

    it('should include UTC in the default timezone catalog', () => {
        expect(getDefaultTimezones()).toContain('UTC');
    });

    it('should render UTC correctly in the default display path', () => {
        render(
            <TimezoneInput
                value="UTC"
                onChange={() => undefined}
            />
        );

        expect(screen.getByDisplayValue(getTimezoneDisplayLabel('UTC'))).toBeInTheDocument();
    });

    it('should render the default shortlist and keep non short-listed zones hidden until search', async () => {
        const user = userEvent.setup();

        render(
            <TimezoneInput
                allowedTimezones={timezones}
                placeholder="Select timezone"
            />
        );

        await user.click(screen.getByPlaceholderText('Select timezone'));

        expect(screen.getByText('Europe')).toBeInTheDocument();
        expect(screen.getByText('Paris')).toBeInTheDocument();
        expect(screen.getByText('America')).toBeInTheDocument();
        expect(screen.getByText('Toronto')).toBeInTheDocument();
        expect(screen.queryByText('Honolulu')).not.toBeInTheDocument();
    });

    it('should include UTC in the default selector path when allowedTimezones is omitted', async () => {
        const user = userEvent.setup();

        render(
            <TimezoneInput
                placeholder="Select timezone"
            />
        );

        await user.click(screen.getByPlaceholderText('Select timezone'));

        expect(screen.getAllByText('UTC').length).toBeGreaterThan(1);
    });

    it('should search across the full timezone universe and call onChange', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(
            <TimezoneInput
                allowedTimezones={timezones}
                placeholder="Select timezone"
                onChange={handleChange}
            />
        );

        await user.click(screen.getByPlaceholderText('Select timezone'));
        await user.type(screen.getByRole('searchbox'), 'honolulu');
        await user.click(screen.getByText('Honolulu'));

        expect(handleChange).toHaveBeenLastCalledWith(expect.any(Object), 'Pacific/Honolulu');
    });

    it('should keep the selected non short-listed timezone visible without search', async () => {
        const user = userEvent.setup();

        render(
            <TimezoneInput
                value="Pacific/Honolulu"
                allowedTimezones={timezones}
                onChange={() => undefined}
            />
        );

        await user.click(screen.getByDisplayValue(getTimezoneDisplayLabel('Pacific/Honolulu')));

        expect(screen.getByText('Pacific')).toBeInTheDocument();
        expect(screen.getByText('Honolulu')).toBeInTheDocument();
    });

    it('should include the extended Africa, Australia and Pacific shortlists when allowed', async () => {
        const user = userEvent.setup();

        render(
            <TimezoneInput
                allowedTimezones={extendedRegionalTimezones}
                placeholder="Select timezone"
            />
        );

        await user.click(screen.getByPlaceholderText('Select timezone'));

        expect(screen.getByText('Africa')).toBeInTheDocument();
        expect(screen.getByText('Cairo')).toBeInTheDocument();
        expect(screen.getByText('Johannesburg')).toBeInTheDocument();
        expect(screen.getByText('Lagos')).toBeInTheDocument();
        expect(screen.getByText('Nairobi')).toBeInTheDocument();
        expect(screen.getByText('Casablanca')).toBeInTheDocument();
        expect(screen.getByText('Australia')).toBeInTheDocument();
        expect(screen.getByText('Sydney')).toBeInTheDocument();
        expect(screen.getByText('Melbourne')).toBeInTheDocument();
        expect(screen.getByText('Brisbane')).toBeInTheDocument();
        expect(screen.getByText('Perth')).toBeInTheDocument();
        expect(screen.getByText('Pacific')).toBeInTheDocument();
        expect(screen.getByText('Auckland')).toBeInTheDocument();
        expect(screen.getByText('Fiji')).toBeInTheDocument();
        expect(screen.getByText('Guam')).toBeInTheDocument();
        expect(screen.getByText('Tahiti')).toBeInTheDocument();
    });
});
