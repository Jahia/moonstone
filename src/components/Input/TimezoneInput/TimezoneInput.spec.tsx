import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {TimezoneInput} from './index';
import {getDefaultTimezones, getTimezoneDisplayLabel} from '../shared';

describe('TimezoneInput', () => {
    it('should render the placeholder when no timezone is selected', () => {
        render(
            <TimezoneInput
                placeholder="Select timezone"
            />
        );

        expect(screen.getByRole('listbox', {name: 'Select timezone'})).toBeInTheDocument();
    });

    it('should render the selected timezone as city and utc offset', () => {
        render(
            <TimezoneInput
                value="Europe/Paris"
                onChange={() => undefined}
            />
        );

        expect(screen.getByRole('listbox', {name: getTimezoneDisplayLabel('Europe/Paris')})).toBeInTheDocument();
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

        expect(screen.getByRole('listbox', {name: getTimezoneDisplayLabel('UTC')})).toBeInTheDocument();
    });

    it('should render the full selector catalog without the UTC shortcut group', async () => {
        const user = userEvent.setup();

        render(
            <TimezoneInput
                placeholder="Select timezone"
            />
        );

        await user.click(screen.getByRole('listbox', {name: 'Select timezone'}));

        expect(screen.queryByText('UTC')).not.toBeInTheDocument();
        expect(screen.getByText('Europe')).toBeInTheDocument();
        expect(screen.getByText('America')).toBeInTheDocument();
        expect(screen.getByText(/^Paris \(UTC \+/)).toBeInTheDocument();
    });

    it('should not include UTC in the default selector path', async () => {
        const user = userEvent.setup();

        render(
            <TimezoneInput
                placeholder="Select timezone"
            />
        );

        await user.click(screen.getByRole('listbox', {name: 'Select timezone'}));

        expect(screen.queryByText('UTC')).not.toBeInTheDocument();
    });

    it('should search across the full timezone universe and call onChange', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(
            <TimezoneInput
                placeholder="Select timezone"
                onChange={handleChange}
            />
        );

        await user.click(screen.getByRole('listbox', {name: 'Select timezone'}));
        await user.type(screen.getByRole('searchbox'), 'honolulu');
        await user.click(screen.getByText('Honolulu (UTC -10:00)'));

        expect(handleChange).toHaveBeenLastCalledWith(expect.any(Object), 'Pacific/Honolulu');
    });

    it('should render the current offset in the public component', () => {
        render(
            <TimezoneInput
                value="Europe/Paris"
                onChange={() => undefined}
            />
        );

        expect(screen.getByRole('listbox', {name: getTimezoneDisplayLabel('Europe/Paris')})).toBeInTheDocument();
    });

    it('should support canonical timezones with three segments', async () => {
        const timezone = getDefaultTimezones().find(item => item.split('/').length > 2);

        expect(timezone).toBeDefined();

        const user = userEvent.setup();

        render(
            <TimezoneInput
                value={timezone ?? null}
                onChange={() => undefined}
            />
        );

        expect(screen.getByRole('listbox', {name: getTimezoneDisplayLabel(timezone)})).toBeInTheDocument();

        await user.click(screen.getByRole('listbox', {name: getTimezoneDisplayLabel(timezone)}));
        await user.type(screen.getByRole('searchbox'), (timezone ?? '').split('/').pop() ?? '');

        expect(screen.getByText(getTimezoneDisplayLabel(timezone))).toBeInTheDocument();
    });
});
