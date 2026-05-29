import {fireEvent, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {DateTimeInput} from './index';
import {formatDateDisplayValue, getCurrentDate} from '../shared';

const nextMonthLabel = 'Next month';
const previousMonthLabel = 'Previous month';
const march2026 = 'March 2026';
const april2026 = 'April 2026';
const july2026 = 'July 2026';

describe('DateTimeInput', () => {
    it('should open the calendar and select today', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(
            <DateTimeInput
                type="date"
                value={{date: null}}
                placeholder="Select a date"
                onChange={handleChange}
            />
        );

        await user.click(screen.getByPlaceholderText('Select a date'));
        await user.click(screen.getByText('Today'));

        const expectedDate = getCurrentDate();
        expect(handleChange).toHaveBeenLastCalledWith(
            expect.any(Object),
            expect.objectContaining({date: expectedDate})
        );
    });

    it('should disable the today shortcut when today is configured as unavailable', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();
        const today = new Date();

        render(
            <DateTimeInput
                type="date"
                placeholder="Select a date"
                disabledDates={[today]}
                onChange={handleChange}
            />
        );

        await user.click(screen.getByPlaceholderText('Select a date'));

        expect(screen.getByRole('button', {name: 'Today'})).toBeDisabled();
        expect(handleChange).not.toHaveBeenCalled();
    });

    it('should render default calendar action labels', async () => {
        const user = userEvent.setup();

        render(
            <DateTimeInput
                type="date"
                placeholder="Select a date"
                onChange={() => null}
            />
        );

        await user.click(screen.getByPlaceholderText('Select a date'));

        expect(screen.getByRole('button', {name: 'Today'})).toBeInTheDocument();
        expect(screen.getByRole('button', {name: 'Go to the next month'})).toBeInTheDocument();
        expect(screen.getByRole('button', {name: 'Go to the previous month'})).toBeInTheDocument();
    });

    it('should render custom calendar action labels', async () => {
        const user = userEvent.setup();

        render(
            <DateTimeInput
                type="date"
                placeholder="Select a date"
                i18n={{todayButton: 'Current day', nextMonth: nextMonthLabel, previousMonth: previousMonthLabel}}
                onChange={() => null}
            />
        );

        await user.click(screen.getByPlaceholderText('Select a date'));

        expect(screen.getByRole('button', {name: 'Current day'})).toBeInTheDocument();
        expect(screen.getByRole('button', {name: nextMonthLabel})).toBeInTheDocument();
        expect(screen.getByRole('button', {name: previousMonthLabel})).toBeInTheDocument();
    });

    it('should render empty when uncontrolled without a default value', () => {
        render(
            <DateTimeInput
                type="datetime"
                placeholder="Select a date"
            />
        );

        expect(screen.getByPlaceholderText('Select a date')).toHaveValue('');
        expect(screen.getByPlaceholderText('HH:MM')).toHaveValue('');
    });

    it('should select a datetime date at midnight when no time exists', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(
            <DateTimeInput
                type="datetime"
                value={{date: null}}
                placeholder="Select a date"
                onChange={handleChange}
            />
        );

        await user.click(screen.getByPlaceholderText('Select a date'));
        await user.click(screen.getByText('Today'));

        expect(handleChange).toHaveBeenLastCalledWith(
            expect.any(Object),
            expect.objectContaining({date: getCurrentDate()})
        );
    });

    it('should render the 24h datetime layout and trigger timezone changes', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(
            <DateTimeInput
                hasTimezone
                type="datetime"
                value={{date: new Date(2026, 1, 10, 11, 56), timezone: 'Europe/Paris'}}
                onChange={handleChange}
            />
        );

        expect(screen.getByDisplayValue(formatDateDisplayValue(new Date(2026, 1, 10)))).toBeInTheDocument();
        expect(screen.getByDisplayValue('11:56')).toBeInTheDocument();
        expect(screen.getByRole('listbox', {name: 'Paris (UTC +01:00)'})).toBeInTheDocument();

        await user.click(screen.getByRole('listbox', {name: 'Paris (UTC +01:00)'}));
        await user.type(screen.getByRole('searchbox'), 'toronto');
        await user.click(screen.getByText('Toronto (UTC -05:00)'));

        expect(handleChange).toHaveBeenLastCalledWith(
            expect.any(Object),
            expect.objectContaining({timezone: 'America/Toronto'})
        );
    });

    it('should not emit a midnight date when the time is cleared', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(
            <DateTimeInput
                type="datetime"
                value={{date: new Date(2026, 1, 10, 11, 56)}}
                onChange={handleChange}
            />
        );

        await user.clear(screen.getByDisplayValue('11:56'));

        expect(handleChange).not.toHaveBeenCalled();
    });

    it('should not emit a change while the time is incomplete', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(
            <DateTimeInput
                type="datetime"
                value={{date: new Date(2026, 1, 10, 11, 56)}}
                onChange={handleChange}
            />
        );

        const timeInput = screen.getByDisplayValue('11:56');
        await user.clear(timeInput);
        await user.type(timeInput, '12');

        expect(handleChange).not.toHaveBeenCalled();
    });

    it('should emit the selected date with the typed complete time', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(
            <DateTimeInput
                type="datetime"
                value={{date: new Date(2026, 1, 10, 11, 56)}}
                onChange={handleChange}
            />
        );

        const timeInput = screen.getByDisplayValue('11:56');
        await user.clear(timeInput);
        await user.type(timeInput, '1425');

        expect(handleChange).toHaveBeenCalledTimes(1);
        expect(handleChange).toHaveBeenLastCalledWith(
            expect.any(Object),
            expect.objectContaining({date: new Date(2026, 1, 10, 14, 25)})
        );
    });

    it('should render the 12h datetime layout with meridiem and timezone', () => {
        render(
            <DateTimeInput
                hasTimezone
                type="datetime"
                timeFormat="12h"
                value={{date: new Date(2026, 1, 10, 23, 56), timezone: 'Europe/Paris'}}
                onChange={() => null}
            />
        );

        expect(screen.getByDisplayValue('11:56')).toBeInTheDocument();
        expect(screen.getByText('PM')).toBeInTheDocument();
        expect(screen.getByRole('listbox', {name: 'Paris (UTC +01:00)'})).toBeInTheDocument();
    });

    it('should let the user switch meridiem in 12h datetime mode and keep canonical output', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(
            <DateTimeInput
                type="datetime"
                timeFormat="12h"
                value={{date: new Date(2026, 1, 10, 2, 30)}}
                onChange={handleChange}
            />
        );

        await user.clear(screen.getByDisplayValue('02:30'));
        await user.type(screen.getByPlaceholderText('HH:MM'), '0230');
        await user.click(screen.getByText('AM'));
        const pmOptions = screen.getAllByText('PM');
        await user.click(pmOptions[pmOptions.length - 1]);

        expect(handleChange).toHaveBeenLastCalledWith(
            expect.any(Object),
            expect.objectContaining({date: new Date(2026, 1, 10, 14, 30)})
        );
    });

    it('should disable configured dates in the calendar', async () => {
        const user = userEvent.setup();

        render(
            <DateTimeInput
                type="date"
                value={{date: new Date(2026, 2, 30)}}
                disabledDates={[new Date(2026, 2, 30)]}
                onChange={() => null}
            />
        );

        await user.click(screen.getByDisplayValue(formatDateDisplayValue(new Date(2026, 2, 30))));

        const dayButton = screen.getAllByRole('button').find(button => button.textContent === '30');
        expect(dayButton).toBeDisabled();
    });

    it('should let the user navigate to the next month without snapping back', async () => {
        const user = userEvent.setup();

        render(
            <DateTimeInput
                type="date"
                value={{date: new Date(2026, 2, 30)}}
                locale="en-US"
                i18n={{nextMonth: nextMonthLabel, previousMonth: previousMonthLabel}}
                onChange={() => null}
            />
        );

        await user.click(screen.getByDisplayValue(formatDateDisplayValue(new Date(2026, 2, 30), 'en-US')));
        await user.click(screen.getByRole('button', {name: nextMonthLabel}));

        expect(screen.getByText(april2026)).toBeInTheDocument();
    });

    it('should render a year dropdown and let the user jump to another year', async () => {
        const user = userEvent.setup();

        render(
            <DateTimeInput
                type="date"
                defaultValue={{date: new Date(2026, 2, 30)}}
                locale="en-US"
                i18n={{nextMonth: nextMonthLabel, previousMonth: previousMonthLabel}}
                onChange={() => null}
            />
        );

        await user.click(screen.getByDisplayValue(formatDateDisplayValue(new Date(2026, 2, 30), 'en-US')));
        await user.click(screen.getByRole('listbox', {name: '2026'}));
        await user.click(screen.getByRole('option', {name: '2024'}));

        expect(screen.getByText('March 2024')).toBeInTheDocument();
        expect(screen.getByDisplayValue(formatDateDisplayValue(new Date(2026, 2, 30), 'en-US'))).toBeInTheDocument();
    });

    it('should keep the last visited month when reopening the calendar', async () => {
        const user = userEvent.setup();
        const {container} = render(
            <DateTimeInput
                type="date"
                value={{date: new Date(2026, 2, 30)}}
                locale="en-US"
                i18n={{nextMonth: nextMonthLabel, previousMonth: previousMonthLabel}}
                onChange={() => null}
            />
        );

        const input = screen.getByDisplayValue(formatDateDisplayValue(new Date(2026, 2, 30), 'en-US'));

        await user.click(input);
        expect(screen.getByText(march2026)).toBeInTheDocument();

        await user.click(screen.getByRole('button', {name: nextMonthLabel}));
        expect(screen.getByText(april2026)).toBeInTheDocument();

        const overlay = container.querySelector('[aria-hidden="true"]');
        expect(overlay).toBeInTheDocument();
        fireEvent.click(overlay as HTMLElement);

        await user.click(input);
        expect(screen.getByText(march2026)).toBeInTheDocument();
    });

    it('should recenter on a new controlled value date when it changes externally', async () => {
        const user = userEvent.setup();
        const {rerender} = render(
            <DateTimeInput
                type="date"
                value={{date: new Date(2026, 2, 30)}}
                locale="en-US"
                i18n={{nextMonth: nextMonthLabel, previousMonth: previousMonthLabel}}
                onChange={() => null}
            />
        );

        await user.click(screen.getByDisplayValue(formatDateDisplayValue(new Date(2026, 2, 30), 'en-US')));
        await user.click(screen.getByRole('button', {name: nextMonthLabel}));
        expect(screen.getByText(april2026)).toBeInTheDocument();

        rerender(
            <DateTimeInput
                type="date"
                value={{date: new Date(2026, 6, 15)}}
                locale="en-US"
                i18n={{nextMonth: nextMonthLabel, previousMonth: previousMonthLabel}}
                onChange={() => null}
            />
        );

        expect(screen.getByText(july2026)).toBeInTheDocument();
    });

    it('should refresh the timezone utc offset when the selected date changes', () => {
        const {rerender} = render(
            <DateTimeInput
                hasTimezone
                type="datetime"
                value={{date: new Date(2026, 0, 15, 11, 56), timezone: 'Europe/Paris'}}
                onChange={() => null}
            />
        );

        expect(screen.getByRole('listbox', {name: 'Paris (UTC +01:00)'})).toBeInTheDocument();

        rerender(
            <DateTimeInput
                hasTimezone
                type="datetime"
                value={{date: new Date(2026, 6, 15, 11, 56), timezone: 'Europe/Paris'}}
                onChange={() => null}
            />
        );

        expect(screen.getByRole('listbox', {name: 'Paris (UTC +02:00)'})).toBeInTheDocument();
    });

    it('should not display an invalid date', () => {
        render(
            <DateTimeInput
                type="date"
                value={{date: new Date(Number.NaN)}}
                placeholder="Select a date"
                onChange={() => null}
            />
        );

        expect(screen.getByPlaceholderText('Select a date')).toHaveValue('');
    });
});
