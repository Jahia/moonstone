import {fireEvent, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Temporal} from 'temporal-polyfill';
import {DateTimeInput} from './index';
import {formatDateDisplayValue, type DateTimeInputValue} from '../shared';

const nextMonthLabel = 'Next month';
const previousMonthLabel = 'Previous month';
const march2026 = 'March 2026';
const april2026 = 'April 2026';

// Temporal values expose their fields through getters, not enumerable own properties,
// so `toEqual`/`objectContaining` cannot compare them; assert on the canonical string instead.
const emittedDate = (mock: ReturnType<typeof vi.fn>) =>
    (mock.mock.lastCall?.[1] as DateTimeInputValue | undefined)?.date ?? null;

describe('DateTimeInput', () => {
    it('should open the calendar and select today', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(
            <DateTimeInput
                type="date"
                defaultValue={{date: null}}
                placeholder="Select a date"
                onChange={handleChange}
            />
        );

        await user.click(screen.getByPlaceholderText('Select a date'));
        await user.click(screen.getByText('Today'));

        expect(emittedDate(handleChange)?.toString())
            .toBe(Temporal.Now.plainDateISO().toPlainDateTime().toString());
    });

    it('should disable the today shortcut when today is configured as unavailable', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(
            <DateTimeInput
                type="date"
                placeholder="Select a date"
                disabledDates={[Temporal.Now.plainDateISO()]}
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
                defaultValue={{date: null}}
                placeholder="Select a date"
                onChange={handleChange}
            />
        );

        await user.click(screen.getByPlaceholderText('Select a date'));
        await user.click(screen.getByText('Today'));

        expect(emittedDate(handleChange)?.toString())
            .toBe(Temporal.Now.plainDateISO().toPlainDateTime().toString());
    });

    it('should render the 24h datetime layout and trigger timezone changes', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(
            <DateTimeInput
                hasTimezone
                type="datetime"
                defaultValue={{date: Temporal.PlainDateTime.from('2026-02-10T11:56'), timezone: 'Europe/Paris'}}
                onChange={handleChange}
            />
        );

        expect(screen.getByDisplayValue(formatDateDisplayValue(Temporal.PlainDate.from('2026-02-10')))).toBeInTheDocument();
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

    it('should reset the selected datetime to midnight when the time is cleared', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(
            <DateTimeInput
                type="datetime"
                defaultValue={{date: Temporal.PlainDateTime.from('2026-02-10T11:56')}}
                onChange={handleChange}
            />
        );

        await user.clear(screen.getByDisplayValue('11:56'));

        expect(emittedDate(handleChange)?.toString()).toBe('2026-02-10T00:00:00');
    });

    it('should keep midnight after clearing the time and selecting another date', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(
            <DateTimeInput
                type="datetime"
                defaultValue={{date: Temporal.PlainDateTime.from('2026-02-10T11:56')}}
                onChange={handleChange}
            />
        );

        await user.clear(screen.getByDisplayValue('11:56'));
        await user.click(screen.getByDisplayValue(formatDateDisplayValue(Temporal.PlainDate.from('2026-02-10'))));
        await user.click(screen.getByText('12'));

        expect(emittedDate(handleChange)?.toString()).toBe('2026-02-12T00:00:00');
    });

    it('should not emit a change while the time is incomplete', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(
            <DateTimeInput
                type="datetime"
                defaultValue={{date: Temporal.PlainDateTime.from('2026-02-10T11:56')}}
                onChange={handleChange}
            />
        );

        const timeInput = screen.getByDisplayValue('11:56');
        await user.clear(timeInput);
        handleChange.mockClear();
        await user.type(timeInput, '12');

        expect(handleChange).not.toHaveBeenCalled();
    });

    it('should emit the selected date with the typed complete time', async () => {
        const user = userEvent.setup();
        const handleChange = vi.fn();

        render(
            <DateTimeInput
                type="datetime"
                defaultValue={{date: Temporal.PlainDateTime.from('2026-02-10T11:56')}}
                onChange={handleChange}
            />
        );

        const timeInput = screen.getByDisplayValue('11:56');
        await user.clear(timeInput);
        handleChange.mockClear();
        await user.type(timeInput, '1425');

        expect(handleChange).toHaveBeenCalledTimes(1);
        expect(emittedDate(handleChange)).toBeInstanceOf(Temporal.PlainDateTime);
        expect(emittedDate(handleChange)?.toString()).toBe('2026-02-10T14:25:00');
    });

    it('should render the 12h datetime layout with meridiem and timezone', () => {
        render(
            <DateTimeInput
                hasTimezone
                type="datetime"
                timeFormat="12h"
                defaultValue={{date: Temporal.PlainDateTime.from('2026-02-10T23:56'), timezone: 'Europe/Paris'}}
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
                defaultValue={{date: Temporal.PlainDateTime.from('2026-02-10T02:30')}}
                onChange={handleChange}
            />
        );

        await user.clear(screen.getByDisplayValue('02:30'));
        await user.type(screen.getByPlaceholderText('HH:MM'), '0230');
        await user.click(screen.getByText('AM'));
        const pmOptions = screen.getAllByText('PM');
        await user.click(pmOptions[pmOptions.length - 1]);

        expect(emittedDate(handleChange)?.toString()).toBe('2026-02-10T14:30:00');
    });

    it('should disable configured dates in the calendar', async () => {
        const user = userEvent.setup();

        render(
            <DateTimeInput
                type="date"
                defaultValue={{date: Temporal.PlainDateTime.from('2026-03-30')}}
                disabledDates={[Temporal.PlainDate.from('2026-03-30')]}
                onChange={() => null}
            />
        );

        await user.click(screen.getByDisplayValue(formatDateDisplayValue(Temporal.PlainDate.from('2026-03-30'))));

        const dayButton = screen.getAllByRole('button').find(button => button.textContent === '30');
        expect(dayButton).toBeDisabled();
    });

    it('should let the user navigate to the next month without snapping back', async () => {
        const user = userEvent.setup();

        render(
            <DateTimeInput
                type="date"
                defaultValue={{date: Temporal.PlainDateTime.from('2026-03-30')}}
                locale="en-US"
                i18n={{nextMonth: nextMonthLabel, previousMonth: previousMonthLabel}}
                onChange={() => null}
            />
        );

        await user.click(screen.getByDisplayValue(formatDateDisplayValue(Temporal.PlainDate.from('2026-03-30'), 'en-US')));
        await user.click(screen.getByRole('button', {name: nextMonthLabel}));

        expect(screen.getByText(april2026)).toBeInTheDocument();
    });

    it('should render a year dropdown and let the user jump to another year', async () => {
        const user = userEvent.setup();

        render(
            <DateTimeInput
                type="date"
                defaultValue={{date: Temporal.PlainDateTime.from('2026-03-30')}}
                locale="en-US"
                i18n={{nextMonth: nextMonthLabel, previousMonth: previousMonthLabel}}
                onChange={() => null}
            />
        );

        await user.click(screen.getByDisplayValue(formatDateDisplayValue(Temporal.PlainDate.from('2026-03-30'), 'en-US')));
        await user.click(screen.getByRole('listbox', {name: '2026'}));
        await user.click(screen.getByRole('option', {name: '2024'}));

        expect(screen.getByText('March 2024')).toBeInTheDocument();
        expect(screen.getByDisplayValue(formatDateDisplayValue(Temporal.PlainDate.from('2026-03-30'), 'en-US'))).toBeInTheDocument();
    });

    it('should keep the last visited month when reopening the calendar', async () => {
        const user = userEvent.setup();
        const {container} = render(
            <DateTimeInput
                type="date"
                defaultValue={{date: Temporal.PlainDateTime.from('2026-03-30')}}
                locale="en-US"
                i18n={{nextMonth: nextMonthLabel, previousMonth: previousMonthLabel}}
                onChange={() => null}
            />
        );

        const input = screen.getByDisplayValue(formatDateDisplayValue(Temporal.PlainDate.from('2026-03-30'), 'en-US'));

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

    it('should refresh the timezone utc offset when the selected date changes internally', async () => {
        const user = userEvent.setup();

        render(
            <DateTimeInput
                hasTimezone
                type="datetime"
                defaultValue={{date: Temporal.PlainDateTime.from('2026-03-15T11:56'), timezone: 'Europe/Paris'}}
                i18n={{nextMonth: nextMonthLabel}}
                onChange={() => null}
            />
        );

        expect(screen.getByRole('listbox', {name: 'Paris (UTC +01:00)'})).toBeInTheDocument();

        await user.click(screen.getByDisplayValue(formatDateDisplayValue(Temporal.PlainDate.from('2026-03-15'))));
        await user.click(screen.getByRole('button', {name: nextMonthLabel}));
        await user.click(screen.getByText('15'));

        expect(screen.getByRole('listbox', {name: 'Paris (UTC +02:00)'})).toBeInTheDocument();
    });

    it('should ignore a date value that is not a Temporal.PlainDateTime', () => {
        render(
            <DateTimeInput
                type="date"
                // A JS Date is not a Temporal.PlainDateTime: the runtime guard must reject it.
                defaultValue={{date: new Date(2026, 1, 10) as unknown as Temporal.PlainDateTime}}
                placeholder="Select a date"
                onChange={() => null}
            />
        );

        expect(screen.getByPlaceholderText('Select a date')).toHaveValue('');
    });
});
